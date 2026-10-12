/**
 * Aken Tech Solution — Admin Panel Engine
 * Vanilla JavaScript (ES6+), localStorage persistence, no backend required
 */

(function () {
  'use strict';

  // Storage Keys
  const STORAGE_KEY = 'aken_admin_data_v1';
  const ACTIVITY_KEY = 'aken_admin_activity_v1';
  const AUTH_KEY = 'aken_admin_auth_v1';

  // Initial Seed Data matching actual Aken Tech Solution content
  const SEED_DATA = {
    services: [
      {
        id: 'srv-1',
        title: 'Performance Marketing',
        category: 'Digital Marketing',
        description: 'Meta Ads, Google Ads, and targeted lead generation funnels delivering predictable ROI.',
        badge: 'High Demand',
        iconType: 'chart',
        features: ['Meta & Instagram Ad Scaling', 'Google Search & Display Ads', 'Conversion Tracking & Analytics'],
        ctaText: 'Inquire Now →',
        updatedAt: '2025-03-01'
      },
      {
        id: 'srv-2',
        title: 'Real Estate Solutions',
        category: 'Industry Specific',
        description: 'High-quality property leads, automated WhatsApp follow-ups, and sales growth systems.',
        badge: 'Specialized',
        iconType: 'building',
        features: ['Verified Buyer Inquiries', 'Property Landing Pages', 'Automated Lead Qualification'],
        ctaText: 'Inquire Now →',
        updatedAt: '2025-03-02'
      },
      {
        id: 'srv-3',
        title: 'Web Development',
        category: 'Development',
        description: 'Ultra-fast business websites, e-commerce storefronts, and bespoke web applications.',
        badge: 'Popular',
        iconType: 'code',
        features: ['Responsive UI/UX Design', 'SEO & Speed Optimization', 'Clean Semantic Code'],
        ctaText: 'Inquire Now →',
        updatedAt: '2025-03-03'
      },
      {
        id: 'srv-4',
        title: 'WhatsApp Automation',
        category: 'Automation',
        description: 'Official WhatsApp Business API integration, AI-powered chatbots, and broadcast sequences.',
        badge: 'Top Rated',
        iconType: 'bot',
        features: ['Green Tick API Support', 'Automated Instant Replies', 'CRM Sync & Broadcasts'],
        ctaText: 'Inquire Now →',
        updatedAt: '2025-03-04'
      },
      {
        id: 'srv-5',
        title: 'Custom Software & CRM',
        category: 'Software',
        description: 'Bespoke CRM systems, operational dashboards, and inventory management tailored to your workflows.',
        badge: 'Enterprise',
        iconType: 'cpu',
        features: ['Role-Based User Portals', 'Cloud Data Synchronization', 'Scalable Architecture'],
        ctaText: 'Inquire Now →',
        updatedAt: '2025-03-05'
      },
      {
        id: 'srv-6',
        title: 'Branding & UI/UX Design',
        category: 'Design',
        description: 'Modern corporate identity, high-converting product UI, and complete design toolkits.',
        badge: 'Creative',
        iconType: 'palette',
        features: ['Vector Logo Packages', 'Figma Wireframing & Prototypes', 'Marketing Collaterals'],
        ctaText: 'Inquire Now →',
        updatedAt: '2025-03-06'
      }
    ],

    products: [
      {
        id: 'prod-1',
        title: 'NGO Management System',
        category: 'NGO',
        tag: 'Non-Profit Tech',
        description: 'Complete donor tracking, 80G tax receipt automation, volunteer management, and fundraising portal.',
        imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80',
        features: ['Automated 80G Tax Receipts', 'Online Donation Gateways', 'Volunteer Task Management', 'Event Attendance Tracker'],
        priceBadge: 'Ready to Deploy',
        updatedAt: '2025-03-01'
      },
      {
        id: 'prod-2',
        title: 'Real Estate CRM & Lead Engine',
        category: 'Real Estate',
        tag: 'PropTech',
        description: 'Multi-agent property management system with automated WhatsApp scheduling and site-visit tracking.',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
        features: ['Interactive Property Listings', 'Instant WhatsApp Alerts', 'Agent Commission Tracking', 'Site Visit Calendar'],
        priceBadge: 'Turnkey Solution',
        updatedAt: '2025-03-02'
      },
      {
        id: 'prod-3',
        title: 'Omnichannel E-Commerce Suite',
        category: 'E-Commerce',
        tag: 'Retail Tech',
        description: 'Modern, high-converting store platform equipped with integrated payment gateways, cart recovery, and logistics.',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
        features: ['Sub-second Page Load', 'UPI, Cards & COD Gateways', 'Abandoned Cart Recovery', 'Automated Courier Tracking'],
        priceBadge: 'Custom Pricing',
        updatedAt: '2025-03-03'
      },
      {
        id: 'prod-4',
        title: 'Smart Business Invoicing ERP',
        category: 'Software',
        tag: 'Business Suite',
        description: 'Fast cloud invoicing, GST calculation, warehouse inventory tracking, and client billing portal.',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
        features: ['GST Ready Invoices', 'Live Stock Valuation', 'Vendor Management', 'Financial Analytics'],
        priceBadge: 'Subscription',
        updatedAt: '2025-03-04'
      }
    ],

    portfolio: [
      {
        id: 'port-1',
        title: 'NGO Website & Donor Portal',
        client: 'Hope & Smile Foundation',
        industry: 'NGO / Non-Profit',
        description: 'Engineered a modern web portal featuring automated instant receipt generation, donor CRM, and volunteer onboarding.',
        imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80',
        metrics: '₹18L+ Online Donations in 90 Days',
        tags: ['Web Design', 'CRM Automation', 'Razorpay'],
        caseUrl: '#',
        updatedAt: '2025-02-15'
      },
      {
        id: 'port-2',
        title: 'Prestige Realty Property Engine',
        client: 'Prestige Group Realtor',
        industry: 'Real Estate',
        description: 'Developed an automated property catalog paired with targeted Meta Ads and instant WhatsApp appointment booking.',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
        metrics: '420+ Verified Site Visits Generated',
        tags: ['Meta Ads', 'WhatsApp Bot', 'Landing Page'],
        caseUrl: '#',
        updatedAt: '2025-02-20'
      },
      {
        id: 'port-3',
        title: 'Urban Boutique Fashion Brand',
        client: 'Aura Apparel India',
        industry: 'E-Commerce / Fashion',
        description: 'Complete brand redesign and custom shop launch with automated inventory sync and retargeting ads.',
        imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
        metrics: '3.4x ROAS & 62% Increase in Repeat Orders',
        tags: ['E-Commerce', 'Performance Marketing', 'UI/UX'],
        caseUrl: '#',
        updatedAt: '2025-02-28'
      },
      {
        id: 'port-4',
        title: 'CityCare Medical Clinic Portal',
        client: 'CityCare Healthcare',
        industry: 'Healthcare',
        description: 'Streamlined doctor scheduling portal reducing queue waiting times and automating SMS appointment reminders.',
        imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80',
        metrics: '45% Reduction in Missed Appointments',
        tags: ['Custom Portal', 'SMS Gateway', 'Booking Flow'],
        caseUrl: '#',
        updatedAt: '2025-03-01'
      }
    ],

    blog: [
      {
        id: 'blog-1',
        title: 'How Businesses Can Grow with WhatsApp Automation in 2025',
        category: 'WhatsApp & Automation',
        author: 'Roshan Tiwari',
        date: 'Jan 15, 2025',
        readTime: '5 min read',
        featured: true,
        imageUrl: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=900&q=80',
        excerpt: 'Discover how WhatsApp automation is helping businesses generate more leads, improve customer engagement and increase sales.',
        content: 'WhatsApp is no longer just a messaging app; it is the most powerful customer conversion engine available to modern Indian businesses...',
        updatedAt: '2025-01-15'
      },
      {
        id: 'blog-2',
        title: 'Why Real Estate Developers Need a Dedicated CRM System',
        category: 'Real Estate',
        author: 'Aken Tech Team',
        date: 'Feb 02, 2025',
        readTime: '4 min read',
        featured: false,
        imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
        excerpt: 'Stop losing valuable property leads to manual spreadsheets and delayed follow-ups.',
        content: 'Speed to lead determines property deal closures. Learn how real estate teams automate lead distribution...',
        updatedAt: '2025-02-02'
      },
      {
        id: 'blog-3',
        title: 'Modern Web Development: Why Page Speed Directly Drives Revenue',
        category: 'Web Development',
        author: 'Tech Lead',
        date: 'Feb 18, 2025',
        readTime: '6 min read',
        featured: false,
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
        excerpt: 'Every millisecond of latency costs conversions. How to build lightning-fast web applications.',
        content: 'User attention spans have dropped to seconds. If your site does not paint in under 1.5 seconds, bounce rates multiply...',
        updatedAt: '2025-02-18'
      },
      {
        id: 'blog-4',
        title: 'Scaling Performance Marketing in 2025: Beyond Meta Ads',
        category: 'Digital Marketing',
        author: 'Marketing Strategist',
        date: 'Mar 01, 2025',
        readTime: '4 min read',
        featured: false,
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
        excerpt: 'A comprehensive guide to omnichannel performance marketing, Google Search funnels, and creative iteration.',
        content: 'Ad costs fluctuate, but customer lifetime value remains the foundation of sustainable scaling...',
        updatedAt: '2025-03-01'
      }
    ]
  };

  // State
  let appData = {};
  let activities = [];
  let currentView = 'dashboard';
  let deleteTarget = null; // { type, id, title }
  let editTarget = null;   // { type, id }

  // -------------------------------------------------------------------------
  // LocalStorage Helpers
  // -------------------------------------------------------------------------
  function loadData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        appData = JSON.parse(stored);
      } else {
        appData = JSON.parse(JSON.stringify(SEED_DATA));
        saveData(false);
      }
    } catch (e) {
      console.error('Failed to parse localStorage data, restoring seeds', e);
      appData = JSON.parse(JSON.stringify(SEED_DATA));
    }

    try {
      const storedActs = localStorage.getItem(ACTIVITY_KEY);
      activities = storedActs ? JSON.parse(storedActs) : [
        { text: 'Admin Panel initialized with website content', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ];
    } catch (e) {
      activities = [];
    }
  }

  function saveData(logActivity = true, logMessage = '') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
      if (logActivity && logMessage) {
        logAction(logMessage);
      }
    } catch (e) {
      showToast('Error saving to localStorage: storage may be full', 'error');
    }
  }

  function logAction(msg) {
    const act = {
      text: msg,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    activities.unshift(act);
    if (activities.length > 20) activities.pop();
    try {
      localStorage.setItem(ACTIVITY_KEY, JSON.stringify(activities));
    } catch (e) {}
  }

  // -------------------------------------------------------------------------
  // Toast Notifications
  // -------------------------------------------------------------------------
  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = '<svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
    } else if (type === 'error') {
      iconSvg = '<svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
    } else {
      iconSvg = '<svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
    }

    toast.innerHTML = `
      <div style="flex-shrink:0;">${iconSvg}</div>
      <div style="flex:1;">${escapeHtml(message)}</div>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // -------------------------------------------------------------------------
  // View Router
  // -------------------------------------------------------------------------
  function switchView(viewName) {
    currentView = viewName;

    // Update nav links
    document.querySelectorAll('.nav-item').forEach(el => {
      if (el.dataset.view === viewName) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    // Update view panels
    document.querySelectorAll('.view-panel').forEach(panel => {
      if (panel.id === `view-${viewName}`) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    // Update breadcrumb
    const breadcrumb = document.getElementById('currentBreadcrumb');
    if (breadcrumb) {
      const titles = {
        dashboard: 'Dashboard Overview',
        services: 'Services Management',
        products: 'Products Management',
        portfolio: 'Portfolio Projects',
        blog: 'Blog Articles',
        preview: 'Live Website Preview',
        export: 'Export & Deployment Hub'
      };
      breadcrumb.textContent = titles[viewName] || 'Dashboard';
    }

    // Close mobile sidebar if open
    closeMobileSidebar();

    // Trigger render
    renderCurrentView();
  }

  function renderCurrentView() {
    updateBadges();
    switch (currentView) {
      case 'dashboard':
        renderDashboard();
        break;
      case 'services':
        renderServices();
        break;
      case 'products':
        renderProducts();
        break;
      case 'portfolio':
        renderPortfolio();
        break;
      case 'blog':
        renderBlog();
        break;
      case 'preview':
        renderPreview();
        break;
      case 'export':
        renderExportHub();
        break;
    }
  }

  function updateBadges() {
    const srvCount = appData.services ? appData.services.length : 0;
    const prodCount = appData.products ? appData.products.length : 0;
    const portCount = appData.portfolio ? appData.portfolio.length : 0;
    const blogCount = appData.blog ? appData.blog.length : 0;

    const bSrv = document.getElementById('badgeServices');
    const bProd = document.getElementById('badgeProducts');
    const bPort = document.getElementById('badgePortfolio');
    const bBlog = document.getElementById('badgeBlog');

    if (bSrv) bSrv.textContent = srvCount;
    if (bProd) bProd.textContent = prodCount;
    if (bPort) bPort.textContent = portCount;
    if (bBlog) bBlog.textContent = blogCount;
  }

  // -------------------------------------------------------------------------
  // Render: Dashboard
  // -------------------------------------------------------------------------
  function renderDashboard() {
    const srvCount = appData.services ? appData.services.length : 0;
    const prodCount = appData.products ? appData.products.length : 0;
    const portCount = appData.portfolio ? appData.portfolio.length : 0;
    const blogCount = appData.blog ? appData.blog.length : 0;

    // Stat counts
    const srvEl = document.getElementById('statServicesCount');
    const prodEl = document.getElementById('statProductsCount');
    const portEl = document.getElementById('statPortfolioCount');
    const blogEl = document.getElementById('statBlogCount');

    if (srvEl) srvEl.textContent = srvCount;
    if (prodEl) prodEl.textContent = prodCount;
    if (portEl) portEl.textContent = portCount;
    if (blogEl) blogEl.textContent = blogCount;

    // Render Recent Activities
    const actContainer = document.getElementById('dashboardActivities');
    if (actContainer) {
      if (activities.length === 0) {
        actContainer.innerHTML = '<p class="text-slate-500 text-sm">No recent admin activity.</p>';
      } else {
        actContainer.innerHTML = activities.slice(0, 6).map(act => `
          <div class="activity-item" style="display:flex; align-items:center; justify-content:space-between; padding:0.65rem 0; border-bottom:1px solid #f1f5f9;">
            <div style="display:flex; align-items:center; gap:0.65rem;">
              <span style="width:7px; height:7px; border-radius:50%; background:#126fe8;"></span>
              <span style="font-size:0.83rem; color:#172033; font-weight:500;">${escapeHtml(act.text)}</span>
            </div>
            <span style="font-size:0.75rem; color:#64748b;">${escapeHtml(act.timestamp)}</span>
          </div>
        `).join('');
      }
    }

    // Render Quick Breakdown Table
    const breakdownContainer = document.getElementById('dashboardBreakdown');
    if (breakdownContainer) {
      const items = [
        { label: 'Active Services Offered', count: srvCount, badge: 'Digital Marketing & Tech', link: 'services' },
        { label: 'Featured Products / Solutions', count: prodCount, badge: 'SaaS & PropTech', link: 'products' },
        { label: 'Portfolio Case Studies', count: portCount, badge: 'Client Work', link: 'portfolio' },
        { label: 'Published Blog Articles', count: blogCount, badge: 'Growth & Tech Insights', link: 'blog' },
      ];
      breakdownContainer.innerHTML = items.map(item => `
        <div style="display:flex; align-items:center; justify-content:space-between; padding:0.85rem 1rem; background:#f8fafc; border-radius:8px; margin-bottom:0.6rem; cursor:pointer;" onclick="window.adminApp.switchView('${item.link}')">
          <div>
            <div style="font-size:0.86rem; font-weight:700; color:#0a1f44;">${item.label}</div>
            <div style="font-size:0.72rem; color:#64748b;">${item.badge}</div>
          </div>
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span style="font-size:1.15rem; font-weight:800; color:#126fe8;">${item.count}</span>
            <span style="color:#94a3b8; font-size:0.9rem;">→</span>
          </div>
        </div>
      `).join('');
    }
  }

  // -------------------------------------------------------------------------
  // Render: Services Management
  // -------------------------------------------------------------------------
  function renderServices() {
    const listContainer = document.getElementById('servicesList');
    if (!listContainer) return;

    const searchTerm = (document.getElementById('servicesSearch')?.value || '').toLowerCase();
    const filterCategory = document.getElementById('servicesCategoryFilter')?.value || 'all';

    let list = appData.services || [];

    if (filterCategory !== 'all') {
      list = list.filter(item => item.category === filterCategory);
    }
    if (searchTerm) {
      list = list.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
      );
    }

    if (list.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
          </div>
          <h3>No services found</h3>
          <p>No service matched your search query or filter. Click "Add New Service" to create one.</p>
          <button class="btn btn-primary" onclick="window.adminApp.openServiceModal()">+ Add New Service</button>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = `
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Service Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Features</th>
              <th>Badge</th>
              <th style="text-align:right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(s => `
              <tr>
                <td>
                  <div class="table-item-cell">
                    <div style="width:38px; height:38px; border-radius:8px; background:#eaf3ff; color:#126fe8; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.9rem; flex-shrink:0;">
                      ${escapeHtml(s.title.charAt(0))}
                    </div>
                    <div>
                      <h4 style="font-size:0.88rem; font-weight:700; color:#0a1f44;">${escapeHtml(s.title)}</h4>
                      <span style="font-size:0.72rem; color:#64748b;">${escapeHtml(s.ctaText || 'Inquire Now')}</span>
                    </div>
                  </div>
                </td>
                <td><span class="badge badge-blue">${escapeHtml(s.category)}</span></td>
                <td><div style="max-width:280px; font-size:0.8rem; color:#475569; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escapeHtml(s.description)}</div></td>
                <td><span class="badge badge-slate">${(s.features || []).length} Points</span></td>
                <td><span class="badge badge-emerald">${escapeHtml(s.badge || 'Active')}</span></td>
                <td style="text-align:right;">
                  <div class="row-actions" style="justify-content:flex-end;">
                    <button class="action-btn" title="Live Preview" onclick="window.adminApp.previewItem('services', '${s.id}')">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    </button>
                    <button class="action-btn" title="Generate HTML" onclick="window.adminApp.generateSnippet('service', '${s.id}')">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </button>
                    <button class="action-btn" title="Edit Service" onclick="window.adminApp.openServiceModal('${s.id}')">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </button>
                    <button class="action-btn btn-delete" title="Delete Service" onclick="window.adminApp.confirmDelete('services', '${s.id}', '${escapeHtml(s.title)}')">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // -------------------------------------------------------------------------
  // Render: Products Management
  // -------------------------------------------------------------------------
  function renderProducts() {
    const listContainer = document.getElementById('productsList');
    if (!listContainer) return;

    const searchTerm = (document.getElementById('productsSearch')?.value || '').toLowerCase();
    const filterCategory = document.getElementById('productsCategoryFilter')?.value || 'all';

    let list = appData.products || [];

    if (filterCategory !== 'all') {
      list = list.filter(item => item.category === filterCategory);
    }
    if (searchTerm) {
      list = list.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
      );
    }

    if (list.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
          </div>
          <h3>No products found</h3>
          <p>No product matched your query. Click "Add New Product" to create one.</p>
          <button class="btn btn-primary" onclick="window.adminApp.openProductModal()">+ Add New Product</button>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = `
      <div class="items-grid">
        ${list.map(p => `
          <div class="item-card">
            <div class="item-card-media">
              <img class="item-card-img" src="${escapeHtml(p.imageUrl)}" alt="${escapeHtml(p.title)}" onerror="this.src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80'">
              <div class="item-card-badge">
                <span class="badge badge-blue">${escapeHtml(p.category)}</span>
              </div>
            </div>
            <div class="item-card-body">
              <h3 class="item-card-title">${escapeHtml(p.title)}</h3>
              <p class="item-card-desc">${escapeHtml(p.description)}</p>
              <div style="margin-top:auto;">
                <ul style="list-style:none; padding:0; font-size:0.78rem; color:#475569; margin-bottom:0.85rem; display:flex; flex-direction:column; gap:0.25rem;">
                  ${(p.features || []).slice(0, 3).map(f => `<li>✓ ${escapeHtml(f)}</li>`).join('')}
                </ul>
                <div style="display:flex; align-items:center; justify-content:space-between; font-size:0.75rem;">
                  <span class="badge badge-emerald">${escapeHtml(p.priceBadge || 'Available')}</span>
                  <span style="color:#64748b;">${escapeHtml(p.tag || '')}</span>
                </div>
              </div>
            </div>
            <div class="item-card-footer">
              <button class="btn btn-secondary btn-sm" onclick="window.adminApp.previewItem('products', '${p.id}')">
                Preview Card
              </button>
              <div class="row-actions">
                <button class="action-btn" title="Generate HTML" onclick="window.adminApp.generateSnippet('product', '${p.id}')">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </button>
                <button class="action-btn" title="Edit Product" onclick="window.adminApp.openProductModal('${p.id}')">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                </button>
                <button class="action-btn btn-delete" title="Delete Product" onclick="window.adminApp.confirmDelete('products', '${p.id}', '${escapeHtml(p.title)}')">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // -------------------------------------------------------------------------
  // Render: Portfolio Management
  // -------------------------------------------------------------------------
  function renderPortfolio() {
    const listContainer = document.getElementById('portfolioList');
    if (!listContainer) return;

    const searchTerm = (document.getElementById('portfolioSearch')?.value || '').toLowerCase();
    const filterIndustry = document.getElementById('portfolioIndustryFilter')?.value || 'all';

    let list = appData.portfolio || [];

    if (filterIndustry !== 'all') {
      list = list.filter(item => item.industry === filterIndustry);
    }
    if (searchTerm) {
      list = list.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.client.toLowerCase().includes(searchTerm) ||
        item.industry.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
      );
    }

    if (list.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <h3>No portfolio projects found</h3>
          <p>No project matched your filter. Click "Add New Project" to add one.</p>
          <button class="btn btn-primary" onclick="window.adminApp.openPortfolioModal()">+ Add New Project</button>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = `
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Project & Client</th>
              <th>Industry</th>
              <th>Impact / Metric</th>
              <th>Tags</th>
              <th style="text-align:right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(item => `
              <tr>
                <td>
                  <div class="table-item-cell">
                    <img class="item-thumb" src="${escapeHtml(item.imageUrl)}" alt="${escapeHtml(item.title)}" onerror="this.src='https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80'">
                    <div class="item-details">
                      <h4>${escapeHtml(item.title)}</h4>
                      <p>${escapeHtml(item.client)} • ${escapeHtml(item.description)}</p>
                    </div>
                  </div>
                </td>
                <td><span class="badge badge-blue">${escapeHtml(item.industry)}</span></td>
                <td><span class="badge badge-emerald">${escapeHtml(item.metrics || 'Completed')}</span></td>
                <td>
                  <div style="display:flex; gap:0.25rem; flex-wrap:wrap;">
                    ${(item.tags || []).slice(0, 2).map(t => `<span class="badge badge-slate">${escapeHtml(t)}</span>`).join('')}
                  </div>
                </td>
                <td style="text-align:right;">
                  <div class="row-actions" style="justify-content:flex-end;">
                    <button class="action-btn" title="Live Preview" onclick="window.adminApp.previewItem('portfolio', '${item.id}')">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    </button>
                    <button class="action-btn" title="Generate HTML" onclick="window.adminApp.generateSnippet('portfolio', '${item.id}')">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </button>
                    <button class="action-btn" title="Edit Project" onclick="window.adminApp.openPortfolioModal('${item.id}')">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </button>
                    <button class="action-btn btn-delete" title="Delete Project" onclick="window.adminApp.confirmDelete('portfolio', '${item.id}', '${escapeHtml(item.title)}')">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // -------------------------------------------------------------------------
  // Render: Blog Management
  // -------------------------------------------------------------------------
  function renderBlog() {
    const listContainer = document.getElementById('blogList');
    if (!listContainer) return;

    const searchTerm = (document.getElementById('blogSearchInput')?.value || '').toLowerCase();
    const filterCat = document.getElementById('blogCategoryFilter')?.value || 'all';

    let list = appData.blog || [];

    if (filterCat !== 'all') {
      list = list.filter(item => item.category === filterCat);
    }
    if (searchTerm) {
      list = list.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.excerpt.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
      );
    }

    if (list.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
          </div>
          <h3>No articles found</h3>
          <p>No blog post found for your current criteria. Click "Add New Article" to write one.</p>
          <button class="btn btn-primary" onclick="window.adminApp.openBlogModal()">+ Add New Article</button>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = `
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Article</th>
              <th>Category</th>
              <th>Author & Date</th>
              <th>Status</th>
              <th style="text-align:right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(post => `
              <tr>
                <td>
                  <div class="table-item-cell">
                    <img class="item-thumb" src="${escapeHtml(post.imageUrl)}" alt="${escapeHtml(post.title)}" onerror="this.src='https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=900&q=80'">
                    <div class="item-details">
                      <h4>${escapeHtml(post.title)}</h4>
                      <p>${escapeHtml(post.excerpt)}</p>
                    </div>
                  </div>
                </td>
                <td><span class="badge badge-blue">${escapeHtml(post.category)}</span></td>
                <td>
                  <div style="font-size:0.8rem; font-weight:600; color:#0a1f44;">${escapeHtml(post.author)}</div>
                  <div style="font-size:0.72rem; color:#64748b;">${escapeHtml(post.date)} • ${escapeHtml(post.readTime || '5 min')}</div>
                </td>
                <td>
                  ${post.featured ? '<span class="badge badge-amber">★ Featured</span>' : '<span class="badge badge-slate">Published</span>'}
                </td>
                <td style="text-align:right;">
                  <div class="row-actions" style="justify-content:flex-end;">
                    <button class="action-btn" title="Live Preview" onclick="window.adminApp.previewItem('blog', '${post.id}')">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    </button>
                    <button class="action-btn" title="Generate HTML" onclick="window.adminApp.generateSnippet('blog', '${post.id}')">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </button>
                    <button class="action-btn" title="Edit Article" onclick="window.adminApp.openBlogModal('${post.id}')">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </button>
                    <button class="action-btn btn-delete" title="Delete Article" onclick="window.adminApp.confirmDelete('blog', '${post.id}', '${escapeHtml(post.title)}')">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // -------------------------------------------------------------------------
  // Render: Website Live Preview
  // -------------------------------------------------------------------------
  function renderPreview() {
    const frame = document.getElementById('previewIframe');
    if (!frame) return;
    // Default page if not set
    if (!frame.src || frame.src === 'about:blank') {
      loadPreviewPage('../index.html');
    }
  }

  function loadPreviewPage(url) {
    const frame = document.getElementById('previewIframe');
    if (frame) {
      frame.src = url;
    }
    // Update active button
    document.querySelectorAll('.preview-page-btn').forEach(btn => {
      if (btn.dataset.page === url) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function setPreviewDevice(mode) {
    const frame = document.getElementById('previewIframe');
    if (!frame) return;

    frame.classList.remove('device-tablet', 'device-mobile');
    if (mode === 'tablet') {
      frame.classList.add('device-tablet');
    } else if (mode === 'mobile') {
      frame.classList.add('device-mobile');
    }

    document.querySelectorAll('.device-btn').forEach(btn => {
      if (btn.dataset.device === mode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // -------------------------------------------------------------------------
  // Render: Export & Deployment Hub
  // -------------------------------------------------------------------------
  function renderExportHub() {
    // Populate counts and dates
    const srvCount = appData.services ? appData.services.length : 0;
    const prodCount = appData.products ? appData.products.length : 0;
    const portCount = appData.portfolio ? appData.portfolio.length : 0;
    const blogCount = appData.blog ? appData.blog.length : 0;

    const metaSpan = document.getElementById('exportMetaSummary');
    if (metaSpan) {
      metaSpan.textContent = `${srvCount} Services, ${prodCount} Products, ${portCount} Projects, ${blogCount} Articles`;
    }
  }

  // -------------------------------------------------------------------------
  // Modals & Form Handlers
  // -------------------------------------------------------------------------
  function openServiceModal(id = null) {
    editTarget = id ? { type: 'services', id } : null;
    const modal = document.getElementById('serviceModal');
    const titleEl = document.getElementById('serviceModalTitle');
    const form = document.getElementById('serviceForm');

    form.reset();
    clearFormErrors(form);

    if (id) {
      titleEl.textContent = 'Edit Service';
      const item = (appData.services || []).find(s => s.id === id);
      if (item) {
        document.getElementById('serviceTitle').value = item.title || '';
        document.getElementById('serviceCategory').value = item.category || 'Digital Marketing';
        document.getElementById('serviceBadge').value = item.badge || '';
        document.getElementById('serviceDesc').value = item.description || '';
        document.getElementById('serviceFeatures').value = (item.features || []).join('\n');
        document.getElementById('serviceCta').value = item.ctaText || 'Inquire Now →';
      }
    } else {
      titleEl.textContent = 'Add New Service';
      document.getElementById('serviceCta').value = 'Inquire Now →';
    }

    modal.classList.add('active');
  }

  function handleServiceSubmit(e) {
    e.preventDefault();
    const form = e.target;
    clearFormErrors(form);

    const title = document.getElementById('serviceTitle').value.trim();
    const category = document.getElementById('serviceCategory').value;
    const badge = document.getElementById('serviceBadge').value.trim();
    const description = document.getElementById('serviceDesc').value.trim();
    const featuresRaw = document.getElementById('serviceFeatures').value.trim();
    const ctaText = document.getElementById('serviceCta').value.trim() || 'Inquire Now →';

    let isValid = true;
    if (!title) {
      markInvalid('serviceTitle');
      isValid = false;
    }
    if (!description) {
      markInvalid('serviceDesc');
      isValid = false;
    }

    if (!isValid) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    const features = featuresRaw ? featuresRaw.split('\n').map(s => s.trim()).filter(Boolean) : [];

    if (editTarget && editTarget.id) {
      const idx = appData.services.findIndex(s => s.id === editTarget.id);
      if (idx !== -1) {
        appData.services[idx] = {
          ...appData.services[idx],
          title,
          category,
          badge,
          description,
          features,
          ctaText,
          updatedAt: new Date().toISOString().split('T')[0]
        };
        saveData(true, `Updated service: ${title}`);
        showToast('Service updated successfully!', 'success');
      }
    } else {
      const newService = {
        id: 'srv-' + Date.now(),
        title,
        category,
        badge: badge || 'Active',
        description,
        features,
        ctaText,
        updatedAt: new Date().toISOString().split('T')[0]
      };
      if (!appData.services) appData.services = [];
      appData.services.unshift(newService);
      saveData(true, `Added new service: ${title}`);
      showToast('New service added successfully!', 'success');
    }

    closeModal('serviceModal');
    renderServices();
  }

  // Products Modal
  function openProductModal(id = null) {
    editTarget = id ? { type: 'products', id } : null;
    const modal = document.getElementById('productModal');
    const titleEl = document.getElementById('productModalTitle');
    const form = document.getElementById('productForm');

    form.reset();
    clearFormErrors(form);

    if (id) {
      titleEl.textContent = 'Edit Product';
      const item = (appData.products || []).find(p => p.id === id);
      if (item) {
        document.getElementById('productTitle').value = item.title || '';
        document.getElementById('productCategory').value = item.category || 'NGO';
        document.getElementById('productTag').value = item.tag || '';
        document.getElementById('productPriceBadge').value = item.priceBadge || '';
        document.getElementById('productImage').value = item.imageUrl || '';
        document.getElementById('productDesc').value = item.description || '';
        document.getElementById('productFeatures').value = (item.features || []).join('\n');
      }
    } else {
      titleEl.textContent = 'Add New Product';
      document.getElementById('productImage').value = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80';
      document.getElementById('productPriceBadge').value = 'Ready to Deploy';
    }

    modal.classList.add('active');
  }

  function handleProductSubmit(e) {
    e.preventDefault();
    const form = e.target;
    clearFormErrors(form);

    const title = document.getElementById('productTitle').value.trim();
    const category = document.getElementById('productCategory').value;
    const tag = document.getElementById('productTag').value.trim();
    const priceBadge = document.getElementById('productPriceBadge').value.trim();
    const imageUrl = document.getElementById('productImage').value.trim() || 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80';
    const description = document.getElementById('productDesc').value.trim();
    const featuresRaw = document.getElementById('productFeatures').value.trim();

    let isValid = true;
    if (!title) { markInvalid('productTitle'); isValid = false; }
    if (!description) { markInvalid('productDesc'); isValid = false; }

    if (!isValid) {
      showToast('Please fill in required fields.', 'error');
      return;
    }

    const features = featuresRaw ? featuresRaw.split('\n').map(s => s.trim()).filter(Boolean) : [];

    if (editTarget && editTarget.id) {
      const idx = appData.products.findIndex(p => p.id === editTarget.id);
      if (idx !== -1) {
        appData.products[idx] = {
          ...appData.products[idx],
          title, category, tag, priceBadge, imageUrl, description, features,
          updatedAt: new Date().toISOString().split('T')[0]
        };
        saveData(true, `Updated product: ${title}`);
        showToast('Product updated successfully!', 'success');
      }
    } else {
      const newProd = {
        id: 'prod-' + Date.now(),
        title, category, tag, priceBadge, imageUrl, description, features,
        updatedAt: new Date().toISOString().split('T')[0]
      };
      if (!appData.products) appData.products = [];
      appData.products.unshift(newProd);
      saveData(true, `Added product: ${title}`);
      showToast('New product added successfully!', 'success');
    }

    closeModal('productModal');
    renderProducts();
  }

  // Portfolio Modal
  function openPortfolioModal(id = null) {
    editTarget = id ? { type: 'portfolio', id } : null;
    const modal = document.getElementById('portfolioModal');
    const titleEl = document.getElementById('portfolioModalTitle');
    const form = document.getElementById('portfolioForm');

    form.reset();
    clearFormErrors(form);

    if (id) {
      titleEl.textContent = 'Edit Portfolio Project';
      const item = (appData.portfolio || []).find(p => p.id === id);
      if (item) {
        document.getElementById('portfolioTitle').value = item.title || '';
        document.getElementById('portfolioClient').value = item.client || '';
        document.getElementById('portfolioIndustry').value = item.industry || 'NGO / Non-Profit';
        document.getElementById('portfolioMetrics').value = item.metrics || '';
        document.getElementById('portfolioImage').value = item.imageUrl || '';
        document.getElementById('portfolioTags').value = (item.tags || []).join(', ');
        document.getElementById('portfolioDesc').value = item.description || '';
      }
    } else {
      titleEl.textContent = 'Add New Project';
      document.getElementById('portfolioImage').value = 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80';
    }

    modal.classList.add('active');
  }

  function handlePortfolioSubmit(e) {
    e.preventDefault();
    const form = e.target;
    clearFormErrors(form);

    const title = document.getElementById('portfolioTitle').value.trim();
    const client = document.getElementById('portfolioClient').value.trim();
    const industry = document.getElementById('portfolioIndustry').value;
    const metrics = document.getElementById('portfolioMetrics').value.trim();
    const imageUrl = document.getElementById('portfolioImage').value.trim() || 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80';
    const tagsRaw = document.getElementById('portfolioTags').value.trim();
    const description = document.getElementById('portfolioDesc').value.trim();

    let isValid = true;
    if (!title) { markInvalid('portfolioTitle'); isValid = false; }
    if (!client) { markInvalid('portfolioClient'); isValid = false; }
    if (!description) { markInvalid('portfolioDesc'); isValid = false; }

    if (!isValid) {
      showToast('Please fill in required fields.', 'error');
      return;
    }

    const tags = tagsRaw ? tagsRaw.split(',').map(s => s.trim()).filter(Boolean) : [];

    if (editTarget && editTarget.id) {
      const idx = appData.portfolio.findIndex(p => p.id === editTarget.id);
      if (idx !== -1) {
        appData.portfolio[idx] = {
          ...appData.portfolio[idx],
          title, client, industry, metrics, imageUrl, tags, description,
          updatedAt: new Date().toISOString().split('T')[0]
        };
        saveData(true, `Updated project: ${title}`);
        showToast('Portfolio project updated!', 'success');
      }
    } else {
      const newPort = {
        id: 'port-' + Date.now(),
        title, client, industry, metrics, imageUrl, tags, description,
        updatedAt: new Date().toISOString().split('T')[0]
      };
      if (!appData.portfolio) appData.portfolio = [];
      appData.portfolio.unshift(newPort);
      saveData(true, `Added portfolio project: ${title}`);
      showToast('Portfolio project added!', 'success');
    }

    closeModal('portfolioModal');
    renderPortfolio();
  }

  // Blog Modal
  function openBlogModal(id = null) {
    editTarget = id ? { type: 'blog', id } : null;
    const modal = document.getElementById('blogModal');
    const titleEl = document.getElementById('blogModalTitle');
    const form = document.getElementById('blogForm');

    form.reset();
    clearFormErrors(form);

    if (id) {
      titleEl.textContent = 'Edit Blog Article';
      const item = (appData.blog || []).find(b => b.id === id);
      if (item) {
        document.getElementById('blogTitle').value = item.title || '';
        document.getElementById('blogCategory').value = item.category || 'WhatsApp & Automation';
        document.getElementById('blogAuthor').value = item.author || 'Roshan Tiwari';
        document.getElementById('blogDate').value = item.date || '';
        document.getElementById('blogReadTime').value = item.readTime || '5 min read';
        document.getElementById('blogFeatured').checked = !!item.featured;
        document.getElementById('blogImage').value = item.imageUrl || '';
        document.getElementById('blogExcerpt').value = item.excerpt || '';
        document.getElementById('blogContent').value = item.content || '';
      }
    } else {
      titleEl.textContent = 'Add New Article';
      document.getElementById('blogAuthor').value = 'Roshan Tiwari';
      document.getElementById('blogDate').value = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
      document.getElementById('blogReadTime').value = '5 min read';
      document.getElementById('blogImage').value = 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=900&q=80';
    }

    modal.classList.add('active');
  }

  function handleBlogSubmit(e) {
    e.preventDefault();
    const form = e.target;
    clearFormErrors(form);

    const title = document.getElementById('blogTitle').value.trim();
    const category = document.getElementById('blogCategory').value;
    const author = document.getElementById('blogAuthor').value.trim() || 'Roshan Tiwari';
    const date = document.getElementById('blogDate').value.trim();
    const readTime = document.getElementById('blogReadTime').value.trim() || '5 min read';
    const featured = document.getElementById('blogFeatured').checked;
    const imageUrl = document.getElementById('blogImage').value.trim() || 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=900&q=80';
    const excerpt = document.getElementById('blogExcerpt').value.trim();
    const content = document.getElementById('blogContent').value.trim();

    let isValid = true;
    if (!title) { markInvalid('blogTitle'); isValid = false; }
    if (!excerpt) { markInvalid('blogExcerpt'); isValid = false; }

    if (!isValid) {
      showToast('Please fill in required fields.', 'error');
      return;
    }

    if (editTarget && editTarget.id) {
      const idx = appData.blog.findIndex(b => b.id === editTarget.id);
      if (idx !== -1) {
        appData.blog[idx] = {
          ...appData.blog[idx],
          title, category, author, date, readTime, featured, imageUrl, excerpt, content,
          updatedAt: new Date().toISOString().split('T')[0]
        };
        saveData(true, `Updated blog: ${title}`);
        showToast('Article updated successfully!', 'success');
      }
    } else {
      const newPost = {
        id: 'blog-' + Date.now(),
        title, category, author, date, readTime, featured, imageUrl, excerpt, content,
        updatedAt: new Date().toISOString().split('T')[0]
      };
      if (!appData.blog) appData.blog = [];
      appData.blog.unshift(newPost);
      saveData(true, `Published new article: ${title}`);
      showToast('New article published!', 'success');
    }

    closeModal('blogModal');
    renderBlog();
  }

  function markInvalid(elementId) {
    const el = document.getElementById(elementId);
    if (el) el.classList.add('is-invalid');
  }

  function clearFormErrors(form) {
    form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
  }

  function closeModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.classList.remove('active');
  }

  // -------------------------------------------------------------------------
  // Deletion Handler
  // -------------------------------------------------------------------------
  function confirmDelete(type, id, title) {
    deleteTarget = { type, id, title };
    const modal = document.getElementById('deleteConfirmModal');
    const msgEl = document.getElementById('deleteItemName');
    if (msgEl) msgEl.textContent = `"${title}"`;
    if (modal) modal.classList.add('active');
  }

  function executeDelete() {
    if (!deleteTarget) return;
    const { type, id, title } = deleteTarget;

    if (appData[type]) {
      appData[type] = appData[type].filter(item => item.id !== id);
      saveData(true, `Deleted ${type.slice(0, -1)}: ${title}`);
      showToast(`Successfully deleted ${title}`, 'success');
      renderCurrentView();
    }

    closeModal('deleteConfirmModal');
    deleteTarget = null;
  }

  // -------------------------------------------------------------------------
  // Item Preview Modal
  // -------------------------------------------------------------------------
  function previewItem(type, id) {
    const modal = document.getElementById('previewItemModal');
    const titleEl = document.getElementById('previewModalItemTitle');
    const container = document.getElementById('previewItemContainer');

    const item = (appData[type] || []).find(i => i.id === id);
    if (!item) return;

    titleEl.textContent = `Preview: ${item.title}`;

    if (type === 'services') {
      container.innerHTML = `
        <article class="preview-card-render">
          <div style="width:48px; height:48px; border-radius:999px; background:#eaf3ff; color:#126fe8; display:grid; place-items:center; font-weight:800; font-size:1.2rem; margin-bottom:1rem;">
            ${escapeHtml(item.title.charAt(0))}
          </div>
          <span style="font-size:0.75rem; font-weight:700; color:#126fe8; text-transform:uppercase;">${escapeHtml(item.category)}</span>
          <h3 style="font-weight:800; font-size:1.25rem; color:#0a1f44; margin-top:0.25rem;">${escapeHtml(item.title)}</h3>
          <p style="font-size:0.875rem; color:#475569; margin-top:0.65rem; line-height:1.5;">${escapeHtml(item.description)}</p>
          <ul style="list-style:none; padding:0; margin:1rem 0; font-size:0.82rem; color:#334155; display:flex; flex-direction:column; gap:0.4rem;">
            ${(item.features || []).map(f => `<li>✓ ${escapeHtml(f)}</li>`).join('')}
          </ul>
          <a href="../contact.html" target="_blank" style="display:inline-block; font-size:0.875rem; font-weight:700; color:#126fe8; margin-top:0.5rem; text-decoration:none;">
            ${escapeHtml(item.ctaText || 'Inquire Now →')}
          </a>
        </article>
      `;
    } else if (type === 'products') {
      container.innerHTML = `
        <article class="preview-card-render" style="padding:0; overflow:hidden;">
          <img src="${escapeHtml(item.imageUrl)}" style="width:100%; height:180px; object-fit:cover;" onerror="this.src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80'">
          <div style="padding:1.5rem;">
            <span style="font-size:0.75rem; font-weight:700; color:#126fe8;">${escapeHtml(item.category)}</span>
            <h3 style="font-weight:800; font-size:1.2rem; color:#0a1f44; margin-top:0.35rem;">${escapeHtml(item.title)}</h3>
            <p style="font-size:0.85rem; color:#475569; margin-top:0.5rem; line-height:1.5;">${escapeHtml(item.description)}</p>
            <ul style="list-style:none; padding:0; margin:1rem 0; font-size:0.82rem; color:#334155; display:flex; flex-direction:column; gap:0.35rem;">
              ${(item.features || []).map(f => `<li>✓ ${escapeHtml(f)}</li>`).join('')}
            </ul>
            <a href="../contact.html" target="_blank" class="btn btn-primary" style="margin-top:0.5rem; width:100%; justify-content:center;">
              Inquire About Product →
            </a>
          </div>
        </article>
      `;
    } else if (type === 'portfolio') {
      container.innerHTML = `
        <article class="preview-card-render" style="padding:0; overflow:hidden;">
          <img src="${escapeHtml(item.imageUrl)}" style="width:100%; height:180px; object-fit:cover;" onerror="this.src='https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80'">
          <div style="padding:1.5rem;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:0.75rem; font-weight:700; color:#126fe8;">${escapeHtml(item.industry)}</span>
              <span class="badge badge-emerald">${escapeHtml(item.metrics || '')}</span>
            </div>
            <h3 style="font-weight:800; font-size:1.15rem; color:#0a1f44; margin-top:0.35rem;">${escapeHtml(item.title)}</h3>
            <div style="font-size:0.8rem; font-weight:600; color:#64748b; margin-top:0.15rem;">Client: ${escapeHtml(item.client)}</div>
            <p style="font-size:0.85rem; color:#475569; margin-top:0.6rem; line-height:1.5;">${escapeHtml(item.description)}</p>
            <div style="display:flex; gap:0.35rem; margin-top:0.85rem; flex-wrap:wrap;">
              ${(item.tags || []).map(t => `<span class="badge badge-slate">${escapeHtml(t)}</span>`).join('')}
            </div>
          </div>
        </article>
      `;
    } else if (type === 'blog') {
      container.innerHTML = `
        <article class="preview-card-render" style="max-width:540px;">
          <img src="${escapeHtml(item.imageUrl)}" style="width:100%; height:200px; object-fit:cover; border-radius:8px;" onerror="this.src='https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=900&q=80'">
          <div style="margin-top:1rem;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="badge badge-blue">${escapeHtml(item.category)}</span>
              <span style="font-size:0.75rem; color:#64748b;">${escapeHtml(item.readTime || '')}</span>
            </div>
            <h2 style="font-size:1.35rem; font-weight:800; color:#0a1f44; margin-top:0.5rem; line-height:1.25;">${escapeHtml(item.title)}</h2>
            <div style="font-size:0.78rem; color:#64748b; margin:0.35rem 0 0.85rem 0;">By ${escapeHtml(item.author)} on ${escapeHtml(item.date)}</div>
            <p style="font-size:0.875rem; color:#334155; line-height:1.6; margin-bottom:1rem;">${escapeHtml(item.content || item.excerpt)}</p>
          </div>
        </article>
      `;
    }

    modal.classList.add('active');
  }

  // -------------------------------------------------------------------------
  // HTML Snippet Generator
  // -------------------------------------------------------------------------
  function generateSnippet(type, id) {
    const modal = document.getElementById('snippetModal');
    const codeEl = document.getElementById('snippetCodeContent');
    const targetFileEl = document.getElementById('snippetTargetFileName');

    let html = '';
    let targetFile = '';

    if (type === 'service') {
      targetFile = 'services.html';
      const s = (appData.services || []).find(i => i.id === id);
      if (s) {
        html = `<!-- Service: ${s.title} -->
<article class="card p-5 service-card">
  <div class="icon-circle mb-4 bg-blue-50 text-blue-600 flex items-center justify-center">
    <svg class="w-5 h-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  </div>
  <h3 class="font-extrabold text-lg">${s.title}</h3>
  <p class="text-sm text-slate-600 mt-2">${s.description}</p>
  <a class="text-blue-600 font-bold text-sm inline-block mt-4" href="contact.html">${s.ctaText || 'Inquire Now →'}</a>
</article>`;
      }
    } else if (type === 'product') {
      targetFile = 'products.html';
      const p = (appData.products || []).find(i => i.id === id);
      if (p) {
        html = `<!-- Product: ${p.title} -->
<article class="card overflow-hidden">
  <img class="feature-img !rounded-none" src="${p.imageUrl}" alt="${p.title}" />
  <div class="p-6">
    <span class="text-xs font-bold text-blue-600">${p.category}</span>
    <h3 class="text-xl font-extrabold mt-2">${p.title}</h3>
    <p class="text-sm text-slate-600 mt-2">${p.description}</p>
    <ul class="text-sm text-slate-600 mt-4 space-y-2">
      ${(p.features || []).map(f => `<li>✓ ${f}</li>`).join('\n      ')}
    </ul>
    <a href="contact.html" class="btn btn-primary mt-5">View Details →</a>
  </div>
</article>`;
      }
    } else if (type === 'portfolio') {
      targetFile = 'portfolio.html';
      const item = (appData.portfolio || []).find(i => i.id === id);
      if (item) {
        html = `<!-- Project: ${item.title} -->
<article class="card overflow-hidden">
  <img src="${item.imageUrl}" class="feature-img !rounded-none" alt="${item.title}" />
  <div class="p-5">
    <div class="text-xs font-bold text-blue-600">${item.industry}</div>
    <h3 class="font-extrabold mt-1">${item.title}</h3>
    <p class="text-sm text-slate-600 mt-2">${item.description}</p>
    <a href="#" class="text-blue-600 font-bold text-sm mt-4 inline-block">View Case Study →</a>
  </div>
</article>`;
      }
    } else if (type === 'blog') {
      targetFile = 'blog.html';
      const b = (appData.blog || []).find(i => i.id === id);
      if (b) {
        html = `<!-- Blog Article: ${b.title} -->
<article class="card p-6" data-blog>
  <span class="text-xs font-bold text-blue-600 uppercase">${b.category}</span>
  <h3 class="text-xl font-extrabold mt-2">${b.title}</h3>
  <div class="text-xs text-slate-500 mt-1">By ${b.author} • ${b.date}</div>
  <p class="text-sm text-slate-600 mt-3">${b.excerpt}</p>
  <a href="#" class="text-blue-600 font-bold text-sm mt-4 inline-block">Read Full Article →</a>
</article>`;
      }
    }

    targetFileEl.textContent = targetFile;
    codeEl.textContent = html;
    modal.classList.add('active');
  }

  function copySnippetCode() {
    const codeEl = document.getElementById('snippetCodeContent');
    if (!codeEl) return;
    navigator.clipboard.writeText(codeEl.textContent).then(() => {
      showToast('HTML snippet copied to clipboard!', 'success');
    }).catch(() => {
      showToast('Could not copy automatically. Please select text manually.', 'info');
    });
  }

  // -------------------------------------------------------------------------
  // JSON Export & Import
  // -------------------------------------------------------------------------
  function exportAllJson() {
    const payload = {
      app: 'Aken Tech Solution',
      exportedAt: new Date().toISOString(),
      version: '1.0.0',
      data: appData
    };
    downloadFile(JSON.stringify(payload, null, 2), 'aken-content-export.json', 'application/json');
    logAction('Exported full website content JSON');
    showToast('Downloaded complete content backup JSON!', 'success');
  }

  function exportSectionJson(sectionKey) {
    if (!appData[sectionKey]) return;
    const payload = {
      app: 'Aken Tech Solution',
      section: sectionKey,
      exportedAt: new Date().toISOString(),
      data: appData[sectionKey]
    };
    downloadFile(JSON.stringify(payload, null, 2), `aken-${sectionKey}-export.json`, 'application/json');
    logAction(`Exported ${sectionKey} JSON`);
    showToast(`Downloaded ${sectionKey} JSON!`, 'success');
  }

  function downloadFile(content, fileName, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  }

  function triggerImportJson() {
    const fileInput = document.getElementById('importJsonInput');
    if (fileInput) fileInput.click();
  }

  function handleImportFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      try {
        const parsed = JSON.parse(event.target.result);
        const importedData = parsed.data || parsed;

        if (importedData.services || importedData.products || importedData.portfolio || importedData.blog) {
          appData = {
            services: importedData.services || appData.services || [],
            products: importedData.products || appData.products || [],
            portfolio: importedData.portfolio || appData.portfolio || [],
            blog: importedData.blog || appData.blog || []
          };
          saveData(true, `Imported content from ${file.name}`);
          showToast('Data imported successfully into localStorage!', 'success');
          renderCurrentView();
        } else {
          showToast('JSON does not contain recognized Aken Tech content schemas.', 'error');
        }
      } catch (err) {
        showToast('Invalid JSON file format: ' + err.message, 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset input
  }

  function resetToSeeds() {
    if (confirm('Are you sure you want to restore the default sample website data? Any unsaved edits in localStorage will be reset.')) {
      appData = JSON.parse(JSON.stringify(SEED_DATA));
      saveData(true, 'Reset all content to default website seeds');
      showToast('Reset to default seed data completed!', 'success');
      renderCurrentView();
    }
  }

  // -------------------------------------------------------------------------
  // Mobile Sidebar Toggle
  // -------------------------------------------------------------------------
  function toggleMobileSidebar() {
    const sidebar = document.getElementById('adminSidebar');
    if (sidebar) sidebar.classList.toggle('open');
  }

  function closeMobileSidebar() {
    const sidebar = document.getElementById('adminSidebar');
    if (sidebar) sidebar.classList.remove('open');
  }

  // -------------------------------------------------------------------------
  // Global Search Filter
  // -------------------------------------------------------------------------
  function handleGlobalSearch(term) {
    term = term.trim().toLowerCase();
    if (!term) return;

    // Check if match in services, products, etc.
    const hasServiceMatch = (appData.services || []).some(s => s.title.toLowerCase().includes(term));
    const hasProductMatch = (appData.products || []).some(p => p.title.toLowerCase().includes(term));
    const hasPortMatch = (appData.portfolio || []).some(p => p.title.toLowerCase().includes(term));
    const hasBlogMatch = (appData.blog || []).some(b => b.title.toLowerCase().includes(term));

    if (hasServiceMatch && currentView !== 'services') {
      switchView('services');
      const input = document.getElementById('servicesSearch');
      if (input) { input.value = term; renderServices(); }
    } else if (hasProductMatch && currentView !== 'products') {
      switchView('products');
      const input = document.getElementById('productsSearch');
      if (input) { input.value = term; renderProducts(); }
    } else if (hasPortMatch && currentView !== 'portfolio') {
      switchView('portfolio');
      const input = document.getElementById('portfolioSearch');
      if (input) { input.value = term; renderPortfolio(); }
    } else if (hasBlogMatch && currentView !== 'blog') {
      switchView('blog');
      const input = document.getElementById('blogSearchInput');
      if (input) { input.value = term; renderBlog(); }
    }
  }

  // -------------------------------------------------------------------------
  // Event Bindings & Init
  // -------------------------------------------------------------------------
  function initEvents() {
    // Nav items
    document.querySelectorAll('.nav-item').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const view = el.dataset.view;
        if (view) switchView(view);
      });
    });

    // Mobile sidebar toggle
    document.getElementById('mobileSidebarToggle')?.addEventListener('click', toggleMobileSidebar);
    document.getElementById('closeSidebarBtn')?.addEventListener('click', closeMobileSidebar);

    // Form Submissions
    document.getElementById('serviceForm')?.addEventListener('submit', handleServiceSubmit);
    document.getElementById('productForm')?.addEventListener('submit', handleProductSubmit);
    document.getElementById('portfolioForm')?.addEventListener('submit', handlePortfolioSubmit);
    document.getElementById('blogForm')?.addEventListener('submit', handleBlogSubmit);

    // Delete Confirmation Button
    document.getElementById('confirmDeleteBtn')?.addEventListener('click', executeDelete);

    // Global Search
    const globalSearch = document.getElementById('globalSearchInput');
    if (globalSearch) {
      globalSearch.addEventListener('input', (e) => handleGlobalSearch(e.target.value));
    }

    // Filter Listeners
    document.getElementById('servicesSearch')?.addEventListener('input', renderServices);
    document.getElementById('servicesCategoryFilter')?.addEventListener('change', renderServices);

    document.getElementById('productsSearch')?.addEventListener('input', renderProducts);
    document.getElementById('productsCategoryFilter')?.addEventListener('change', renderProducts);

    document.getElementById('portfolioSearch')?.addEventListener('input', renderPortfolio);
    document.getElementById('portfolioIndustryFilter')?.addEventListener('change', renderPortfolio);

    document.getElementById('blogSearchInput')?.addEventListener('input', renderBlog);
    document.getElementById('blogCategoryFilter')?.addEventListener('change', renderBlog);

    // File Import
    document.getElementById('importJsonInput')?.addEventListener('change', handleImportFile);

    // Close modal on backdrop click
    document.querySelectorAll('.modal-backdrop').forEach(bd => {
      bd.addEventListener('click', (e) => {
        if (e.target === bd) {
          bd.classList.remove('active');
        }
      });
    });

    // Escape key closes modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop.active').forEach(m => m.classList.remove('active'));
        closeMobileSidebar();
      }
    });
  }

  // -------------------------------------------------------------------------
  // Expose API on window
  // -------------------------------------------------------------------------
  window.adminApp = {
    init: function () {
      loadData();
      initEvents();
      switchView('dashboard');
    },
    switchView,
    openServiceModal,
    openProductModal,
    openPortfolioModal,
    openBlogModal,
    confirmDelete,
    previewItem,
    generateSnippet,
    copySnippetCode,
    closeModal,
    exportAllJson,
    exportSectionJson,
    triggerImportJson,
    resetToSeeds,
    loadPreviewPage,
    setPreviewDevice
  };

  // Start on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    window.adminApp.init();
  });

})();
