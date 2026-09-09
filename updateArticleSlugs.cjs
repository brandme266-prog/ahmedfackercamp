const fs = require('fs');

// 1. Update App.jsx
let code = fs.readFileSync('src/App.jsx', 'utf8');

// Replace IDs
code = code.replace("id: 'achievements',", "id: 'ابتكار-نظام-حمام-الزيت',");
code = code.replace("id: 'biography',", "id: 'تاريخ-الشركة',");
code = code.replace("id: 'buying-guide',", "id: 'دليل-المستثمر',");
code = code.replace("id: 'maintenance-tips',", "id: 'أسرار-الصيانة',");
code = code.replace("id: 'best-marble-machines-company',", "id: 'أفضل-شركة-تجهيز-مصانع',");

// Update URL parser to use decodeURIComponent
code = code.replace(
  "const articleId = path.replace('/article/', '');",
  "const articleId = decodeURIComponent(path.replace('/article/', ''));"
);

fs.writeFileSync('src/App.jsx', code);
console.log('App.jsx updated with Arabic slugs.');

// 2. Update sitemap.xml
let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');

sitemap = sitemap.replace(
  "<loc>https://fekrycompany.com/article/achievements</loc>",
  `<loc>https://fekrycompany.com/article/${encodeURIComponent('ابتكار-نظام-حمام-الزيت')}</loc>`
);

sitemap = sitemap.replace(
  "<loc>https://fekrycompany.com/article/biography</loc>",
  `<loc>https://fekrycompany.com/article/${encodeURIComponent('تاريخ-الشركة')}</loc>`
);

sitemap = sitemap.replace(
  "<loc>https://fekrycompany.com/article/buying-guide</loc>",
  `<loc>https://fekrycompany.com/article/${encodeURIComponent('دليل-المستثمر')}</loc>`
);

sitemap = sitemap.replace(
  "<loc>https://fekrycompany.com/article/maintenance-tips</loc>",
  `<loc>https://fekrycompany.com/article/${encodeURIComponent('أسرار-الصيانة')}</loc>`
);

sitemap = sitemap.replace(
  "<loc>https://fekrycompany.com/article/best-marble-machines-company</loc>",
  `<loc>https://fekrycompany.com/article/${encodeURIComponent('أفضل-شركة-تجهيز-مصانع')}</loc>`
);

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('sitemap.xml updated with Arabic slugs.');
