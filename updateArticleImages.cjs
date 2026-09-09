const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// Update ARTICLES array to include image property
code = code.replace(
  "id: 'achievements',",
  "id: 'achievements',\n    image: '/saw-13.jpg',"
);

code = code.replace(
  "id: 'biography',",
  "id: 'biography',\n    image: '/eng-ahmed.jpg',"
);

code = code.replace(
  "id: 'buying-guide',",
  "id: 'buying-guide',\n    image: '/crane-yard.jpg',"
);

code = code.replace(
  "id: 'maintenance-tips',",
  "id: 'maintenance-tips',\n    image: '/machine1.jpg',"
);

code = code.replace(
  "id: 'best-marble-machines-company',",
  "id: 'best-marble-machines-company',\n    image: '/polisher-10.jpg',"
);

// Replace hardcoded image in ArticleView featured image
code = code.replace(
  '<img src="/hero-banner.jpg" alt={activeArticle.title} />',
  '<img src={activeArticle.image || "/hero-banner.jpg"} alt={activeArticle.title} />'
);

// Replace hardcoded image in article card in the list
code = code.replace(
  '<span className="article-tag">{article.categoryName}</span>',
  '<img src={article.image || "/hero-banner.jpg"} alt={article.title} style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "12px 12px 0 0", marginBottom: "16px"}} />\n                      <span className="article-tag">{article.categoryName}</span>'
);

fs.writeFileSync('src/App.jsx', code);
console.log('Article images updated.');
