const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// Replace in navbar/topbar/mobile drawer
code = code.replace(
  '<span className="brand-title">الشركة الإسلامية</span>',
  '<span className="brand-title">فكري جروب</span>'
);

code = code.replace(
  '<img src="/logo.png" alt="الشركة الإسلامية - الشركة الإسلامية" />',
  '<img src="/logo.png" alt="فكري جروب - صناعة ماكينات الرخام والجرانيت" />'
);

code = code.replace(
  '<img src="/logo.png" alt="لوجو الشركة الإسلامية" style={{ height: \'40px\' }} />',
  '<img src="/logo.png" alt="لوجو فكري جروب" style={{ height: \'40px\' }} />'
);

code = code.replace(
  '<div style={{ fontWeight: \'800\', color: \'var(--text-main)\', fontSize: \'1.1rem\' }}>الشركة الإسلامية</div>',
  '<div style={{ fontWeight: \'800\', color: \'var(--text-main)\', fontSize: \'1.1rem\' }}>فكري جروب</div>'
);

code = code.replace(
  '<div style={{ fontSize: \'0.75rem\', color: \'var(--gold-dark)\' }}>الشركة الإسلامية</div>',
  '<div style={{ fontSize: \'0.75rem\', color: \'var(--gold-dark)\' }}>لصناعة معدات الرخام</div>'
);

fs.writeFileSync('src/App.jsx', code);
console.log('Brand name replaced successfully.');
