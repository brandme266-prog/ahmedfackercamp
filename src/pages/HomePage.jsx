import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, ARTICLES } from '../data.js';

const getWhatsAppUrl = (topic) => {
  const text = encodeURIComponent(`مرحباً فكري جروب، أريد الاستفسار عن تفاصيل وسعر: ${topic || 'ماكينات الرخام والأوناش'}`);
  return `https://wa.me/201011218141?text=${text}`;
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-bg-media">
          <img src="/hero-banner.webp" alt="مصنع ماكينات الرخام فكري جروب" className="hero-bg-img" width="800" height="1000" fetchPriority="high" />
        </div>
        <div className="hero-gradient-overlay"></div>

        <div className="container hero-content">
          <div className="hero-text">
            <div className="section-badge">
              <span>🏆</span>
              <span>الخيار الأول: أكثر من 20 عاماً من الريادة والثقة الصناعية</span>
            </div>
            
            <h1 className="hero-headline">
              <span className="gradient-text">فكري جروب</span><br />
              أفضل مصنع مكن رخام وجرانيت واوناش في مصر والوطن العربي
            </h1>

            <p className="hero-description">
              بتدور على مكن رخام يعيش معاك؟ إحنا بنعيد تعريف معايير القوة والصلابة في مصر والوطن العربي. مكن تقطيع وجلايات وأوناش عملاقة مصنعة بصلب فائق الجودة، مزودة بنظام <strong>حمام الزيت الحصري</strong> لتدوم طويلاً وتضمن لك أعلى إنتاجية بأفضل اسعار مكن الرخام.
            </p>

            <div className="trust-metrics">
              <div className="metric-item">
                <div className="metric-number">+20</div>
                <div className="metric-label">عاماً من الخبرة الهندسية</div>
              </div>
              <div className="metric-item">
                <div className="metric-number">+500</div>
                <div className="metric-label">ماكينة عاملة بكبرى المصانع</div>
              </div>
              <div className="metric-item">
                <div className="metric-number">100 طن</div>
                <div className="metric-label">قدرة رفع الأوناش الثقيلة</div>
              </div>
              <div className="metric-item">
                <div className="metric-number">100%</div>
                <div className="metric-label">صلب معالج وضمان معتمد</div>
              </div>
            </div>

            <div className="hero-buttons" style={{ marginTop: '32px', marginBottom: '0' }}>
              <Link to="/products" className="btn btn-gold">
                استكشف أسطول الماكينات
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
              </Link>
              <a 
                href={getWhatsAppUrl('استفسار من الصفحة الرئيسية')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <span>تواصل واتساب مباشرة</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              </a>
              <Link to="/articles" className="btn btn-outline">
                المقالات ودليل المصانع
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-img-wrap">
                <img src="/saw-13.webp" alt="ماكينة نشر الجرانيت 13 أسطوانة" width="400" height="320" loading="eager" />
              <div className="hero-card-badge">الماكينة الأكثر طلباً ⭐</div>
            </div>
            <h2 className="hero-card-title">ماكينة نشر الجرانيت 13 أسطوانة</h2>
            <p className="hero-card-desc">
              محرك جبار، قص ليزري متعدد، وتوفير استهلاك الشفرات بنظام تبريد وتزييت مغلق يضمن أقصى إنتاجية يومية لمصنعك.
            </p>
            <div className="hero-card-footer">
              <span style={{ color: 'var(--gold-dark)', fontWeight: '700' }}>مواصفات قياسية أوروبية</span>
              <a 
                href={getWhatsAppUrl('ماكينة نشر الجرانيت 13 أسطوانة')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold" 
                style={{ padding: '8px 18px', fontSize: '0.88rem' }}
              >
                طلب عرض سعر
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Are The Best Section */}
      <section id="why-us" className="comparison-section" style={{ padding: '80px 0', backgroundColor: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">مقارنة المنافسين</span>
            <h2>لماذا تُصنف فكري جروب كـ <span className="gradient-text">أفضل شركة</span> لتصنيع ماكينات الرخام؟</h2>
            <p>إليك الأسباب التي تجعل كبرى المصانع في شق التعبان ومصر والوطن العربي تختارنا دوناً عن غيرنا.</p>
          </div>
          
          <div className="features-grid" style={{ marginTop: '40px' }}>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>نظام حمام الزيت الحصري</h3>
              <p>بعكس الماكينات العادية التي تتلف تروسها سريعاً بسبب المياه، ماكيناتنا معزولة بالكامل في حمام زيت دائم يضاعف عمرها 300%.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚖️</div>
              <h3>شاسيهات صلب للخدمة الشاقة</h3>
              <p>نستخدم حديد صلب مسبوك بأوزان مضاعفة لمنع أي اهتزازات أثناء القص، مما يضمن دقة متناهية وحواف مثالية للألواح.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>ضمان حقيقي ودعم فني 24/7</h3>
              <p>لا نكتفي ببيع الماكينة؛ بل نوفر صيانة سريعة وقطع غيار فورية ومحلية الصنع لضمان عدم توقف إنتاج مصنعك يوماً واحداً.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section id="products-preview" className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">كتالوج المنتجات الرسمي</div>
            <h2 className="section-title">أسطول الماكينات والأوناش الصناعية</h2>
            <p className="section-subtitle">
              اختر الماكينة التي تناسب حجم إنتاج مصنعك، وتعرف على المواصفات القياسية لكل منتج.
            </p>
          </div>

          <div className="products-grid">
            {PRODUCTS.slice(0, 3).map((p) => (
              <div key={p.id} className="product-item">
                <div className="product-thumb-wrap">
                  <img src={p.img} alt={p.name} className="product-thumb" width="400" height="300" loading="lazy" />
                  <span className="product-category-tag">{p.categoryName}</span>
                </div>
                
                <div className="product-details">
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-desc">{p.desc}</p>
                  
                  <div className="product-specs">
                    {p.specs.slice(0, 2).map((s, idx) => (
                      <div key={idx} className="spec-item">
                        <span className="spec-label">{s.label}:</span>
                        <span className="spec-val">{s.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="product-actions">
                    <a 
                      href={getWhatsAppUrl(p.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold"
                    >
                      طلب تسعير فوري
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/products" className="btn btn-outline" style={{ padding: '14px 40px' }}>
              عرض جميع المنتجات ({PRODUCTS.length})
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Preview */}
      <section id="articles-preview" className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">دليل صناعة وتطوير ماكينات الرخام والجرانيت</h2>
            <p className="section-subtitle">
              مقالات حصرية ودراسات فنية يقدمها فكري جروب لمساعدة أصحاب المصانع على مضاعفة الإنتاج وخفض تكاليف التشغيل.
            </p>
          </div>

          <div className="articles-grid">
            {ARTICLES.slice(0, 3).map((article) => (
              <article key={article.id} className="article-card">
                <div className="article-card-image-wrap">
                  <img src={article.image || "/hero-banner.webp"} alt={article.title} loading="lazy" width="600" height="800" />
                  <span className="article-tag">{article.categoryName}</span>
                </div>
                <div className="article-card-body">
                  <div className="article-card-meta">
                    <span className="article-date">📅 {article.date}</span>
                    <span className="article-read-time">⏱️ {article.readTime}</span>
                  </div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-footer">
                    <Link to={`/article/${article.id}`} className="article-read-btn">
                      اقرأ المقال الكامل ←
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/articles" className="btn btn-outline" style={{ padding: '14px 40px' }}>
              عرض جميع المقالات
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
