const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// Add navigateToSection function
const returnToHomeFunc = `  const returnToHome = () => {
    setCurrentView('home');
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };`;

const navigateToSectionFunc = `
  const navigateToSection = (hash) => {
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      setCurrentView('home');
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
      }
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };
`;

code = code.replace(returnToHomeFunc, returnToHomeFunc + navigateToSectionFunc);

// Update Desktop Menu
code = code.replace(
  `<li><a href="#features" onClick={() => { if(currentView !== 'home') returnToHome(); }} className="nav-link">مميزاتنا</a></li>`,
  `<li><a href="#features" onClick={(e) => { e.preventDefault(); navigateToSection('#features'); }} className="nav-link">مميزاتنا</a></li>`
);
code = code.replace(
  `<li><a href="#products" onClick={() => { if(currentView !== 'home') returnToHome(); }} className="nav-link">الماكينات</a></li>`,
  `<li><a href="#products" onClick={(e) => { e.preventDefault(); navigateToSection('#products'); }} className="nav-link">الماكينات</a></li>`
);
code = code.replace(
  `<li><a href="#about" onClick={() => { if(currentView !== 'home') returnToHome(); }} className="nav-link">الشركة الإسلامية</a></li>`,
  `<li><a href="#about" onClick={(e) => { e.preventDefault(); navigateToSection('#about'); }} className="nav-link">الشركة الإسلامية</a></li>`
);
code = code.replace(
  `<li><a href="#articles" onClick={() => { if(currentView !== 'home') returnToHome(); }} className="nav-link">المقالات والأخبار</a></li>`,
  `<li><a href="#articles" onClick={(e) => { e.preventDefault(); navigateToSection('#articles'); }} className="nav-link">المقالات والأخبار</a></li>`
);
code = code.replace(
  `<li><a href="#faq" onClick={() => { if(currentView !== 'home') returnToHome(); }} className="nav-link">الأسئلة الشائعة</a></li>`,
  `<li><a href="#faq" onClick={(e) => { e.preventDefault(); navigateToSection('#faq'); }} className="nav-link">الأسئلة الشائعة</a></li>`
);
code = code.replace(
  `<li><a href="#contact" onClick={() => { if(currentView !== 'home') returnToHome(); }} className="nav-link">فروعنا وتواصل</a></li>`,
  `<li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateToSection('#contact'); }} className="nav-link">فروعنا وتواصل</a></li>`
);


// Update Mobile Menu
code = code.replace(
  `<a href="#features" className="drawer-link" onClick={() => { if(currentView !== 'home') returnToHome(); setMobileMenuOpen(false); }}>`,
  `<a href="#features" className="drawer-link" onClick={(e) => { e.preventDefault(); navigateToSection('#features'); }}>`
);
code = code.replace(
  `<a href="#products" className="drawer-link" onClick={() => { if(currentView !== 'home') returnToHome(); setMobileMenuOpen(false); }}>`,
  `<a href="#products" className="drawer-link" onClick={(e) => { e.preventDefault(); navigateToSection('#products'); }}>`
);
code = code.replace(
  `<a href="#about" className="drawer-link" onClick={() => { if(currentView !== 'home') returnToHome(); setMobileMenuOpen(false); }}>`,
  `<a href="#about" className="drawer-link" onClick={(e) => { e.preventDefault(); navigateToSection('#about'); }}>`
);
code = code.replace(
  `<a href="#articles" className="drawer-link" onClick={() => { if(currentView !== 'home') returnToHome(); setMobileMenuOpen(false); }}>`,
  `<a href="#articles" className="drawer-link" onClick={(e) => { e.preventDefault(); navigateToSection('#articles'); }}>`
);
code = code.replace(
  `<a href="#faq" className="drawer-link" onClick={() => { if(currentView !== 'home') returnToHome(); setMobileMenuOpen(false); }}>`,
  `<a href="#faq" className="drawer-link" onClick={(e) => { e.preventDefault(); navigateToSection('#faq'); }}>`
);
code = code.replace(
  `<a href="#contact" className="drawer-link" onClick={() => { if(currentView !== 'home') returnToHome(); setMobileMenuOpen(false); }}>`,
  `<a href="#contact" className="drawer-link" onClick={(e) => { e.preventDefault(); navigateToSection('#contact'); }}>`
);


// Update Footer Links
code = code.replace(
  `<li><a href="#features" onClick={() => { if(currentView !== 'home') returnToHome(); }}>مميزات الصناعة</a></li>`,
  `<li><a href="#features" onClick={(e) => { e.preventDefault(); navigateToSection('#features'); }}>مميزات الصناعة</a></li>`
);
code = code.replace(
  /<li><a href="#products" onClick=\{\(\) => \{ if\(currentView !== 'home'\) returnToHome\(\); \}\}>/g,
  `<li><a href="#products" onClick={(e) => { e.preventDefault(); navigateToSection('#products'); }}>`
);
code = code.replace(
  `<li><a href="#articles" onClick={() => { if(currentView !== 'home') returnToHome(); }}>المقالات ودراسات الجدوى</a></li>`,
  `<li><a href="#articles" onClick={(e) => { e.preventDefault(); navigateToSection('#articles'); }}>المقالات ودراسات الجدوى</a></li>`
);
code = code.replace(
  `<li><a href="#faq" onClick={() => { if(currentView !== 'home') returnToHome(); }}>الأسئلة الشائعة</a></li>`,
  `<li><a href="#faq" onClick={(e) => { e.preventDefault(); navigateToSection('#faq'); }}>الأسئلة الشائعة</a></li>`
);
code = code.replace(
  `<li><a href="#about" onClick={() => { if(currentView !== 'home') returnToHome(); }}>عن الشركة الإسلامية</a></li>`,
  `<li><a href="#about" onClick={(e) => { e.preventDefault(); navigateToSection('#about'); }}>عن الشركة الإسلامية</a></li>`
);
code = code.replace(
  `<li><a href="#contact" onClick={() => { if(currentView !== 'home') returnToHome(); }}>طلب عرض سعر</a></li>`,
  `<li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateToSection('#contact'); }}>طلب عرض سعر</a></li>`
);

fs.writeFileSync('src/App.jsx', code);
console.log('Navigation issues fixed successfully.');
