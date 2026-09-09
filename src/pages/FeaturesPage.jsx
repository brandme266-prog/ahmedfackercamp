import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturesPage() {
  return (
    <section className="section" style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">لماذا تختار فكري جروب؟</div>
          <h2 className="section-title">ابتكارات هندسية تصنع الفارق لمصنعك</h2>
          <p className="section-subtitle">
            نصمم ونصنع معدات تتحمل أقصى ظروف التشغيل المستمر مع خفض تكاليف الصيانة وقطع الغيار إلى أدنى حد ممكن.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-icon-wrap">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
            </div>
            <h3 className="feature-title">ابتكار حمام الزيت الحصري</h3>
            <p className="feature-desc">
              نظام عزل وتزييت دائم يمنع وصول مياه الرخام والأتربة للتروس الميكانيكية، مما يضاعف عمر الماكينة 3 أضعاف ويلغي الأعطال المفاجئة.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrap">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <h3 className="feature-title">شاسيهات صلب ثقيل فائق المتانة</h3>
            <p className="feature-desc">
              هياكل حديدية معالجة حرارياً ضد الاهتزاز وعوامل التآكل، تضمن استقرار الماكينة حتى مع أثقل كتل الجرانيت وأقصى سرعات دوران.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrap">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3 className="feature-title">دقة قطع متناهية وتشطيب فاخر</h3>
            <p className="feature-desc">
              أنظمة تحكم هيدروليكية وحركية مضبوطة بالمليمتر لمنع أي هدر في حجر الرخام والجرانيت، وإخراج ألواح ناعمة ومستوية بالكامل.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrap">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            </div>
            <h3 className="feature-title">خدمة ما بعد البيع وقطع غيار فورية</h3>
            <p className="feature-desc">
              فريق من أمهر المهندسين والفنيين جاهز للتركيب والصيانة وتدريب عمال مصنعك، مع توافر مستمر لجميع قطع الغيار الأصلية بمصانعنا.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link to="/products" className="btn btn-gold" style={{ padding: '16px 48px', fontSize: '1.1rem' }}>
            استكشف الماكينات الآن
          </Link>
        </div>
      </div>
    </section>
  );
}
