import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link to="/" className="brand-logo" style={{ textDecoration: 'none' }}>
              <img src="/logo.webp" alt="فكري جروب" width="48" height="48" />
              <div className="brand-title-wrap">
                <span className="brand-title" style={{ color: '#fff' }}>فكري جروب</span>
                <span className="brand-sub" style={{ color: '#f59e0b' }}>Islamic Industrial Machinery Group</span>
              </div>
            </Link>
            <p>
              الشركة الرائدة في جمهورية مصر العربية والوطن العربي لتصنيع ماكينات نشر وقص الرخام والجرانيت، جلايات الشرائح، والأوناش العلوية والساحات حتى 100 طن بأعلى معايير الجودة والصلابة.
            </p>
            <div className="footer-social-links">
              <a href="https://www.facebook.com/ic.marble.machinery" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="فيسبوك">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">أقسام الموقع</h4>
            <ul className="footer-links">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/features">مميزات الصناعة</Link></li>
              <li><Link to="/products">الماكينات والأوناش</Link></li>
              <li><Link to="/articles">المقالات ودراسات الجدوى</Link></li>
              <li><Link to="/faq">الأسئلة الشائعة</Link></li>
              <li><Link to="/about">عن فكري جروب</Link></li>
              <li><Link to="/contact">طلب عرض سعر</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">الماكينات المتاحة</h4>
            <ul className="footer-links">
              <li><Link to="/products" aria-label="منشار 13 أسطوانة - كتالوج المنتجات">منشار 13 أسطوانة</Link></li>
              <li><Link to="/products" aria-label="جلاية 10 رأس طولات - كتالوج المنتجات">جلاية 10 رأس طولات</Link></li>
              <li><Link to="/products" aria-label="ونش الزرافة والعلم - كتالوج المنتجات">ونش الزرافة والعلم</Link></li>
              <li><Link to="/products" aria-label="ونش ساحة 100 طن - كتالوج المنتجات">ونش ساحة 100 طن</Link></li>
              <li><Link to="/products" aria-label="ماكينة فكري 1600 - كتالوج المنتجات">ماكينة فكري 1600</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">اتصال سريع بالإدارة</h4>
            <p style={{ color: '#e2e8f0', fontSize: '0.9rem', marginBottom: '16px' }}>
              جاهزون لتلقي استفسارات المصانع وعروض التجهيز الشاملة في أي وقت.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="tel:01011218141" style={{ color: 'var(--gold-light)', fontWeight: '700', fontSize: '1.1rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                📞 01011218141
              </a>
              <a href="tel:01001163633" style={{ color: '#f1f5f9', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                📞 01001163633
              </a>
              <a href="tel:01090080915" style={{ color: '#f1f5f9', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                📞 01090080915
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <a href="https://brand1me.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 20px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: '#e2e8f0', fontSize: '0.85rem', textDecoration: 'none', transition: 'all 0.3s' }}>
            صنع بكل حب بواسطة شركة <span style={{ color: 'var(--gold-light)', fontWeight: '700' }}>BrandMe</span>
          </a>
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} فكري جروب (فكري جروب).
          </div>
        </div>
      </div>
    </footer>
  );
}
