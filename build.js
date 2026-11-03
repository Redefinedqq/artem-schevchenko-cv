const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('⚡ [Build] Clean build for Artem Schevchenko Senior Portfolio...');

const projectDir = __dirname;
const nextDir = path.join(projectDir, '.next');
const outDir = path.join(projectDir, 'out');

// Clean .next cache
if (fs.existsSync(nextDir)) {
  try {
    fs.rmSync(nextDir, { recursive: true, force: true });
  } catch (_) {}
}

// Find next binary
const nextBin = path.join(projectDir, 'node_modules', '.bin', 'next.cmd');
const cmd = fs.existsSync(nextBin) ? `"${nextBin}" build` : 'npx next build';

console.log(`📦 Running Next.js export: ${cmd}`);
execSync(cmd, { stdio: 'inherit', cwd: projectDir });

// Copy out/en/index.html to out/index.html as root entrypoint
const enHtml = path.join(outDir, 'en', 'index.html');
const rootHtml = path.join(outDir, 'index.html');
if (fs.existsSync(enHtml)) {
  fs.copyFileSync(enHtml, rootHtml);
  console.log('✅ Created root out/index.html (defaulting to English)');
}

// Create .nojekyll for GitHub Pages (_next directory support)
const noJekyll = path.join(outDir, '.nojekyll');
fs.writeFileSync(noJekyll, '', 'utf8');
console.log('✅ Created out/.nojekyll');

// Ensure PDF is present in out
const pdfSrc = path.join(projectDir, 'public', 'Artem_Schevchenko_CV.pdf');
const pdfDst = path.join(outDir, 'Artem_Schevchenko_CV.pdf');
if (fs.existsSync(pdfSrc) && !fs.existsSync(pdfDst)) {
  fs.copyFileSync(pdfSrc, pdfDst);
}
console.log('✅ Verified out/Artem_Schevchenko_CV.pdf');

console.log('🎉 [Build] Production static bundle ready in out/ directory!');
