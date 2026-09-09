const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'public'),
  path.join(__dirname, 'public/images/ahmed-fekry')
];

async function convertAll() {
  for (const dir of dirs) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
    for (const file of files) {
      const inputPath = path.join(dir, file);
      const outName = file.replace(/\.(jpg|png)$/, '.webp');
      const outputPath = path.join(dir, outName);
      
      if (fs.existsSync(outputPath)) continue;
      
      try {
        await sharp(inputPath).webp({ quality: 78 }).toFile(outputPath);
        const origSize = fs.statSync(inputPath).size;
        const newSize = fs.statSync(outputPath).size;
        console.log(`✓ ${file} → ${outName}: ${Math.round(origSize/1024)}KB → ${Math.round(newSize/1024)}KB (-${Math.round((1-newSize/origSize)*100)}%)`);
      } catch (err) {
        console.error(`✗ ${file}: ${err.message}`);
      }
    }
  }
}

convertAll();
