import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'الرئيسية' },
    { to: '/products', label: 'الماكينات' },
    { to: '/features', label: 'مميزاتنا' },
    { to: '/about', label: 'عن فكري جروب' },
    { to: '/gallery', label: 'معرض الصور' },
    { to: '/articles', label: 'المقالات' },
    { to: '/faq', label: 'الأسئلة الشائعة' },
    { to: '/contact', label: 'تواصل معنا' },
  ];

  const drawerLinks = [
    { to: '/', icon: '🏠', label: 'الصفحة الرئيسية' },
    { to: '/features', icon: '⚙️', label: 'لماذا تختارنا ومميزاتنا' },
    { to: '/products', icon: '🏗️', label: 'أسطول الماكينات والأوناش' },
    { to: '/about', icon: '👨‍💼', label: 'عن فكري جروب' },
    { to: '/gallery', icon: '📸', label: 'معرض الصور' },
    { to: '/articles', icon: '📰', label: 'المقالات ودليل المصانع' },
    { to: '/faq', icon: '❓', label: 'الأسئلة الشائعة' },
    { to: '/contact', icon: '📍', label: 'الفروع والتواصل' },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="topbar">
        <div className="container topbar-content">
          <div className="topbar-item">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>شق التعبان، برج 99 | مصانعنا: حلوان والمنصورة</span>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div className="topbar-item">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 00-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/></svg>
              <span><strong>01011218141</strong></span>
            </div>
            <div className="topbar-item">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              <span>دعم 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="navbar">
        <div className="container navbar-inner">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
            <div className="brand-logo">
              <img src="/logo.png" alt="فكري جروب - صناعة ماكينات الرخام والجرانيت" />
              <div className="brand-title-wrap">
                <span className="brand-title">فكري جروب</span>
                <span className="brand-sub">لصناعة ماكينات الرخام والجرانيت والأوناش في مصر والوطن العربي</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="فتح القائمة"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
        <aside className={`mobile-drawer ${mobileMenuOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
          <div className="drawer-header">
            <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
              <img src="/logo.png" alt="لوجو فكري جروب" style={{ height: '40px' }} />
              <div>
                <div style={{ fontWeight: '800', color: 'var(--text-main)', fontSize: '1.1rem' }}>فكري جروب</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--gold-dark)' }}>لصناعة معدات الرخام</div>
              </div>
            </Link>
            <button className="drawer-close-btn" onClick={() => setMobileMenuOpen(false)} aria-label="إغلاق">✕</button>
          </div>

          <nav className="drawer-nav">
            {drawerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="drawer-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="drawer-icon">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="drawer-footer">
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
              تواصل فوري مع الإدارة:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="tel:01011218141" className="btn btn-outline" style={{ width: '100%', padding: '10px' }}>
                01011218141
              </a>
              <a
                href="https://wa.me/201011218141?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D9%83%D8%B1%D9%8A%20%D8%AC%D8%B1%D9%88%D8%A8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '10px' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                واتساب الإدارة
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
