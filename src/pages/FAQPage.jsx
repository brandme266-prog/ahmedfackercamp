import React, { useState } from 'react';
import { FAQS } from '../data.js';

export default function FAQPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <section className="section" style={{ paddingTop: '40px' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="section-header">
          <div className="section-badge">إجابات الخبراء</div>
          <h2 className="section-title">الأسئلة الشائعة حول الماكينات والأوناش</h2>
          <p className="section-subtitle">
            إليك أهم الاستفسارات التي تهم أصحاب المصانع والمستثمرين في قطاع الرخام والجرانيت.
          </p>
        </div>

        <div className="faq-container">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                aria-expanded={openFaqIndex === index}
              >
                <span>{faq.q}</span>
                <span className="faq-icon">{openFaqIndex === index ? '−' : '+'}</span>
              </button>
              {openFaqIndex === index && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
