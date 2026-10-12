import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.htm': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf',
  '.txt': 'text/plain; charset=utf-8'
};

function serveFile(res, filePath) {
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for SPA/client routes
      const indexPath = path.join(__dirname, 'index.html');
      fs.readFile(indexPath, (readErr, content) => {
        if (readErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(content);
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
}

const server = http.createServer((req, res) => {
  // Parse clean URL pathname
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Security check: prevent directory traversal
  const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');

  // 1. Root route
  if (safePath === '/' || safePath === '') {
    serveFile(res, path.join(__dirname, 'index.html'));
    return;
  }

  // 2. Admin routes
  if (safePath === '/admin' || safePath === '/admin/') {
    serveFile(res, path.join(__dirname, 'admin', 'index.html'));
    return;
  }
  if (safePath.startsWith('/admin/')) {
    const subPath = safePath.replace(/^\/admin\//, '');
    const targetFile = path.join(__dirname, 'admin', subPath);
    if (fs.existsSync(targetFile) && fs.statSync(targetFile).isFile()) {
      serveFile(res, targetFile);
      return;
    }
    // Fallback for admin subpaths
    serveFile(res, path.join(__dirname, 'admin', 'index.html'));
    return;
  }

  // 3. Direct file in root
  const directPath = path.join(__dirname, safePath);
  if (fs.existsSync(directPath) && fs.statSync(directPath).isFile()) {
    serveFile(res, directPath);
    return;
  }

  // 4. Clean routes without .html (e.g. /about -> /about.html, /services -> /services.html)
  const htmlPath = path.join(__dirname, `${safePath}.html`);
  if (fs.existsSync(htmlPath) && fs.statSync(htmlPath).isFile()) {
    serveFile(res, htmlPath);
    return;
  }

  // 5. Fallback
  serveFile(res, path.join(__dirname, 'index.html'));
});

server.listen(PORT, HOST, () => {
  console.log(`Aken Tech Solution server running at http://${HOST}:${PORT}`);
  console.log(`Admin Panel available at http://${HOST}:${PORT}/admin`);
});
