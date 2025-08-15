#!/usr/bin/env node

/**
 * Convert Moments SVG files to PNG format
 * 
 * This script converts the placeholder SVG mockups to PNG images
 * for production use in the Moments section.
 * 
 * Requirements:
 * - Node.js
 * - sharp package: npm install sharp
 * 
 * Usage:
 * node scripts/convert-moments-svg-to-png.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('❌ Sharp is not installed. Please run: npm install sharp');
  process.exit(1);
}

const MOMENTS_DIR = path.join(__dirname, '../public/assets/moments');
const SVG_FILES = [
  'followups.svg',
  'answers.svg', 
  'money.svg',
  'inbox.svg',
  'csuite.svg'
];

async function convertSVGToPNG() {
  console.log('🎨 Converting Moments SVG files to PNG...\n');

  for (const svgFile of SVG_FILES) {
    const svgPath = path.join(MOMENTS_DIR, svgFile);
    const pngFile = svgFile.replace('.svg', '.png');
    const pngPath = path.join(MOMENTS_DIR, pngFile);

    try {
      // Check if SVG file exists
      if (!fs.existsSync(svgPath)) {
        console.log(`⚠️  ${svgFile} not found, skipping...`);
        continue;
      }

      // Convert SVG to PNG
      await sharp(svgPath)
        .png({
          quality: 90,
          compressionLevel: 6
        })
        .resize(400, 225, {
          fit: 'contain',
          background: { r: 17, g: 18, b: 27, alpha: 1 } // #111214
        })
        .toFile(pngPath);

      console.log(`✅ ${svgFile} → ${pngFile}`);

    } catch (error) {
      console.error(`❌ Error converting ${svgFile}:`, error.message);
    }
  }

  console.log('\n🎉 Conversion complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Review the generated PNG files');
  console.log('2. Optimize images if needed');
  console.log('3. Test in the Moments component');
  console.log('4. Consider creating video versions for enhanced UX');
}

// Create directory if it doesn't exist
if (!fs.existsSync(MOMENTS_DIR)) {
  fs.mkdirSync(MOMENTS_DIR, { recursive: true });
  console.log(`📁 Created directory: ${MOMENTS_DIR}`);
}

// Run conversion
convertSVGToPNG().catch(console.error);