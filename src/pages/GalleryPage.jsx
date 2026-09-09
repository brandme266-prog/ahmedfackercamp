import React, { useState } from 'react';
import { FEKRY_GALLERY_IMAGES } from '../galleryData.js';

export default function GalleryPage() {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section className="section" style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">📸 معرض الصور والتوثيق</div>
          <h2 className="section-title">معرض صور مصانع وماكينات فكري جروب</h2>
          <p className="section-subtitle">
            صور حصرية من قلب مصانعنا توثق مراحل التصنيع والتركيب وأحدث ماكينات الرخام والجرانيت.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginTop: '40px' }}>
          {FEKRY_GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              style={{ borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', border: '1px solid var(--border)', transition: 'transform 0.2s' }}
              onClick={() => setLightboxImage(img)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
              <div style={{ padding: '14px', background: 'var(--bg-surface)' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)', marginBottom: '4px' }}>
                  {img.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {img.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          style={{ 
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
            background: 'rgba(0,0,0,0.9)', zIndex: 9999, 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', padding: '20px', cursor: 'pointer'
          }}
          onClick={() => setLightboxImage(null)}
        >
          <button 
            onClick={() => setLightboxImage(null)}
            style={{ position: 'absolute', top: '20px', left: '20px', background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', zIndex: 10 }}
          >
            ✕
          </button>
          <img 
            src={lightboxImage.url} 
            alt={lightboxImage.alt} 
            style={{ maxWidth: '90%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '8px' }}
          />
          <div style={{ color: '#fff', textAlign: 'center', marginTop: '16px', maxWidth: '600px' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '6px' }}>{lightboxImage.title}</div>
            <div style={{ fontSize: '0.9rem', color: '#ccc' }}>{lightboxImage.caption}</div>
          </div>
        </div>
      )}
    </section>
  );
}
