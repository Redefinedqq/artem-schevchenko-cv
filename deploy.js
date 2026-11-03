const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 [Deploy] Initiating Deployment for Artem Schevchenko Portfolio...');

const projectDir = __dirname;
const outDir = path.join(projectDir, 'out');

// Read token safely from env or uncommitted .env.deploy
let token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
const envDeployPath = path.join(projectDir, '.env.deploy');
if (!token && fs.existsSync(envDeployPath)) {
  const content = fs.readFileSync(envDeployPath, 'utf8');
  const match = content.match(/GITHUB_TOKEN=([^\r\n]+)/);
  if (match) token = match[1].trim();
}

if (!token) {
  console.warn('⚠️ Warning: No GITHUB_TOKEN found. Pushing without embedded credentials.');
}

// 1. Run build script
console.log('⚡ Step 1: Building production static bundle...');
execSync('node build.js', { stdio: 'inherit', cwd: projectDir });

if (!fs.existsSync(outDir) || !fs.existsSync(path.join(outDir, 'index.html'))) {
  console.error('❌ Build failed: out/index.html does not exist.');
  process.exit(1);
}

// 2. Resolve Git binary
const gitPaths = [
  'C:\\Program Files\\Git\\cmd\\git.exe',
  'C:\\Program Files\\Git\\bin\\git.exe',
  'git'
];
let gitCmd = 'git';
for (const p of gitPaths) {
  try {
    execSync(`"${p}" --version`, { stdio: 'ignore' });
    gitCmd = `"${p}"`;
    break;
  } catch (_) {}
}

const remoteUrl = token
  ? `https://Redefinedqq:${token}@github.com/Redefinedqq/redefinedqq.github.io.git`
  : 'https://github.com/Redefinedqq/redefinedqq.github.io.git';

// 3. Deploy out/ to GitHub Pages (main and gh-pages branches)
console.log('📦 Step 2: Preparing git deployment in out/ directory...');
const outGit = path.join(outDir, '.git');
if (fs.existsSync(outGit)) {
  fs.rmSync(outGit, { recursive: true, force: true });
}

execSync(`${gitCmd} init`, { stdio: 'inherit', cwd: outDir });
execSync(`${gitCmd} config user.name "Redefinedqq"`, { stdio: 'inherit', cwd: outDir });
execSync(`${gitCmd} config user.email "firstjoker988@gmail.com"`, { stdio: 'inherit', cwd: outDir });
execSync(`${gitCmd} checkout -b main`, { stdio: 'inherit', cwd: outDir });
execSync(`${gitCmd} add -A`, { stdio: 'inherit', cwd: outDir });

const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
const commitMsg = `deploy: Artem Schevchenko Senior Full-Stack Portfolio (${timestamp})`;
execSync(`${gitCmd} commit -m "${commitMsg}"`, { stdio: 'inherit', cwd: outDir });

console.log('🚀 Step 3: Pushing static bundle to GitHub Pages (main & gh-pages)...');
execSync(`${gitCmd} remote add origin ${remoteUrl}`, { stdio: 'inherit', cwd: outDir });
execSync(`${gitCmd} push origin main --force`, { stdio: 'inherit', cwd: outDir });
execSync(`${gitCmd} push origin HEAD:gh-pages --force`, { stdio: 'inherit', cwd: outDir });

// 4. Also commit and push source code in Redefinedqq to 'source' branch
console.log('💾 Step 4: Backing up full source code to source branch...');
const rootGit = path.join(projectDir, '.git');
if (!fs.existsSync(rootGit)) {
  execSync(`${gitCmd} init`, { stdio: 'inherit', cwd: projectDir });
  execSync(`${gitCmd} config user.name "Redefinedqq"`, { stdio: 'inherit', cwd: projectDir });
  execSync(`${gitCmd} config user.email "firstjoker988@gmail.com"`, { stdio: 'inherit', cwd: projectDir });
  execSync(`${gitCmd} remote add origin ${remoteUrl}`, { stdio: 'inherit', cwd: projectDir });
}
try {
  execSync(`${gitCmd} checkout -b source`, { stdio: 'ignore', cwd: projectDir });
} catch (_) {
  try { execSync(`${gitCmd} checkout source`, { stdio: 'ignore', cwd: projectDir }); } catch (_) {}
}

// Reset git index and commit without secrets
execSync(`${gitCmd} reset`, { stdio: 'ignore', cwd: projectDir });
execSync(`${gitCmd} add .gitignore AGENTS.md package.json tsconfig.json next.config.ts build.js deploy.js README.md app/ src/ messages/ public/`, { stdio: 'inherit', cwd: projectDir });
try {
  execSync(`${gitCmd} commit --amend -m "feat: complete JolyBell-grade monochrome senior portfolio source"`, { stdio: 'inherit', cwd: projectDir });
} catch (_) {
  try {
    execSync(`${gitCmd} commit -m "feat: complete JolyBell-grade monochrome senior portfolio source"`, { stdio: 'inherit', cwd: projectDir });
  } catch (_) {}
}

try {
  execSync(`${gitCmd} push origin source --force`, { stdio: 'inherit', cwd: projectDir });
  console.log('✅ Source code successfully pushed to branch source.');
} catch (e) {
  console.log('ℹ️ Source branch push note:', e.message);
}

console.log('\n🎉 SUCCESS! Artem Schevchenko Portfolio deployed to GitHub Pages:');
console.log('🌐 Live URL: https://redefinedqq.github.io/\n');
