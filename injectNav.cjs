const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const returnToHomeCode = `  const returnToHome = () => {
    setCurrentView('home');
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };`;

const navigateToSectionCode = `
  const navigateToSection = (hash) => {
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      setCurrentView('home');
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
      }
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
`;

if (code.includes(returnToHomeCode)) {
  code = code.replace(returnToHomeCode, returnToHomeCode + '\\n' + navigateToSectionCode);
  fs.writeFileSync('src/App.jsx', code);
  console.log('Successfully injected navigateToSection.');
} else {
  console.error('Could not find returnToHome code to inject after.');
}
