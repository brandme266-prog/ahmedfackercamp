import React, { useState } from 'react';
import { PRODUCTS } from '../data.js';

export default function ContactPage() {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    factory: '',
    machine: 'ماكينة نشر الجرانيت 13 أسطوانة',
    notes: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = `طلب عرض سعر جديد:\n- الاسم: ${quoteForm.name}\n- الهاتف: ${quoteForm.phone}\n- المصنع / المحافظة: ${quoteForm.factory}\n- الماكينة المطلوبة: ${quoteForm.machine}\n- ملاحظات: ${quoteForm.notes}`;
    window.open(`https://wa.me/201011218141?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="section" style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">تواصل معنا والزيارات</div>
          <h2 className="section-title">فروعنا ومصانعنا في خدمتك دائماً</h2>
          <p className="section-subtitle">
            تفضل بزيارة مصانعنا ومعاينة الماكينات أثناء التشغيل الفعلي، أو اطلب عرض سعر مخصص وسنتواصل معك فوراً.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '28px', color: 'var(--text-main)' }}>
              المقر الرئيسي والمصانع
            </h3>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <div>
                  <div className="contact-info-title">الإدارة والمبيعات (القاهرة)</div>
                  <div className="contact-info-text">شق التعبان، أبراج الأمل، برج 99 - طره، القاهرة</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-4L7.11 16.63 4.5 12 2 13.5l4 7 11-16.5H19z"/></svg>
                </div>
                <div>
                  <div className="contact-info-title">مصانع الإنتاج والورش الثقيلة</div>
                  <div className="contact-info-text">
                    <strong>المصنع الأول:</strong> عرب أبو ساعد - حلوان<br />
                    <strong>المصنع الثاني:</strong> محافظة المنصورة
                  </div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
                </div>
                <div>
                  <div className="contact-info-title">أرقام التواصل المباشر</div>
                  <div className="contact-info-text">
                    <strong style={{ color: 'var(--gold-dark)' }}>01011218141</strong> | <strong>01001163633</strong> | <strong>01090080915</strong>
                  </div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div>
                  <div className="contact-info-title">البريد الإلكتروني المعتمد</div>
                  <div className="contact-info-text">ic.marblemachines@hotmail.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-main)' }}>
              طلب استشارة أو عرض سعر فوري
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
              املأ البيانات وسيتم توجيه طلبك مباشرة إلى واتساب الإدارة الهندسية مع تسجيل الأولوية لمصنعك.
            </p>

            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="form-label">الاسم بالكامل / اسم المصنع</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="مثال: مصنع الأمل للرخام" 
                  required 
                  value={quoteForm.name}
                  onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label className="form-label">رقم الهاتف أو الواتساب</label>
                <input 
                  type="tel" 
                  className="form-input" 
                  placeholder="010XXXXXXXX" 
                  required 
                  value={quoteForm.phone}
                  onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label className="form-label">مكان المصنع / المحافظة</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="مثال: شق التعبان، المنيا، السويس..." 
                  required 
                  value={quoteForm.factory}
                  onChange={(e) => setQuoteForm({...quoteForm, factory: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label className="form-label">الماكينة أو الونش المطلوب</label>
                <select 
                  className="form-select"
                  value={quoteForm.machine}
                  onChange={(e) => setQuoteForm({...quoteForm, machine: e.target.value})}
                >
                  {PRODUCTS.map(p => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                  <option value="تجهيز مصنع رخام كامل">تجهيز مصنع رخام متكامل</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">ملاحظات أو مواصفات خاصة (اختياري)</label>
                <textarea 
                  className="form-textarea" 
                  rows="3" 
                  placeholder="اكتب أي متطلبات خاصة بالحمولة، أبعاد القص، أو موعد التوريد..."
                  value={quoteForm.notes}
                  onChange={(e) => setQuoteForm({...quoteForm, notes: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '16px' }}>
                إرسال الطلب فوراً للمبيعات
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
