const sharp = require('sharp');
const fs = require('fs/promises');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

async function optimizeImages() {
  try {
    const files = await fs.readdir(IMAGES_DIR);
    const imageFiles = files.filter(file => /\.(png|jpe?g)$/i.test(file));
    
    console.log(`Found ${imageFiles.length} images to process in ${IMAGES_DIR}...`);

    for (const file of imageFiles) {
      const filePath = path.join(IMAGES_DIR, file);
      const fileExt = path.extname(file).toLowerCase();
      const originalStats = await fs.stat(filePath);
      
      console.log(`Processing ${file} (${(originalStats.size / 1024).toFixed(2)} KB)...`);

      const fileBuffer = await fs.readFile(filePath);
      let pipeline = sharp(fileBuffer);
      let processOriginal = false;

      // 1. Optimize the original file
      if (fileExt === '.png') {
        // PNG compression (lossless-ish but optimized)
        pipeline = pipeline.png({ quality: 80, compressionLevel: 9, palette: true });
        processOriginal = true;
      } else if (fileExt === '.jpg' || fileExt === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
        processOriginal = true;
      }

      if (processOriginal) {
        const optimizedBuffer = await pipeline.toBuffer();
        
        // Only overwrite if smaller
        if (optimizedBuffer.length < originalStats.size) {
           await fs.writeFile(filePath, optimizedBuffer);
           const saved = originalStats.size - optimizedBuffer.length;
           const savedPercent = ((saved / originalStats.size) * 100).toFixed(2);
           console.log(`  ✅ Optimized original: ${(optimizedBuffer.length / 1024).toFixed(2)} KB (Saved ${savedPercent}%)`);
        } else {
           console.log(`  ℹ️ Original was already optimized enough.`);
        }
      }

      // 2. Create WebP version (highly recommended for web)
      const webpPath = filePath.replace(/\.(png|jpe?g)$/i, '.webp');
      const webpBuffer = await sharp(fileBuffer)
        .webp({ quality: 75 })
        .toBuffer();
        
      await fs.writeFile(webpPath, webpBuffer);
      console.log(`  ✨ Created WebP: ${path.basename(webpPath)} (${(webpBuffer.length / 1024).toFixed(2)} KB)`);
    }

  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
