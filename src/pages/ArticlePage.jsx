import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES } from '../data.js';

const getWhatsAppUrl = (topic) => {
  const text = encodeURIComponent(`مرحباً فكري جروب، أريد الاستفسار عن: ${topic}`);
  return `https://wa.me/201011218141?text=${text}`;
};

export default function ArticlePage() {
  const { id } = useParams();
  const article = ARTICLES.find(a => a.id === id);

  if (!article) {
    return (
      <section className="section" style={{ paddingTop: '40px', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '20px' }}>المقال غير موجود</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>عذراً، المقال الذي تبحث عنه غير متاح حالياً.</p>
          <Link to="/articles" className="btn btn-gold">العودة إلى المقالات</Link>
        </div>
      </section>
    );
  }

  const relatedArticles = ARTICLES.filter(a => a.id !== article.id).slice(0, 2);

  return (
    <main className="dedicated-article-page">
      {/* Article Page Top Breadcrumb Bar */}
      <div className="article-page-breadcrumb-bar">
        <div className="container breadcrumb-container">
          <Link to="/" className="back-home-btn">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            <span>العودة إلى الصفحة الرئيسية</span>
          </Link>
          <div className="breadcrumb-path">
            <Link to="/" style={{ cursor: 'pointer', color: 'var(--text-muted)', textDecoration: 'none' }}>الرئيسية</Link>
            <span className="sep">/</span>
            <Link to="/articles" style={{ cursor: 'pointer', color: 'var(--text-muted)', textDecoration: 'none' }}>المقالات الصناعية</Link>
            <span className="sep">/</span>
            <span className="current">{article.categoryName}</span>
          </div>
        </div>
      </div>

      <div className="container article-layout-container">
        {/* Main Article Content Column */}
        <article className="main-article-content">
          <div className="article-hero-header">
            <span className="section-badge">{article.categoryName}</span>
            <h1 className="article-main-title">{article.title}</h1>

            <div className="article-author-card">
              <img src="/hero-banner.jpg" alt={article.author} className="author-avatar" width="80" height="80" />
              <div className="author-details">
                <div className="author-name">{article.author}</div>
                <div className="author-role">{article.authorRole}</div>
              </div>
              <div className="article-meta-tags">
                <span>📅 {article.date}</span>
                <span>⏱️ {article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Image in Article */}
          <div className="article-featured-image-wrap">
            <img src={article.image || "/hero-banner.jpg"} alt={article.title} width="800" height="400" />
            <div className="image-caption">تصنيع وابتكار ماكينات الرخام والجرانيت الثقيلة بمصانع فكري جروب</div>
          </div>

          {/* Rich Body Content */}
          <div 
            className="article-rich-text"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Consultation / Quote Action Box */}
          <div className="article-cta-box">
            <div className="cta-content">
              <h3>هل تبحث عن الماكينة الأنسب لمصنعك بأعلى عائد استثماري؟</h3>
              <p>تواصل مباشرة مع فكري جروب للاستشارات الفنية وتجهيز خطوط الإنتاج والتعرف على الأسعار الخاصة.</p>
            </div>
            <div className="cta-actions">
              <a href={getWhatsAppUrl(article.title)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                تواصل واتساب مع فكري جروب
              </a>
              <a href="tel:01011218141" className="btn btn-outline">
                اتصال هاتفي: 01011218141
              </a>
            </div>
          </div>

          {/* Related Articles Navigation */}
          <div className="related-articles-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: 'var(--text-main)' }}>
              مقالات ودراسات أخرى قد تهمك:
            </h3>
            <div className="articles-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {relatedArticles.map(ra => (
                <div key={ra.id} className="article-card">
                  <div className="article-header">
                    <span className="article-tag">{ra.categoryName}</span>
                    <span className="article-read-time">{ra.readTime}</span>
                  </div>
                  <h4 className="article-title" style={{ fontSize: '1.15rem' }}>{ra.title}</h4>
                  <p className="article-excerpt" style={{ fontSize: '0.9rem' }}>{ra.excerpt}</p>
                  <div className="article-footer">
                    <span className="article-date">📅 {ra.date}</span>
                    <Link to={`/article/${ra.id}`} className="article-read-btn">
                      اقرأ المقال ←
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar Column */}
        <aside className="article-sidebar">
          {/* Founder Profile Box */}
          <div className="sidebar-widget">
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <img src="/hero-banner.jpg" alt="فكري جروب" style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 12px', display: 'block', border: '3px solid var(--gold-primary)' }} width="110" height="110" />
              <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "4px" }}>فكري جروب</h4>
              <div style={{ fontSize: "0.85rem", color: "var(--gold-dark)" }}>رائد صناعة الماكينات في مصر والوطن العربي</div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7', textAlign: 'center', marginBottom: '16px' }}>
              أكثر من 20 عاماً في تطوير صناعات الرخام.
            </p>
          </div>

          <div className="sidebar-widget featured-product-widget">
            <span className="section-badge" style={{ marginBottom: '10px', display: 'inline-block' }}>ماكينة اشتهر ⭐</span>
            <div style={{ borderRadius: '10px', overflow: 'hidden', height: '160px', marginBottom: '14px' }}>
              <img src="/saw-13.jpg" alt="ماكينة نشر 13 أسطوانة" style={{ width: '100%', height: '100%', objectFit: 'cover' }} width="300" height="160" />
            </div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "8px" }}>ماكينة نشر الجرانيت 13 أسطوانة</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px' }}>أعلى إنتاجية يومية لمصنعك مع نظام حمام الزيت.</p>
            <a href={getWhatsAppUrl('ماكينة نشر 13 أسطوانة')} target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ width: '100%', padding: '10px', fontSize: '0.9rem' }}>
              طلب تفاصيل وسعر
            </a>
          </div>

          {/* Quick Branch Directory */}
          <div className="sidebar-widget">
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '14px' }}>
              مواقع المصانع والإدارة
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <div>📍 <strong>شق التعبان:</strong> أبراج الأمل، برج 99</div>
              <div>🏭 <strong>المصنع الأول:</strong> عرب أبو ساعد - حلوان</div>
              <div>🏭 <strong>المصنع الثاني:</strong> محافظة المنصورة</div>
              <div>📞 <strong>المبيعات:</strong> 01011218141</div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
