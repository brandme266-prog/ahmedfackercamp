const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function resize(src, w, h, q) {
  const buf = fs.readFileSync(src);
  const m = await sharp(buf).metadata();
  const result = await sharp(buf)
    .resize({ width: w, height: h, fit: 'cover', position: 'centre' })
    .webp({ quality: q || 50 })
    .toBuffer();
  fs.writeFileSync(src, result);
  console.log(path.basename(src) + ': ' + m.width + 'x' + m.height + ' -> ' + w + 'x' + h + ' (' + Math.round(result.length/1024) + 'KB)');
}

(async () => {
  const pub = 'F:/ahmedfkrecambany/public';
  const imgDir = path.join(pub, 'images/ahmed-fekry');

  // All article images to 600x800 (3:4 ratio) - crop to fit
  for (const f of fs.readdirSync(imgDir).filter(f => f.endsWith('.webp'))) {
    await resize(path.join(imgDir, f), 600, 800, 50);
  }

  // saw-13.webp: displayed at ~417x336 container, resize to 500x400
  await resize(path.join(pub, 'saw-13.webp'), 500, 400, 50);

  // polisher-10.webp: displayed at ~462x260, resize to 960x540 (16:9)
  await resize(path.join(pub, 'polisher-10.webp'), 960, 540, 45);

  // hero-banner.webp: keep large, recompress harder
  await resize(path.join(pub, 'hero-banner.webp'), 800, 1000, 45);

  // logo.webp: tiny
  await resize(path.join(pub, 'logo.webp'), 100, 50, 70);

  console.log('Done!');
})().catch(e => console.error(e));
