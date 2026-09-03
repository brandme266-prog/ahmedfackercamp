const fs = require('fs');
const https = require('https');
const path = require('path');

const files = [
  { url: 'https://ahfekry.com/img/logo.png', name: 'logo.png' },
  { url: 'https://ahfekry.com/img/WhatsApp-Image-2025-10-20-at-10.58.32-AM.jpeg', name: 'hero-banner.jpg' },
  { url: 'https://ahfekry.com/img/500310758_548201025008210_6078741677372742104_n.jpg', name: 'eng-ahmed.jpg' },
  { url: 'https://ahfekry.com/img/prodicat/' + encodeURIComponent('ماكينه نشر الجرانيت حموله 13 اسطوانه.jpeg'), name: 'saw-13.jpg' },
  { url: 'https://ahfekry.com/img/prodicat/' + encodeURIComponent('جلايه 10 راس طولات لتلميع شرايح الرخام.jpeg'), name: 'polisher-10.jpg' },
  { url: 'https://ahfekry.com/img/prodicat/' + encodeURIComponent('ونش الزرافه – ونش العلم حموله من واحد طن لى 2 طن العربيه 4 حركه.jpeg'), name: 'crane-flag.jpg' },
  { url: 'https://ahfekry.com/img/prodicat/' + encodeURIComponent('ونش الساحه – ونش الارضيه حموله 100طن.jpeg'), name: 'crane-yard.jpg' },
  { url: 'https://ahfekry.com/img/prodicat/' + encodeURIComponent('مكينه') + '/' + encodeURIComponent('WhatsApp Image 2026-07-29 at 8.12.29 PM.jpeg'), name: 'cutter-1600.jpg' },
];

let pending = files.length;

files.forEach(file => {
  const dest = path.join(__dirname, 'public', file.name);
  const req = https.get(file.url, (res) => {
    if (res.statusCode === 200) {
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log('Saved:', file.name);
        if (--pending === 0) console.log('All downloads completed!');
      });
    } else {
      console.log('Failed', file.url, res.statusCode);
      if (--pending === 0) console.log('All downloads completed!');
    }
  });
  req.on('error', (err) => {
    console.error('Error', file.name, err.message);
    if (--pending === 0) console.log('All downloads completed!');
  });
});
