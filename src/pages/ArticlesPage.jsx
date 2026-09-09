import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../data.js';

export default function ArticlesPage() {
  const [activeArticleFilter, setActiveArticleFilter] = useState('all');

  const filteredArticles = activeArticleFilter === 'all'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeArticleFilter);

  return (
    <section className="section" style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">دليل صناعة وتطوير ماكينات الرخام والجرانيت</h2>
          <p className="section-subtitle">
            مقالات حصرية ودراسات فنية يقدمها فكري جروب لمساعدة أصحاب المصانع على مضاعفة الإنتاج وخفض تكاليف التشغيل.
          </p>
        </div>

        <div className="filter-tabs">
          <button 
            className={`filter-btn ${activeArticleFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveArticleFilter('all')}
          >
            جميع المقالات ({ARTICLES.length})
          </button>
          <button 
            className={`filter-btn ${activeArticleFilter === 'history' ? 'active' : ''}`}
            onClick={() => setActiveArticleFilter('history')}
          >
            إنجازات وريادة
          </button>
          <button 
            className={`filter-btn ${activeArticleFilter === 'bio' ? 'active' : ''}`}
            onClick={() => setActiveArticleFilter('bio')}
          >
            السيرة الذاتية
          </button>
          <button 
            className={`filter-btn ${activeArticleFilter === 'guide' ? 'active' : ''}`}
            onClick={() => setActiveArticleFilter('guide')}
          >
            دليل الشراء والصيانة
          </button>
        </div>

        <div className="articles-grid">
          {filteredArticles.map((article) => (
            <article key={article.id} className="article-card">
              <div className="article-card-image-wrap">
                <img src={article.image || "/hero-banner.jpg"} alt={article.title} loading="lazy" width="400" height="250" />
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
      </div>
    </section>
  );
}
