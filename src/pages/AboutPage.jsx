import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <section className="section" style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="about-box">
          <div className="quote-block">
            "نحن لا نبيع مجرد معدات، بل نبني شراكة نجاح مستمرة؛ نضمن لك أعلى إنتاجية وأقل تكلفة صيانة مع توفير فوري لكافة قطع الغيار محلياً لضمان استمرارية تشغيل مصنعك بأعلى طاقة."
          </div>

          <div className="about-features-list">
            <div className="about-feature-item">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>مصانع متكاملة في عرب أبو ساعد والمنصورة</span>
            </div>
            <div className="about-feature-item">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>فريق صيانة متنقل متاح على مدار الساعة</span>
            </div>
            <div className="about-feature-item">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>إمكانية تصنيع أبعاد ومقاسات مخصصة لمصنعك</span>
            </div>
            <div className="about-feature-item">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>تسهيلات في الدفع وتوريد مباشر وسريع</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '60px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '20px', textAlign: 'center' }}>
            عن المهندس أحمد فكري وفكري جروب
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '2', maxWidth: '800px', margin: '0 auto 40px', textAlign: 'center' }}>
            أكثر من 20 عاماً من الخبرة في صناعة ماكينات الرخام والجرانيت. بدأ المهندس أحمد فكري من قلب الورش الصناعية، و حول شغفه إلى أكبر صرح لتصنيع معدات الرخام في مصر والوطن العربي.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>
            <div style={{ background: 'var(--bg-alt)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏭</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '8px' }}>مصنع عرب أبو ساعد</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>حلوان - مخصص لإنتاج الشاسيهات الصلبة ومناشير الجرانيت العملاقة</p>
            </div>
            <div style={{ background: 'var(--bg-alt)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏭</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '8px' }}>مصنع المنصورة</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>مخصص لتجميع الأوناش العلوية والساحات وأنظمة التحكم</p>
            </div>
            <div style={{ background: 'var(--bg-alt)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏢</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '8px' }}>مقر الإدارة</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>شق التعبان، أبراج الأمل، برج 99 - القاهرة</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link to="/contact" className="btn btn-gold" style={{ padding: '16px 48px', fontSize: '1.1rem' }}>
            تواصل معنا الآن
          </Link>
        </div>
      </div>
    </section>
  );
}
