const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public');
const outputDir = path.join(__dirname, 'public/images/compressed2');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const files = ['crane.jpg','machine1.jpg','machine2.jpg','hero-bg.jpg','hero-banner.jpg','logo.png','crane-yard.jpg','eng-ahmed.jpg','polisher-10.jpg','crane-flag.jpg','saw-13.jpg','cutter-1600.jpg'];

async function compress() {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const ext = path.extname(file);
    const name = path.basename(file, ext);
    const outputPath = path.join(outputDir, name + (ext === '.png' ? '.png' : '.jpg'));
    
    try {
      const img = sharp(inputPath);
      if (ext === '.png') {
        await img.resize(1200, null, { withoutEnlargement: true }).png({ quality: 80, compressionLevel: 9 }).toFile(outputPath);
      } else {
        await img.resize(1200, null, { withoutEnlargement: true }).jpeg({ quality: 70, progressive: true }).toFile(outputPath);
      }
      const origSize = fs.statSync(inputPath).size;
      const newSize = fs.statSync(outputPath).size;
      console.log(`✓ ${file}: ${Math.round(origSize/1024)}KB → ${Math.round(newSize/1024)}KB (-${Math.round((1-newSize/origSize)*100)}%)`);
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
    }
  }
}

compress();
