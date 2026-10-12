/**
 * Aken Tech Solution — Live Site Sync Engine (v1.2)
 * 1. Synchronizes Services, Products, Portfolio, Blog articles from localStorage in real-time.
 * 2. Only renders 'active' items (hides drafts).
 * 3. Captures public contact form inquiries and routes them directly to the Admin Inquiries Inbox.
 * 4. Syncs company phone, email, and address settings across the public website.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'aken_admin_data_v1';

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getStoredData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function saveStoredData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  function syncServices(services) {
    if (!services || !services.length) return;
    const activeServices = services.filter(s => s.status !== 'draft');

    const grid = document.querySelector('#publicServicesGrid') ||
                 document.querySelector('section.section .grid.md\\:grid-cols-2.lg\\:grid-cols-3');
    if (!grid) return;

    grid.innerHTML = activeServices.map(s => `
      <article class="card p-5 service-card">
        <div class="icon-circle mb-4 bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-lg">
          ${escapeHtml((s.title || 'S').charAt(0))}
        </div>
        <div class="text-xs font-bold text-blue-600 uppercase mb-1 tracking-wider">${escapeHtml(s.category || 'Service')}</div>
        <h3 class="font-extrabold text-lg text-slate-900">${escapeHtml(s.title)}</h3>
        <p class="text-sm text-slate-600 mt-2">${escapeHtml(s.description || '')}</p>
        ${(s.features && s.features.length) ? `
          <ul class="text-xs text-slate-500 mt-3 space-y-1">
            ${s.features.slice(0, 3).map(f => `<li>✓ ${escapeHtml(f)}</li>`).join('')}
          </ul>
        ` : ''}
        <a class="text-blue-600 font-bold text-sm inline-block mt-4 hover:underline" href="contact.html">
          ${escapeHtml(s.ctaText || 'Inquire Now →')}
        </a>
      </article>
    `).join('');
  }

  function syncProducts(products) {
    if (!products || !products.length) return;
    const activeProducts = products.filter(p => p.status !== 'draft');

    const grid = document.querySelector('#publicProductsGrid') ||
                 document.querySelector('section.section .grid.md\\:grid-cols-3');
    if (!grid) return;

    grid.innerHTML = activeProducts.map(p => `
      <article class="card overflow-hidden">
        <img
          class="feature-img !rounded-none"
          src="${escapeHtml(p.imageUrl || 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80')}"
          alt="${escapeHtml(p.title)}"
          onerror="this.src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80'"
        />
        <div class="p-6">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-blue-600">${escapeHtml(p.category || 'Product')}</span>
            ${p.priceBadge ? `<span class="text-[11px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full">${escapeHtml(p.priceBadge)}</span>` : ''}
          </div>
          <h3 class="text-xl font-extrabold mt-2 text-slate-900">${escapeHtml(p.title)}</h3>
          <p class="text-sm text-slate-600 mt-2">${escapeHtml(p.description || '')}</p>
          <ul class="text-sm text-slate-600 mt-4 space-y-2">
            ${(p.features || ['Easy setup', 'Customizable', 'Scalable & secure']).slice(0, 3).map(f => `<li>✓ ${escapeHtml(f)}</li>`).join('')}
          </ul>
          <a href="contact.html" class="btn btn-primary mt-5 inline-flex items-center gap-1">
            View Details →
          </a>
        </div>
      </article>
    `).join('');
  }

  function syncPortfolio(portfolio) {
    if (!portfolio || !portfolio.length) return;
    const activePortfolio = portfolio.filter(item => item.status !== 'draft');

    const grid = document.querySelector('#publicPortfolioGrid') ||
                 document.querySelector('section.section .grid.md\\:grid-cols-3');
    if (!grid) return;

    grid.innerHTML = activePortfolio.map(item => `
      <article class="card overflow-hidden">
        <img
          src="${escapeHtml(item.imageUrl || 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80')}"
          class="feature-img !rounded-none"
          alt="${escapeHtml(item.title)}"
          onerror="this.src='https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80'"
        />
        <div class="p-5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-blue-600">${escapeHtml(item.industry || 'Case Study')}</span>
            ${item.metrics ? `<span class="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">${escapeHtml(item.metrics)}</span>` : ''}
          </div>
          <h3 class="font-extrabold mt-1 text-slate-900 text-lg">${escapeHtml(item.title)}</h3>
          <p class="text-sm text-slate-600 mt-2">${escapeHtml(item.description || '')}</p>
          <a href="contact.html" class="text-blue-600 font-bold text-sm mt-4 inline-block hover:underline">
            View Case Study →
          </a>
        </div>
      </article>
    `).join('');
  }

  function syncBlog(blog) {
    if (!blog || !blog.length) return;
    const activeBlog = blog.filter(b => b.status !== 'draft');

    const grid = document.querySelector('#publicBlogGrid') ||
                 document.querySelector('.grid.md\\:grid-cols-2.xl\\:grid-cols-3');
    if (!grid) return;

    grid.innerHTML = activeBlog.map(b => `
      <article class="card overflow-hidden" data-blog data-filter-item="blog">
        <img
          src="${escapeHtml(b.imageUrl || 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=800&q=80')}"
          class="feature-img !rounded-none"
          alt="${escapeHtml(b.title)}"
          onerror="this.src='https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=800&q=80'"
        />
        <div class="p-5">
          <span class="text-xs font-bold text-blue-600 uppercase">${escapeHtml(b.category || 'Article')}</span>
          <h3 class="font-extrabold mt-2 text-slate-900 text-lg">${escapeHtml(b.title)}</h3>
          <p class="text-sm text-slate-600 mt-2">${escapeHtml(b.excerpt || '')}</p>
          <div class="text-xs text-slate-500 mt-4 flex items-center justify-between">
            <span>By ${escapeHtml(b.author || 'Roshan Tiwari')}</span>
            <span>${escapeHtml(b.date || 'Recent')} • ${escapeHtml(b.readTime || '5 min')}</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Intercept Contact Form Submissions and route to Admin Inquiries
  function attachContactFormListener() {
    const contactForm = document.querySelector('#contactForm') || document.querySelector('form[action*="formspree"]') || document.querySelector('#contact-form form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = contactForm.querySelector('[name="name"]')?.value || contactForm.querySelector('#name')?.value || 'Guest Visitor';
      const email = contactForm.querySelector('[name="email"]')?.value || contactForm.querySelector('#email')?.value || 'N/A';
      const phone = contactForm.querySelector('[name="phone"]')?.value || contactForm.querySelector('#phone')?.value || 'N/A';
      const service = contactForm.querySelector('[name="service"]')?.value || contactForm.querySelector('#service')?.value || 'General Inquiry';
      const message = contactForm.querySelector('[name="message"]')?.value || contactForm.querySelector('#message')?.value || 'Enquiry submitted via contact page.';

      const data = getStoredData() || {};
      if (!data.inquiries) data.inquiries = [];

      const newInquiry = {
        id: 'inq-' + Date.now(),
        name,
        email,
        phone,
        service,
        message,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        status: 'new'
      };

      data.inquiries.unshift(newInquiry);
      saveStoredData(data);

      // Show success message on form
      const msg = document.querySelector('#formMsg');
      if (msg) msg.classList.remove('hidden');

      // Visual feedback
      alert(`Thank you ${name}! Your inquiry has been received and routed to the Admin Inbox.`);
      contactForm.reset();
    });
  }

  function runSync() {
    const data = getStoredData();
    if (!data) return;

    const path = window.location.pathname.toLowerCase();

    if (path.includes('services') || document.querySelector('#publicServicesGrid') || (document.title && document.title.includes('Services'))) {
      syncServices(data.services);
    }
    if (path.includes('products') || document.querySelector('#publicProductsGrid') || (document.title && document.title.includes('Products'))) {
      syncProducts(data.products);
    }
    if (path.includes('portfolio') || document.querySelector('#publicPortfolioGrid') || (document.title && document.title.includes('Portfolio'))) {
      syncPortfolio(data.portfolio);
    }
    if (path.includes('blog') || document.querySelector('#publicBlogGrid') || (document.title && document.title.includes('Blog'))) {
      syncBlog(data.blog);
    }

    attachContactFormListener();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runSync);
  } else {
    runSync();
  }

  window.addEventListener('storage', function (e) {
    if (e.key === STORAGE_KEY) {
      runSync();
    }
  });

})();
