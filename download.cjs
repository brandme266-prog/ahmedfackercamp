const fs = require('fs');
const https = require('https');
const path = require('path');

const files = [
  { url: 'https://ahfekry.com/img/WhatsApp-Image-2025-10-20-at-10.58.32-AM.jpeg', name: 'hero-bg.jpg' },
  { url: 'https://ahfekry.com/img/prodicat/' + encodeURIComponent('جلايه 10 راس طولات لتلميع شرايح الرخام.jpeg'), name: 'machine1.jpg' },
  { url: 'https://ahfekry.com/img/prodicat/' + encodeURIComponent('ونش الزرافه – ونش العلم حموله من واحد طن لى 2 طن العربيه 4 حركه.jpeg'), name: 'crane.jpg' },
  { url: 'https://ahfekry.com/img/prodicat/' + encodeURIComponent('مكينه') + '/' + encodeURIComponent('WhatsApp Image 2026-07-29 at 8.12.29 PM.jpeg'), name: 'machine2.jpg' },
];

files.forEach(file => {
  const dest = path.join(__dirname, 'public', file.name);
  https.get(file.url, (response) => {
    if (response.statusCode === 200) {
      const fileStream = fs.createWriteStream(dest);
      response.pipe(fileStream);
      fileStream.on('finish', () => console.log('Downloaded', file.name));
    } else {
      console.log('Failed to download', file.url, response.statusCode);
    }
  }).on('error', err => {
    console.error('Error downloading', file.url, err);
  });
});
