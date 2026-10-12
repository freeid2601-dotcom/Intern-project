/**
 * Aken Tech Solution — Comprehensive Admin Panel Engine
 * Vanilla JavaScript (ES6+), localStorage persistence, zero backend required.
 * Includes Media / File Manager, File Remove/Delete, Bulk Actions, Lead Inquiries, and Settings.
 */

(function () {
  'use strict';

  // Storage Keys
  const STORAGE_KEY = 'aken_admin_data_v1';
  const ACTIVITY_KEY = 'aken_admin_activity_v1';

  // Complete Seed Data
  const SEED_DATA = {
    services: [
      {
        id: 'srv-1',
        title: 'Performance Marketing',
        category: 'Digital Marketing',
        description: 'Meta Ads, Google Ads, and targeted lead generation funnels delivering predictable ROI.',
        badge: 'High Demand',
        status: 'active',
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
        status: 'active',
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
        status: 'active',
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
        status: 'active',
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
        status: 'active',
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
        status: 'active',
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
        status: 'active',
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
        status: 'active',
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
        status: 'active',
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
        status: 'active',
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
        status: 'active',
        description: 'Engineered a modern web portal featuring automated instant receipt generation, donor CRM, and volunteer onboarding.',
        imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80',
        metrics: '₹18L+ Online Donations in 90 Days',
        tags: ['Web Design', 'CRM Automation', 'Razorpay'],
        updatedAt: '2025-02-15'
      },
      {
        id: 'port-2',
        title: 'Prestige Realty Property Engine',
        client: 'Prestige Group Realtor',
        industry: 'Real Estate',
        status: 'active',
        description: 'Developed an automated property catalog paired with targeted Meta Ads and instant WhatsApp appointment booking.',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
        metrics: '420+ Verified Site Visits Generated',
        tags: ['Meta Ads', 'WhatsApp Bot', 'Landing Page'],
        updatedAt: '2025-02-20'
      },
      {
        id: 'port-3',
        title: 'Urban Boutique Fashion Brand',
        client: 'Aura Apparel India',
        industry: 'E-Commerce / Fashion',
        status: 'active',
        description: 'Complete brand redesign and custom shop launch with automated inventory sync and retargeting ads.',
        imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
        metrics: '3.4x ROAS & 62% Increase in Repeat Orders',
        tags: ['E-Commerce', 'Performance Marketing', 'UI/UX'],
        updatedAt: '2025-02-28'
      },
      {
        id: 'port-4',
        title: 'CityCare Medical Clinic Portal',
        client: 'CityCare Healthcare',
        industry: 'Healthcare',
        status: 'active',
        description: 'Streamlined doctor scheduling portal reducing queue waiting times and automating SMS appointment reminders.',
        imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80',
        metrics: '45% Reduction in Missed Appointments',
        tags: ['Custom Portal', 'SMS Gateway', 'Booking Flow'],
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
        status: 'active',
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
        status: 'active',
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
        status: 'active',
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
        status: 'active',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
        excerpt: 'A comprehensive guide to omnichannel performance marketing, Google Search funnels, and creative iteration.',
        content: 'Ad costs fluctuate, but customer lifetime value remains the foundation of sustainable scaling...',
        updatedAt: '2025-03-01'
      }
    ],

    media: [
      {
        id: 'med-1',
        name: 'ngo-management-banner.jpg',
        url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80',
        size: '142 KB',
        uploadedAt: '2025-03-01'
      },
      {
        id: 'med-2',
        name: 'real-estate-crm-hero.jpg',
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
        size: '185 KB',
        uploadedAt: '2025-03-02'
      },
      {
        id: 'med-3',
        name: 'ecommerce-suite-showcase.jpg',
        url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
        size: '168 KB',
        uploadedAt: '2025-03-03'
      },
      {
        id: 'med-4',
        name: 'whatsapp-automation-article.jpg',
        url: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=900&q=80',
        size: '124 KB',
        uploadedAt: '2025-03-04'
      }
    ],

    inquiries: [
      {
        id: 'inq-1',
        name: 'Amit Sharma',
        email: 'amit.sharma@example.com',
        phone: '9820123456',
        service: 'Real Estate Solutions',
        message: 'Looking for a WhatsApp automation CRM for our property brokerage team in Thane.',
        date: 'Oct 12, 2025',
        status: 'new'
      },
      {
        id: 'inq-2',
        name: 'Priya Patel',
        email: 'priya.p@foundation.org',
        phone: '9876543210',
        service: 'NGO Management System',
        message: 'We need 80G tax receipt automation for 5000+ donors. Please share quote and timeline.',
        date: 'Oct 11, 2025',
        status: 'read'
      }
    ],

    settings: {
      companyName: 'Aken Tech Solution',
      phone: '+91 98765 43210',
      email: 'hello@akentech.in',
      address: 'Thane, Mumbai, India',
      whatsappNumber: '919876543210',
      tagline: 'Your Growth Partner in Technology & Marketing'
    }
  };

  // State
  let appData = {};
  let activities = [];
  let currentView = 'dashboard';
  let deleteTarget = null;
  let editTarget = null;
  const selectedItems = {
    services: new Set(),
    products: new Set(),
    portfolio: new Set(),
    blog: new Set(),
    media: new Set(),
    inquiries: new Set()
  };

  // -------------------------------------------------------------------------
  // LocalStorage Helpers & Save Engine
  // -------------------------------------------------------------------------
  function loadData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        appData = JSON.parse(stored);
        // Ensure sub-arrays exist for backwards compatibility
        if (!appData.media) appData.media = JSON.parse(JSON.stringify(SEED_DATA.media));
        if (!appData.inquiries) appData.inquiries = JSON.parse(JSON.stringify(SEED_DATA.inquiries));
        if (!appData.settings) appData.settings = JSON.parse(JSON.stringify(SEED_DATA.settings));
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
        { text: 'Admin Panel ready — content synced with website', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ];
    } catch (e) {
      activities = [];
    }
  }

  function saveData(logActivity = true, logMessage = '') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
      updateSaveIndicator('Saved ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      if (logActivity && logMessage) {
        logAction(logMessage);
      }
    } catch (e) {
      showToast('Error saving: storage may be full', 'error');
    }
  }

  function manualSaveAndSync() {
    saveData(true, 'Manual Save & Sync executed');
    showToast('Saved & Synced! All changes are live on the website.', 'success');
    renderCurrentView();
  }

  function updateSaveIndicator(text) {
    const el = document.getElementById('saveStatusIndicator');
    if (el) {
      el.textContent = text;
      el.style.color = '#10b981';
    }
  }

  function logAction(msg) {
    const act = {
      text: msg,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    activities.unshift(act);
    if (activities.length > 25) activities.pop();
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
      iconSvg = '<svg class="w-5 h-5 text-emerald-500" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
    } else if (type === 'error') {
      iconSvg = '<svg class="w-5 h-5 text-red-500" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
    } else {
      iconSvg = '<svg class="w-5 h-5 text-blue-500" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
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
    }, 3200);
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

    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.view === viewName);
    });

    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === `view-${viewName}`);
    });

    const breadcrumb = document.getElementById('currentBreadcrumb');
    if (breadcrumb) {
      const titles = {
        dashboard: 'Dashboard Overview',
        services: 'Services Management',
        products: 'Products Management',
        portfolio: 'Portfolio Projects',
        blog: 'Blog Articles',
        media: 'Media & File Library',
        inquiries: 'Contact Leads & Inquiries',
        settings: 'Website & Company Settings',
        preview: 'Live Website Preview',
        export: 'Export & Deployment Hub'
      };
      breadcrumb.textContent = titles[viewName] || 'Dashboard';
    }

    closeMobileSidebar();
    renderCurrentView();
  }

  function renderCurrentView() {
    updateBadges();
    switch (currentView) {
      case 'dashboard': renderDashboard(); break;
      case 'services': renderServices(); break;
      case 'products': renderProducts(); break;
      case 'portfolio': renderPortfolio(); break;
      case 'blog': renderBlog(); break;
      case 'media': renderMedia(); break;
      case 'inquiries': renderInquiries(); break;
      case 'settings': renderSettings(); break;
      case 'preview': renderPreview(); break;
      case 'export': renderExportHub(); break;
    }
  }

  function updateBadges() {
    const srvCount = appData.services ? appData.services.length : 0;
    const prodCount = appData.products ? appData.products.length : 0;
    const portCount = appData.portfolio ? appData.portfolio.length : 0;
    const blogCount = appData.blog ? appData.blog.length : 0;
    const medCount = appData.media ? appData.media.length : 0;
    const inqCount = appData.inquiries ? appData.inquiries.filter(i => i.status === 'new').length : 0;

    setElemText('badgeServices', srvCount);
    setElemText('badgeProducts', prodCount);
    setElemText('badgePortfolio', portCount);
    setElemText('badgeBlog', blogCount);
    setElemText('badgeMedia', medCount);
    setElemText('badgeInquiries', inqCount);
  }

  function setElemText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  // -------------------------------------------------------------------------
  // Render: Dashboard
  // -------------------------------------------------------------------------
  function renderDashboard() {
    const srvCount = appData.services ? appData.services.length : 0;
    const prodCount = appData.products ? appData.products.length : 0;
    const portCount = appData.portfolio ? appData.portfolio.length : 0;
    const blogCount = appData.blog ? appData.blog.length : 0;

    setElemText('statServicesCount', srvCount);
    setElemText('statProductsCount', prodCount);
    setElemText('statPortfolioCount', portCount);
    setElemText('statBlogCount', blogCount);

    const actContainer = document.getElementById('dashboardActivities');
    if (actContainer) {
      actContainer.innerHTML = activities.slice(0, 7).map(act => `
        <div class="activity-item" style="display:flex; align-items:center; justify-content:space-between; padding:0.65rem 0; border-bottom:1px solid #f1f5f9;">
          <div style="display:flex; align-items:center; gap:0.65rem;">
            <span style="width:7px; height:7px; border-radius:50%; background:#126fe8;"></span>
            <span style="font-size:0.83rem; color:#172033; font-weight:500;">${escapeHtml(act.text)}</span>
          </div>
          <span style="font-size:0.75rem; color:#64748b;">${escapeHtml(act.timestamp)}</span>
        </div>
      `).join('');
    }

    const breakdownContainer = document.getElementById('dashboardBreakdown');
    if (breakdownContainer) {
      const items = [
        { label: 'Active Services', count: srvCount, badge: 'Live on services.html', link: 'services' },
        { label: 'Digital Products', count: prodCount, badge: 'Live on products.html', link: 'products' },
        { label: 'Portfolio Case Studies', count: portCount, badge: 'Live on portfolio.html', link: 'portfolio' },
        { label: 'Blog Articles', count: blogCount, badge: 'Live on blog.html', link: 'blog' },
        { label: 'Media Files Uploaded', count: (appData.media || []).length, badge: 'Image Storage', link: 'media' },
        { label: 'Contact Inquiries', count: (appData.inquiries || []).length, badge: 'Customer Leads', link: 'inquiries' }
      ];
      breakdownContainer.innerHTML = items.map(item => `
        <div style="display:flex; align-items:center; justify-content:space-between; padding:0.75rem 1rem; background:#f8fafc; border-radius:8px; margin-bottom:0.5rem; cursor:pointer;" onclick="window.adminApp.switchView('${item.link}')">
          <div>
            <div style="font-size:0.86rem; font-weight:700; color:#0a1f44;">${item.label}</div>
            <div style="font-size:0.72rem; color:#64748b;">${item.badge}</div>
          </div>
          <div style="display:flex; align-items:center; gap:0.6rem;">
            <span style="font-size:1.1rem; font-weight:800; color:#126fe8;">${item.count}</span>
            <span style="color:#94a3b8;">→</span>
          </div>
        </div>
      `).join('');
    }
  }

  // -------------------------------------------------------------------------
  // Render: Services Management (with Bulk Actions, Status Toggle & Clone)
  // -------------------------------------------------------------------------
  function renderServices() {
    const listContainer = document.getElementById('servicesList');
    if (!listContainer) return;

    const searchTerm = (document.getElementById('servicesSearch')?.value || '').toLowerCase();
    const filterCategory = document.getElementById('servicesCategoryFilter')?.value || 'all';

    let list = appData.services || [];
    if (filterCategory !== 'all') list = list.filter(item => item.category === filterCategory);
    if (searchTerm) {
      list = list.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
      );
    }

    renderBulkActionBar('services');

    if (list.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
          </div>
          <h3>No services found</h3>
          <p>Click "+ Add New Service" to create one.</p>
          <button class="btn btn-primary" onclick="window.adminApp.openServiceModal()">+ Add New Service</button>
        </div>
      `;
      return;
    }

    const allChecked = list.length > 0 && list.every(s => selectedItems.services.has(s.id));

    listContainer.innerHTML = `
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width:40px;">
                <input type="checkbox" class="admin-checkbox" ${allChecked ? 'checked' : ''} onchange="window.adminApp.toggleSelectAll('services', this.checked)" title="Select all" />
              </th>
              <th>Service Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Features</th>
              <th>Badge</th>
              <th style="text-align:right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(s => {
              const isChecked = selectedItems.services.has(s.id);
              const isActive = s.status !== 'draft';
              return `
                <tr>
                  <td>
                    <input type="checkbox" class="admin-checkbox" ${isChecked ? 'checked' : ''} onchange="window.adminApp.toggleSelectItem('services', '${s.id}', this.checked)" />
                  </td>
                  <td>
                    <div class="table-item-cell">
                      <div style="width:38px; height:38px; border-radius:8px; background:#eaf3ff; color:#126fe8; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.9rem; flex-shrink:0;">
                        ${escapeHtml(s.title.charAt(0))}
                      </div>
                      <div>
                        <h4 style="font-size:0.88rem; font-weight:700; color:#0a1f44;">${escapeHtml(s.title)}</h4>
                        <span style="font-size:0.72rem; color:#64748b;">${escapeHtml(s.description.slice(0, 50))}...</span>
                      </div>
                    </div>
                  </td>
                  <td><span class="badge badge-blue">${escapeHtml(s.category)}</span></td>
                  <td>
                    <span class="status-pill-toggle ${isActive ? 'status-pill-active' : 'status-pill-draft'}" onclick="window.adminApp.toggleItemStatus('services', '${s.id}')" title="Click to toggle Active/Draft">
                      ${isActive ? '● Active' : '○ Draft'}
                    </span>
                  </td>
                  <td><span class="badge badge-slate">${(s.features || []).length} Points</span></td>
                  <td><span class="badge badge-emerald">${escapeHtml(s.badge || 'Active')}</span></td>
                  <td style="text-align:right;">
                    <div class="row-actions" style="justify-content:flex-end;">
                      <button class="action-btn" title="Live Preview" onclick="window.adminApp.previewItem('services', '${s.id}')">
                        <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      </button>
                      <button class="action-btn" title="Duplicate / Copy" onclick="window.adminApp.duplicateItem('services', '${s.id}')">
                        <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
                      </button>
                      <button class="action-btn" title="Edit Service" onclick="window.adminApp.openServiceModal('${s.id}')">
                        <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                      </button>
                      <button class="action-btn btn-delete" title="Delete / Remove" onclick="window.adminApp.confirmDelete('services', '${s.id}', '${escapeHtml(s.title)}')">
                        <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // -------------------------------------------------------------------------
  // Render: Products Management (with File Remove, Image Upload & Clones)
  // -------------------------------------------------------------------------
  function renderProducts() {
    const listContainer = document.getElementById('productsList');
    if (!listContainer) return;

    const searchTerm = (document.getElementById('productsSearch')?.value || '').toLowerCase();
    const filterCategory = document.getElementById('productsCategoryFilter')?.value || 'all';

    let list = appData.products || [];
    if (filterCategory !== 'all') list = list.filter(item => item.category === filterCategory);
    if (searchTerm) {
      list = list.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
      );
    }

    renderBulkActionBar('products');

    if (list.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
          </div>
          <h3>No products found</h3>
          <p>Click "+ Add New Product" to create one.</p>
          <button class="btn btn-primary" onclick="window.adminApp.openProductModal()">+ Add New Product</button>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = `
      <div class="items-grid">
        ${list.map(p => {
          const isChecked = selectedItems.products.has(p.id);
          const isActive = p.status !== 'draft';
          return `
            <div class="item-card">
              <div class="item-card-media">
                <img class="item-card-img" src="${escapeHtml(p.imageUrl)}" alt="${escapeHtml(p.title)}" onerror="this.src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80'">
                <div class="item-card-badge" style="display:flex; gap:0.35rem;">
                  <span class="badge badge-blue">${escapeHtml(p.category)}</span>
                  <span class="status-pill-toggle ${isActive ? 'status-pill-active' : 'status-pill-draft'}" onclick="window.adminApp.toggleItemStatus('products', '${p.id}')">
                    ${isActive ? 'Active' : 'Draft'}
                  </span>
                </div>
                <div style="position:absolute; top:0.75rem; right:0.75rem;">
                  <input type="checkbox" class="admin-checkbox" ${isChecked ? 'checked' : ''} onchange="window.adminApp.toggleSelectItem('products', '${p.id}', this.checked)" />
                </div>
              </div>
              <div class="item-card-body">
                <h3 class="item-card-title">${escapeHtml(p.title)}</h3>
                <p class="item-card-desc">${escapeHtml(p.description)}</p>
                <div style="margin-top:auto;">
                  <ul style="list-style:none; padding:0; font-size:0.78rem; color:#475569; margin-bottom:0.75rem; display:flex; flex-direction:column; gap:0.25rem;">
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
                  Preview
                </button>
                <div class="row-actions">
                  <button class="action-btn" title="Duplicate" onclick="window.adminApp.duplicateItem('products', '${p.id}')">
                    <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
                  </button>
                  <button class="action-btn" title="Edit Product" onclick="window.adminApp.openProductModal('${p.id}')">
                    <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                  </button>
                  <button class="action-btn btn-delete" title="Delete / Remove Product" onclick="window.adminApp.confirmDelete('products', '${p.id}', '${escapeHtml(p.title)}')">
                    <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
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
    if (filterIndustry !== 'all') list = list.filter(item => item.industry === filterIndustry);
    if (searchTerm) {
      list = list.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.client.toLowerCase().includes(searchTerm) ||
        item.industry.toLowerCase().includes(searchTerm)
      );
    }

    renderBulkActionBar('portfolio');

    if (list.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <h3>No portfolio projects found</h3>
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
              <th style="width:40px;">
                <input type="checkbox" class="admin-checkbox" onchange="window.adminApp.toggleSelectAll('portfolio', this.checked)" />
              </th>
              <th>Project & Client</th>
              <th>Industry</th>
              <th>Status</th>
              <th>Impact / Metric</th>
              <th style="text-align:right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(item => {
              const isChecked = selectedItems.portfolio.has(item.id);
              const isActive = item.status !== 'draft';
              return `
                <tr>
                  <td>
                    <input type="checkbox" class="admin-checkbox" ${isChecked ? 'checked' : ''} onchange="window.adminApp.toggleSelectItem('portfolio', '${item.id}', this.checked)" />
                  </td>
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
                  <td>
                    <span class="status-pill-toggle ${isActive ? 'status-pill-active' : 'status-pill-draft'}" onclick="window.adminApp.toggleItemStatus('portfolio', '${item.id}')">
                      ${isActive ? 'Active' : 'Draft'}
                    </span>
                  </td>
                  <td><span class="badge badge-emerald">${escapeHtml(item.metrics || 'Completed')}</span></td>
                  <td style="text-align:right;">
                    <div class="row-actions" style="justify-content:flex-end;">
                      <button class="action-btn" title="Live Preview" onclick="window.adminApp.previewItem('portfolio', '${item.id}')">
                        <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      </button>
                      <button class="action-btn" title="Duplicate" onclick="window.adminApp.duplicateItem('portfolio', '${item.id}')">
                        <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
                      </button>
                      <button class="action-btn" title="Edit Project" onclick="window.adminApp.openPortfolioModal('${item.id}')">
                        <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                      </button>
                      <button class="action-btn btn-delete" title="Delete Project" onclick="window.adminApp.confirmDelete('portfolio', '${item.id}', '${escapeHtml(item.title)}')">
                        <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
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
    if (filterCat !== 'all') list = list.filter(item => item.category === filterCat);
    if (searchTerm) {
      list = list.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.excerpt.toLowerCase().includes(searchTerm)
      );
    }

    renderBulkActionBar('blog');

    if (list.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
          </div>
          <h3>No articles found</h3>
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
              <th style="width:40px;">
                <input type="checkbox" class="admin-checkbox" onchange="window.adminApp.toggleSelectAll('blog', this.checked)" />
              </th>
              <th>Article</th>
              <th>Category</th>
              <th>Author & Date</th>
              <th>Status</th>
              <th style="text-align:right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(post => {
              const isChecked = selectedItems.blog.has(post.id);
              const isActive = post.status !== 'draft';
              return `
                <tr>
                  <td>
                    <input type="checkbox" class="admin-checkbox" ${isChecked ? 'checked' : ''} onchange="window.adminApp.toggleSelectItem('blog', '${post.id}', this.checked)" />
                  </td>
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
                    <span class="status-pill-toggle ${isActive ? 'status-pill-active' : 'status-pill-draft'}" onclick="window.adminApp.toggleItemStatus('blog', '${post.id}')">
                      ${isActive ? 'Active' : 'Draft'}
                    </span>
                  </td>
                  <td style="text-align:right;">
                    <div class="row-actions" style="justify-content:flex-end;">
                      <button class="action-btn" title="Live Preview" onclick="window.adminApp.previewItem('blog', '${post.id}')">
                        <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      </button>
                      <button class="action-btn" title="Duplicate" onclick="window.adminApp.duplicateItem('blog', '${post.id}')">
                        <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
                      </button>
                      <button class="action-btn" title="Edit Article" onclick="window.adminApp.openBlogModal('${post.id}')">
                        <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                      </button>
                      <button class="action-btn btn-delete" title="Delete Article" onclick="window.adminApp.confirmDelete('blog', '${post.id}', '${escapeHtml(post.title)}')">
                        <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // -------------------------------------------------------------------------
  // Render: Media & File Manager (Upload, Remove, Copy Link, Delete)
  // -------------------------------------------------------------------------
  function renderMedia() {
    const listContainer = document.getElementById('mediaList');
    if (!listContainer) return;

    let list = appData.media || [];

    if (list.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </div>
          <h3>No media files uploaded</h3>
          <p>Click "Upload Image" to add photos from your computer.</p>
          <button class="btn btn-primary" onclick="window.adminApp.triggerMediaUpload()">+ Upload New File</button>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = `
      <div class="media-grid">
        ${list.map(m => `
          <div class="media-card">
            <img class="media-card-img" src="${escapeHtml(m.url)}" alt="${escapeHtml(m.name)}" onerror="this.src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80'" />
            <div class="media-card-body">
              <div class="media-card-title" title="${escapeHtml(m.name)}">${escapeHtml(m.name)}</div>
              <div class="media-card-meta">${escapeHtml(m.size || 'Image')} • ${escapeHtml(m.uploadedAt || 'Recent')}</div>
              <div class="media-card-actions">
                <button class="action-btn" title="Copy Image URL" onclick="window.adminApp.copyText('${escapeHtml(m.url)}', 'Image URL copied!')">
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                </button>
                <button class="action-btn" title="Preview" onclick="window.adminApp.previewMediaImage('${escapeHtml(m.url)}', '${escapeHtml(m.name)}')">
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
                <button class="action-btn btn-delete" title="Delete / Remove File" onclick="window.adminApp.confirmDelete('media', '${m.id}', '${escapeHtml(m.name)}')">
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // -------------------------------------------------------------------------
  // Render: Inquiries / Contact Leads Inbox
  // -------------------------------------------------------------------------
  function renderInquiries() {
    const listContainer = document.getElementById('inquiriesList');
    if (!listContainer) return;

    let list = appData.inquiries || [];

    if (list.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <h3>No customer inquiries yet</h3>
          <p>Messages submitted through the public contact form will appear here automatically.</p>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = `
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Sender</th>
              <th>Contact Info</th>
              <th>Service</th>
              <th>Message</th>
              <th>Date</th>
              <th style="text-align:right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(inq => `
              <tr style="${inq.status === 'new' ? 'background:#f0f7ff;' : ''}">
                <td>
                  <div style="font-weight:700; color:#0a1f44;">${escapeHtml(inq.name)}</div>
                  ${inq.status === 'new' ? '<span class="badge badge-blue">New Lead</span>' : '<span class="badge badge-slate">Read</span>'}
                </td>
                <td>
                  <div style="font-size:0.82rem; font-weight:600; color:#126fe8;"><a href="mailto:${escapeHtml(inq.email)}">${escapeHtml(inq.email)}</a></div>
                  <div style="font-size:0.75rem; color:#64748b;"><a href="tel:${escapeHtml(inq.phone)}">${escapeHtml(inq.phone)}</a></div>
                </td>
                <td><span class="badge badge-emerald">${escapeHtml(inq.service || 'General Inquiry')}</span></td>
                <td>
                  <div class="inquiry-message-card">
                    ${escapeHtml(inq.message)}
                  </div>
                </td>
                <td style="font-size:0.75rem; color:#64748b; white-space:nowrap;">${escapeHtml(inq.date)}</td>
                <td style="text-align:right;">
                  <div class="row-actions" style="justify-content:flex-end;">
                    <button class="action-btn" title="Toggle Read Status" onclick="window.adminApp.toggleInquiryStatus('${inq.id}')">
                      ${inq.status === 'new' ? '✓' : '↺'}
                    </button>
                    <button class="action-btn btn-delete" title="Delete Inquiry" onclick="window.adminApp.confirmDelete('inquiries', '${inq.id}', 'Inquiry from ${escapeHtml(inq.name)}')">
                      <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
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
  // Render: Settings Tab
  // -------------------------------------------------------------------------
  function renderSettings() {
    const s = appData.settings || SEED_DATA.settings;
    const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };

    setVal('settingsPhone', s.phone);
    setVal('settingsEmail', s.email);
    setVal('settingsAddress', s.address);
    setVal('settingsWhatsapp', s.whatsappNumber);
    setVal('settingsTagline', s.tagline);
  }

  function handleSettingsSubmit(e) {
    e.preventDefault();
    appData.settings = {
      companyName: 'Aken Tech Solution',
      phone: document.getElementById('settingsPhone')?.value.trim() || '+91 98765 43210',
      email: document.getElementById('settingsEmail')?.value.trim() || 'hello@akentech.in',
      address: document.getElementById('settingsAddress')?.value.trim() || 'Thane, Mumbai, India',
      whatsappNumber: document.getElementById('settingsWhatsapp')?.value.trim() || '919876543210',
      tagline: document.getElementById('settingsTagline')?.value.trim() || 'Your Growth Partner in Technology & Marketing'
    };
    saveData(true, 'Updated company and website settings');
    showToast('Company settings updated and synced to website!', 'success');
  }

  // -------------------------------------------------------------------------
  // Bulk Actions
  // -------------------------------------------------------------------------
  function renderBulkActionBar(type) {
    const bar = document.getElementById(`${type}BulkBar`);
    if (!bar) return;
    const count = selectedItems[type].size;
    if (count > 0) {
      bar.classList.add('active');
      const countEl = bar.querySelector('.bulk-selected-count');
      if (countEl) countEl.textContent = count;
    } else {
      bar.classList.remove('active');
    }
  }

  function toggleSelectItem(type, id, checked) {
    if (checked) selectedItems[type].add(id);
    else selectedItems[type].delete(id);
    renderCurrentView();
  }

  function toggleSelectAll(type, checked) {
    const list = appData[type] || [];
    if (checked) {
      list.forEach(i => selectedItems[type].add(i.id));
    } else {
      selectedItems[type].clear();
    }
    renderCurrentView();
  }

  function bulkDelete(type) {
    const count = selectedItems[type].size;
    if (count === 0) return;
    if (confirm(`Are you sure you want to delete ${count} selected item(s)?`)) {
      appData[type] = (appData[type] || []).filter(i => !selectedItems[type].has(i.id));
      selectedItems[type].clear();
      saveData(true, `Bulk deleted ${count} item(s) from ${type}`);
      showToast(`Successfully deleted ${count} items!`, 'success');
      renderCurrentView();
    }
  }

  function clearSelection(type) {
    selectedItems[type].clear();
    renderCurrentView();
  }

  // -------------------------------------------------------------------------
  // Duplicate / Clone Item
  // -------------------------------------------------------------------------
  function duplicateItem(type, id) {
    const list = appData[type];
    if (!list) return;
    const item = list.find(i => i.id === id);
    if (!item) return;

    const copy = JSON.parse(JSON.stringify(item));
    copy.id = `${type.slice(0, 4)}-${Date.now()}`;
    copy.title = `${copy.title} (Copy)`;
    copy.updatedAt = new Date().toISOString().split('T')[0];

    list.unshift(copy);
    saveData(true, `Duplicated ${type.slice(0, -1)}: ${item.title}`);
    showToast(`Duplicated "${item.title}" successfully!`, 'success');
    renderCurrentView();
  }

  // -------------------------------------------------------------------------
  // Item Status Toggle (Active / Draft)
  // -------------------------------------------------------------------------
  function toggleItemStatus(type, id) {
    const list = appData[type];
    if (!list) return;
    const item = list.find(i => i.id === id);
    if (!item) return;

    item.status = item.status === 'draft' ? 'active' : 'draft';
    saveData(true, `Set ${item.title} to ${item.status}`);
    showToast(`"${item.title}" marked as ${item.status.toUpperCase()}!`, 'info');
    renderCurrentView();
  }

  function toggleInquiryStatus(id) {
    const inq = (appData.inquiries || []).find(i => i.id === id);
    if (!inq) return;
    inq.status = inq.status === 'new' ? 'read' : 'new';
    saveData(false);
    renderInquiries();
    updateBadges();
  }

  // -------------------------------------------------------------------------
  // File Upload & Remove Helpers
  // -------------------------------------------------------------------------
  function handleFileInputChange(e, urlInputId, previewContainerId) {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('Please select a valid image file (PNG, JPG, WebP)', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      const dataUrl = event.target.result;
      const urlInput = document.getElementById(urlInputId);
      if (urlInput) urlInput.value = dataUrl;

      // Also auto-save to Media Gallery!
      if (!appData.media) appData.media = [];
      appData.media.unshift({
        id: 'med-' + Date.now(),
        name: file.name,
        url: dataUrl,
        size: `${Math.round(file.size / 1024)} KB`,
        uploadedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit' })
      });
      saveData(false);

      showFilePreview(previewContainerId, dataUrl, file.name, urlInputId, e.target.id);
      showToast(`Uploaded "${file.name}"! Click "Save" to apply.`, 'success');
    };
    reader.readAsDataURL(file);
  }

  function showFilePreview(containerId, url, fileName, urlInputId, fileInputId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="file-preview-wrap">
        <img class="file-preview-thumb" src="${url}" alt="Preview" />
        <div class="file-preview-meta">
          <div class="file-preview-name">${escapeHtml(fileName || 'Selected Image')}</div>
          <div style="font-size:0.72rem; color:#64748b;">Image attached & ready</div>
        </div>
        <button type="button" class="file-remove-btn" onclick="window.adminApp.removeUploadedFile('${urlInputId}', '${fileInputId}', '${containerId}')">
          <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          Remove File
        </button>
      </div>
    `;
    container.style.display = 'block';
  }

  function removeUploadedFile(urlInputId, fileInputId, containerId) {
    const urlInput = document.getElementById(urlInputId);
    if (urlInput) urlInput.value = '';

    const fileInput = document.getElementById(fileInputId);
    if (fileInput) fileInput.value = '';

    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = '';
      container.style.display = 'none';
    }

    showToast('File/Image removed.', 'info');
  }

  function triggerMediaUpload() {
    const input = document.getElementById('mediaDirectUploadInput');
    if (input) input.click();
  }

  function handleDirectMediaUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      if (!appData.media) appData.media = [];
      const newMedia = {
        id: 'med-' + Date.now(),
        name: file.name,
        url: event.target.result,
        size: `${Math.round(file.size / 1024)} KB`,
        uploadedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit' })
      };
      appData.media.unshift(newMedia);
      saveData(true, `Uploaded image: ${file.name}`);
      showToast(`Image "${file.name}" uploaded to Media Gallery!`, 'success');
      renderMedia();
      updateBadges();
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  }

  function previewMediaImage(url, title) {
    const modal = document.getElementById('previewItemModal');
    const titleEl = document.getElementById('previewModalItemTitle');
    const container = document.getElementById('previewItemContainer');

    titleEl.textContent = title || 'Image Preview';
    container.innerHTML = `
      <div style="text-align:center;">
        <img src="${url}" style="max-width:100%; max-height:480px; border-radius:8px; box-shadow:0 10px 25px rgba(0,0,0,0.15);" />
        <div style="margin-top:1rem;">
          <button class="btn btn-primary btn-sm" onclick="window.adminApp.copyText('${url}', 'Image URL copied!')">Copy Link</button>
        </div>
      </div>
    `;
    modal.classList.add('active');
  }

  function copyText(text, successMsg) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg || 'Copied to clipboard!', 'success');
    }).catch(() => {
      showToast('Could not copy automatically', 'info');
    });
  }

  // -------------------------------------------------------------------------
  // Render: Website Live Preview
  // -------------------------------------------------------------------------
  function renderPreview() {
    const frame = document.getElementById('previewIframe');
    if (!frame) return;
    if (!frame.src || frame.src === 'about:blank') {
      loadPreviewPage('../index.html');
    }
  }

  function loadPreviewPage(url) {
    const frame = document.getElementById('previewIframe');
    if (frame) frame.src = url;

    document.querySelectorAll('.preview-page-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.page === url);
    });
  }

  function setPreviewDevice(mode) {
    const frame = document.getElementById('previewIframe');
    if (!frame) return;

    frame.classList.remove('device-tablet', 'device-mobile');
    if (mode === 'tablet') frame.classList.add('device-tablet');
    else if (mode === 'mobile') frame.classList.add('device-mobile');

    document.querySelectorAll('.device-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.device === mode);
    });
  }

  // -------------------------------------------------------------------------
  // Render: Export & Deployment Hub
  // -------------------------------------------------------------------------
  function renderExportHub() {
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
    const title = document.getElementById('serviceTitle').value.trim();
    const category = document.getElementById('serviceCategory').value;
    const badge = document.getElementById('serviceBadge').value.trim();
    const description = document.getElementById('serviceDesc').value.trim();
    const featuresRaw = document.getElementById('serviceFeatures').value.trim();
    const ctaText = document.getElementById('serviceCta').value.trim() || 'Inquire Now →';

    if (!title || !description) {
      showToast('Please fill in required fields.', 'error');
      return;
    }

    const features = featuresRaw ? featuresRaw.split('\n').map(s => s.trim()).filter(Boolean) : [];

    if (editTarget && editTarget.id) {
      const idx = appData.services.findIndex(s => s.id === editTarget.id);
      if (idx !== -1) {
        appData.services[idx] = {
          ...appData.services[idx],
          title, category, badge, description, features, ctaText,
          updatedAt: new Date().toISOString().split('T')[0]
        };
        saveData(true, `Updated service: ${title}`);
        showToast('Service updated & live on website!', 'success');
      }
    } else {
      const newService = {
        id: 'srv-' + Date.now(),
        title, category, badge: badge || 'Active',
        status: 'active',
        description, features, ctaText,
        updatedAt: new Date().toISOString().split('T')[0]
      };
      if (!appData.services) appData.services = [];
      appData.services.unshift(newService);
      saveData(true, `Added new service: ${title}`);
      showToast('New service saved & live on website!', 'success');
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

    const previewContainer = document.getElementById('productFilePreview');
    if (previewContainer) { previewContainer.innerHTML = ''; previewContainer.style.display = 'none'; }

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
        if (item.imageUrl) {
          showFilePreview('productFilePreview', item.imageUrl, 'Attached Image', 'productImage', 'productFileInput');
        }
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
    const title = document.getElementById('productTitle').value.trim();
    const category = document.getElementById('productCategory').value;
    const tag = document.getElementById('productTag').value.trim();
    const priceBadge = document.getElementById('productPriceBadge').value.trim();
    const imageUrl = document.getElementById('productImage').value.trim() || 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80';
    const description = document.getElementById('productDesc').value.trim();
    const featuresRaw = document.getElementById('productFeatures').value.trim();

    if (!title || !description) {
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
        showToast('Product updated & live on website!', 'success');
      }
    } else {
      const newProd = {
        id: 'prod-' + Date.now(),
        title, category, tag, priceBadge, imageUrl, description, features,
        status: 'active',
        updatedAt: new Date().toISOString().split('T')[0]
      };
      if (!appData.products) appData.products = [];
      appData.products.unshift(newProd);
      saveData(true, `Added product: ${title}`);
      showToast('Product saved & live on website!', 'success');
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

    const previewContainer = document.getElementById('portfolioFilePreview');
    if (previewContainer) { previewContainer.innerHTML = ''; previewContainer.style.display = 'none'; }

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
        if (item.imageUrl) {
          showFilePreview('portfolioFilePreview', item.imageUrl, 'Attached Image', 'portfolioImage', 'portfolioFileInput');
        }
      }
    } else {
      titleEl.textContent = 'Add New Project';
      document.getElementById('portfolioImage').value = 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80';
    }

    modal.classList.add('active');
  }

  function handlePortfolioSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('portfolioTitle').value.trim();
    const client = document.getElementById('portfolioClient').value.trim();
    const industry = document.getElementById('portfolioIndustry').value;
    const metrics = document.getElementById('portfolioMetrics').value.trim();
    const imageUrl = document.getElementById('portfolioImage').value.trim() || 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80';
    const tagsRaw = document.getElementById('portfolioTags').value.trim();
    const description = document.getElementById('portfolioDesc').value.trim();

    if (!title || !client || !description) {
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
        showToast('Portfolio project updated & live on website!', 'success');
      }
    } else {
      const newPort = {
        id: 'port-' + Date.now(),
        title, client, industry, metrics, imageUrl, tags, description,
        status: 'active',
        updatedAt: new Date().toISOString().split('T')[0]
      };
      if (!appData.portfolio) appData.portfolio = [];
      appData.portfolio.unshift(newPort);
      saveData(true, `Added portfolio project: ${title}`);
      showToast('Project saved & live on website!', 'success');
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

    const previewContainer = document.getElementById('blogFilePreview');
    if (previewContainer) { previewContainer.innerHTML = ''; previewContainer.style.display = 'none'; }

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
        if (item.imageUrl) {
          showFilePreview('blogFilePreview', item.imageUrl, 'Attached Image', 'blogImage', 'blogFileInput');
        }
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
    const title = document.getElementById('blogTitle').value.trim();
    const category = document.getElementById('blogCategory').value;
    const author = document.getElementById('blogAuthor').value.trim() || 'Roshan Tiwari';
    const date = document.getElementById('blogDate').value.trim();
    const readTime = document.getElementById('blogReadTime').value.trim() || '5 min read';
    const featured = document.getElementById('blogFeatured').checked;
    const imageUrl = document.getElementById('blogImage').value.trim() || 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=900&q=80';
    const excerpt = document.getElementById('blogExcerpt').value.trim();
    const content = document.getElementById('blogContent').value.trim();

    if (!title || !excerpt) {
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
        showToast('Article updated & live on website!', 'success');
      }
    } else {
      const newPost = {
        id: 'blog-' + Date.now(),
        title, category, author, date, readTime, featured, imageUrl, excerpt, content,
        status: 'active',
        updatedAt: new Date().toISOString().split('T')[0]
      };
      if (!appData.blog) appData.blog = [];
      appData.blog.unshift(newPost);
      saveData(true, `Published new article: ${title}`);
      showToast('Article published & live on website!', 'success');
    }

    closeModal('blogModal');
    renderBlog();
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
      selectedItems[type]?.delete(id);
      saveData(true, `Deleted ${type.slice(0, -1)}: ${title}`);
      showToast(`Removed "${title}" successfully!`, 'success');
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
  // JSON Export & Import
  // -------------------------------------------------------------------------
  function exportAllJson() {
    const payload = {
      app: 'Aken Tech Solution',
      exportedAt: new Date().toISOString(),
      version: '1.2.0',
      data: appData
    };
    downloadFile(JSON.stringify(payload, null, 2), 'aken-content-export.json', 'application/json');
    logAction('Exported full website content JSON');
    showToast('Downloaded complete content backup JSON!', 'success');
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
            ...appData,
            services: importedData.services || appData.services || [],
            products: importedData.products || appData.products || [],
            portfolio: importedData.portfolio || appData.portfolio || [],
            blog: importedData.blog || appData.blog || [],
            media: importedData.media || appData.media || [],
            inquiries: importedData.inquiries || appData.inquiries || [],
            settings: importedData.settings || appData.settings || SEED_DATA.settings
          };
          saveData(true, `Imported content from ${file.name}`);
          showToast('Data imported and synced successfully!', 'success');
          renderCurrentView();
        } else {
          showToast('Unrecognized JSON structure.', 'error');
        }
      } catch (err) {
        showToast('Invalid JSON file format: ' + err.message, 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  function resetToSeeds() {
    if (confirm('Restore default website seeds? Unsaved edits will be reset.')) {
      appData = JSON.parse(JSON.stringify(SEED_DATA));
      saveData(true, 'Reset all content to default website seeds');
      showToast('Reset completed!', 'success');
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
    document.getElementById('settingsForm')?.addEventListener('submit', handleSettingsSubmit);

    // File Upload Inputs in Forms
    document.getElementById('productFileInput')?.addEventListener('change', (e) => handleFileInputChange(e, 'productImage', 'productFilePreview'));
    document.getElementById('portfolioFileInput')?.addEventListener('change', (e) => handleFileInputChange(e, 'portfolioImage', 'portfolioFilePreview'));
    document.getElementById('blogFileInput')?.addEventListener('change', (e) => handleFileInputChange(e, 'blogImage', 'blogFilePreview'));

    // Direct Media Library Upload
    document.getElementById('mediaDirectUploadInput')?.addEventListener('change', handleDirectMediaUpload);

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
    manualSaveAndSync,
    openServiceModal,
    openProductModal,
    openPortfolioModal,
    openBlogModal,
    confirmDelete,
    previewItem,
    duplicateItem,
    toggleItemStatus,
    toggleInquiryStatus,
    toggleSelectItem,
    toggleSelectAll,
    bulkDelete,
    clearSelection,
    removeUploadedFile,
    triggerMediaUpload,
    previewMediaImage,
    copyText,
    closeModal,
    exportAllJson,
    triggerImportJson,
    resetToSeeds,
    loadPreviewPage,
    setPreviewDevice
  };

  document.addEventListener('DOMContentLoaded', () => {
    window.adminApp.init();
  });

})();
