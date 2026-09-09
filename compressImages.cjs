const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public/images/ahmed-fekry');
const outputDir = path.join(__dirname, 'public/images/compressed');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

async function compressImages() {
  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.jpg'));
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    
    try {
      await sharp(inputPath)
        .resize(1200, null, { withoutEnlargement: true })
        .jpeg({ quality: 70, progressive: true })
        .toFile(outputPath);
      
      const origSize = fs.statSync(inputPath).size;
      const newSize = fs.statSync(outputPath).size;
      const saved = Math.round((1 - newSize/origSize) * 100);
      console.log(`✓ ${file}: ${Math.round(origSize/1024)}KB → ${Math.round(newSize/1024)}KB (-${saved}%)`);
    } catch (err) {
      console.error(`✗ Failed: ${file}`, err.message);
    }
  }
}

compressImages();
