import React from 'react';

export default function WhatsAppWidget() {
  const text = encodeURIComponent('مرحباً فكري جروب، أريد الاستفسار عن تفاصيل وسعر ماكينات الرخام والأوناش');
  const url = `https://wa.me/201011218141?text=${text}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-widget"
      title="تحدث مع فكري جروب عبر واتساب"
      aria-label="تواصل فوري عبر واتساب"
    >
      <div className="whatsapp-icon-circle">
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
        <span className="online-indicator"></span>
      </div>
      <div className="whatsapp-text-content">
        <span className="whatsapp-badge-status">متاح الآن للاستفسارات</span>
        <span className="whatsapp-badge-title">واتساب فكري جروب</span>
      </div>
    </a>
  );
}
