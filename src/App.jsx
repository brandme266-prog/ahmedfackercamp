import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppWidget from './components/WhatsAppWidget.jsx';
import MobileActionBar from './components/MobileActionBar.jsx';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const ProductsPage = lazy(() => import('./pages/ProductsPage.jsx'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const GalleryPage = lazy(() => import('./pages/GalleryPage.jsx'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage.jsx'));
const ArticlePage = lazy(() => import('./pages/ArticlePage.jsx'));
const FAQPage = lazy(() => import('./pages/FAQPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div style={{ width: '40px', height: '40px', border: '4px solid #1e293b', borderTopColor: 'var(--gold)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />

      <main id="main-content">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <WhatsAppWidget />
      <MobileActionBar />
    </div>
  );
}
