import React, { useState } from 'react';
import { PRODUCTS } from '../data.js';

const getWhatsAppUrl = (topic) => {
  const text = encodeURIComponent(`مرحباً فكري جروب، أريد الاستفسار عن تفاصيل وسعر: ${topic}`);
  return `https://wa.me/201011218141?text=${text}`;
};

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeFilter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <section className="section" style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">كتالوج المنتجات الرسمي</div>
          <h2 className="section-title">أسطول الماكينات والأوناش الصناعية</h2>
          <p className="section-subtitle">
            اختر الماكينة التي تناسب حجم إنتاج مصنعك، وتعرف على المواصفات القياسية لكل منتج.
          </p>
        </div>

        <div className="filter-tabs">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            جميع المنتجات ({PRODUCTS.length})
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'saws' ? 'active' : ''}`}
            onClick={() => setActiveFilter('saws')}
          >
            مناشير الرخام والجرانيت
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'polishers' ? 'active' : ''}`}
            onClick={() => setActiveFilter('polishers')}
          >
            جلايات التلميع
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'cranes' ? 'active' : ''}`}
            onClick={() => setActiveFilter('cranes')}
          >
            الأوناش الثقيلة والساحات
          </button>
        </div>

        <div className="products-grid">
          {filteredProducts.map((p) => (
            <div key={p.id} className="product-item">
              <div className="product-thumb-wrap">
                <img src={p.img} alt={p.name} className="product-thumb" width="400" height="300" loading="lazy" />
                <span className="product-category-tag">{p.categoryName}</span>
              </div>
              
              <div className="product-details">
                <h3 className="product-name">{p.name}</h3>
                <p className="product-desc">{p.desc}</p>
                
                <div className="product-specs">
                  {p.specs.slice(0, 3).map((s, idx) => (
                    <div key={idx} className="spec-item">
                      <span className="spec-label">{s.label}:</span>
                      <span className="spec-val">{s.val}</span>
                    </div>
                  ))}
                </div>

                <div className="product-actions">
                  <button 
                    onClick={() => setSelectedProduct(p)}
                    className="btn btn-outline"
                  >
                    المواصفات كاملة
                  </button>
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
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProduct(null)}>✕</button>
            
            <div style={{ borderRadius: '12px', overflow: 'hidden', height: '300px', marginBottom: '24px' }}>
              <img src={selectedProduct.img} alt={selectedProduct.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} width="600" height="300" />
            </div>

            <div className="section-badge">{selectedProduct.categoryName}</div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '14px' }}>
              {selectedProduct.name}
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '24px' }}>
              {selectedProduct.desc}
            </p>

            <h4 style={{ color: 'var(--gold-dark)', marginBottom: '12px', fontSize: '1.1rem' }}>المواصفات الفنية التفصيلية:</h4>
            <div className="product-specs" style={{ marginBottom: '28px' }}>
              {selectedProduct.specs.map((s, idx) => (
                <div key={idx} className="spec-item" style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                  <span className="spec-label">{s.label}</span>
                  <span className="spec-val">{s.val}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px' }}>
              <a 
                href={getWhatsAppUrl(selectedProduct.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold" 
                style={{ flex: 1 }}
                onClick={() => setSelectedProduct(null)}
              >
                طلب تسعير ومواصفات عبر واتساب
              </a>
              <button 
                onClick={() => setSelectedProduct(null)} 
                className="btn btn-outline"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
