const fs = require('fs');

let appJsx = fs.readFileSync('src/App.jsx', 'utf8');

appJsx = appJsx.replace(/ماكينة فكري/g, 'ماكينة الشركة الإسلامية');
appJsx = appJsx.replace(/الشركة الإسلامية \(الشركة الإسلامية\)/g, 'الشركة الإسلامية');
appJsx = appJsx.replace(/الشركة الإسلامية - الشركة الإسلامية/g, 'الشركة الإسلامية لصناعة ماكينات الرخام والجرانيت والأوناش');
appJsx = appJsx.replace(/الشركة الإسلامية - الشركة الإسلامية/g, 'الشركة الإسلامية');

fs.writeFileSync('src/App.jsx', appJsx, 'utf8');

let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(/الشركة الإسلامية لماكينات الرخام/g, 'الشركة الإسلامية لصناعة ماكينات الرخام والجرانيت والأوناش');
indexHtml = indexHtml.replace(/الشركة الإسلامية \| رائد صناعة ماكينات/g, 'الشركة الإسلامية لصناعة ماكينات الرخام والجرانيت والأوناش | رائد صناعة ماكينات');

fs.writeFileSync('index.html', indexHtml, 'utf8');

console.log("Replaced instances.");
