const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// Find start of PRODUCTS
const productsStart = code.indexOf('const PRODUCTS = [');
// Find end of FAQS array
const faqsEnd = code.indexOf('];', code.indexOf('const FAQS = [')) + 2;

const dataCode = code.substring(productsStart, faqsEnd);

// Replace const with export const
const exportDataCode = dataCode
  .replace('const PRODUCTS', 'export const PRODUCTS')
  .replace('const ARTICLES', 'export const ARTICLES')
  .replace('const FAQS', 'export const FAQS');

fs.writeFileSync('src/data.js', exportDataCode);
console.log('Extracted data.js');

// Now remove data from App.jsx and add import
code = code.substring(0, productsStart) + 
       "import { PRODUCTS, ARTICLES, FAQS } from './data';\n" + 
       "import { Routes, Route, useNavigate, useParams, Link } from 'react-router-dom';\n\n" + 
       code.substring(faqsEnd);

// Replace routing logic
code = code.replace(
  "const [currentView, setCurrentView] = useState('home'); // 'home' | 'article'",
  "const navigate = useNavigate();\n  const isHome = window.location.pathname === '/';"
);
code = code.replace(
  "const [activeArticle, setActiveArticle] = useState(ARTICLES[0]);",
  ""
);

code = code.replace(
  /const openArticlePage = \(article\) => \{[\s\S]*?window\.scrollTo\(\{ top: 0, behavior: 'smooth' \}\);\s*\};/m,
  "const openArticlePage = (article) => { navigate(`/article/${article.id}`); window.scrollTo({ top: 0, behavior: 'smooth' }); };"
);

code = code.replace(
  /const returnToHome = \(\) => \{[\s\S]*?window\.scrollTo\(\{ top: 0, behavior: 'smooth' \}\);\s*\};/m,
  "const returnToHome = () => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); };"
);

// We must also remove the useEffect that handles popstate hash
code = code.replace(
  /\/\/ Handle Browser Back Button integration[\s\S]*?return \(\) => window\.removeEventListener\('popstate', handlePopState\);\s*\}, \[\]\);/m,
  ""
);

fs.writeFileSync('src/App.jsx', code);
console.log('App.jsx partially refactored.');
