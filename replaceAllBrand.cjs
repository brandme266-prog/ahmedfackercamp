const fs = require('fs');

// Replace in App.jsx
let appCode = fs.readFileSync('src/App.jsx', 'utf8');
appCode = appCode.replace(/الشركة الإسلامية/g, 'فكري جروب');
fs.writeFileSync('src/App.jsx', appCode);

// Replace in index.html
let indexCode = fs.readFileSync('index.html', 'utf8');
indexCode = indexCode.replace(/الشركة الإسلامية/g, 'فكري جروب');
fs.writeFileSync('index.html', indexCode);

// Replace in public/sitemap.xml
let sitemapCode = fs.readFileSync('public/sitemap.xml', 'utf8');
sitemapCode = sitemapCode.replace(/الشركة الإسلامية/g, 'فكري جروب');
fs.writeFileSync('public/sitemap.xml', sitemapCode);

console.log('Successfully replaced all occurrences of الشركة الإسلامية with فكري جروب across the site.');
