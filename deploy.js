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

// 1. Run build script
console.log('⚡ Step 1: Building production static bundle with basePath /artem-schevchenko-cv...');
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

const targetRepoUrl = token
  ? `https://Redefinedqq:${token}@github.com/Redefinedqq/artem-schevchenko-cv.git`
  : 'https://github.com/Redefinedqq/artem-schevchenko-cv.git';

const rootRepoUrl = token
  ? `https://Redefinedqq:${token}@github.com/Redefinedqq/redefinedqq.github.io.git`
  : 'https://github.com/Redefinedqq/redefinedqq.github.io.git';

// 3. Deploy out/ to artem-schevchenko-cv repository (main and gh-pages)
console.log('📦 Step 2: Preparing git deployment in out/ for artem-schevchenko-cv...');
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

console.log('🚀 Step 3: Pushing bundle to artem-schevchenko-cv (main & gh-pages)...');
execSync(`${gitCmd} remote add origin ${targetRepoUrl}`, { stdio: 'inherit', cwd: outDir });
execSync(`${gitCmd} push origin main --force`, { stdio: 'inherit', cwd: outDir });
execSync(`${gitCmd} push origin HEAD:gh-pages --force`, { stdio: 'inherit', cwd: outDir });

// 4. Update root redefinedqq.github.io repo with a redirect to /artem-schevchenko-cv/
console.log('🔄 Step 4: Updating root domain redirect on redefinedqq.github.io...');
const redirectDir = path.join(projectDir, '.redirect_temp');
if (fs.existsSync(redirectDir)) {
  fs.rmSync(redirectDir, { recursive: true, force: true });
}
fs.mkdirSync(redirectDir, { recursive: true });

const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=https://redefinedqq.github.io/artem-schevchenko-cv/">
  <link rel="canonical" href="https://redefinedqq.github.io/artem-schevchenko-cv/">
  <title>Redirecting to Artem Schevchenko CV...</title>
</head>
<body style="background:#060606;color:#ffffff;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;">
  <p>Redirecting to <a href="https://redefinedqq.github.io/artem-schevchenko-cv/" style="color:#ffffff;">https://redefinedqq.github.io/artem-schevchenko-cv/</a>...</p>
  <script>window.location.replace("https://redefinedqq.github.io/artem-schevchenko-cv/");</script>
</body>
</html>`;
fs.writeFileSync(path.join(redirectDir, 'index.html'), redirectHtml, 'utf8');
fs.writeFileSync(path.join(redirectDir, '.nojekyll'), '', 'utf8');

execSync(`${gitCmd} init`, { stdio: 'inherit', cwd: redirectDir });
execSync(`${gitCmd} config user.name "Redefinedqq"`, { stdio: 'inherit', cwd: redirectDir });
execSync(`${gitCmd} config user.email "firstjoker988@gmail.com"`, { stdio: 'inherit', cwd: redirectDir });
execSync(`${gitCmd} checkout -b main`, { stdio: 'inherit', cwd: redirectDir });
execSync(`${gitCmd} add -A`, { stdio: 'inherit', cwd: redirectDir });
execSync(`${gitCmd} commit -m "chore: redirect root to /artem-schevchenko-cv/"`, { stdio: 'inherit', cwd: redirectDir });
execSync(`${gitCmd} remote add origin ${rootRepoUrl}`, { stdio: 'inherit', cwd: redirectDir });
try {
  execSync(`${gitCmd} push origin main --force`, { stdio: 'inherit', cwd: redirectDir });
  execSync(`${gitCmd} push origin HEAD:gh-pages --force`, { stdio: 'inherit', cwd: redirectDir });
  console.log('✅ Root redirect successfully pushed to redefinedqq.github.io');
} catch (e) {
  console.log('ℹ️ Root redirect note:', e.message);
}
fs.rmSync(redirectDir, { recursive: true, force: true });

// 5. Back up source code to artem-schevchenko-cv 'source' branch
console.log('💾 Step 5: Backing up source code to artem-schevchenko-cv (source branch)...');
const rootGit = path.join(projectDir, '.git');
if (fs.existsSync(rootGit)) {
  execSync(`${gitCmd} remote set-url origin ${targetRepoUrl}`, { stdio: 'inherit', cwd: projectDir });
} else {
  execSync(`${gitCmd} init`, { stdio: 'inherit', cwd: projectDir });
  execSync(`${gitCmd} config user.name "Redefinedqq"`, { stdio: 'inherit', cwd: projectDir });
  execSync(`${gitCmd} config user.email "firstjoker988@gmail.com"`, { stdio: 'inherit', cwd: projectDir });
  execSync(`${gitCmd} remote add origin ${targetRepoUrl}`, { stdio: 'inherit', cwd: projectDir });
}
try {
  execSync(`${gitCmd} checkout -b source`, { stdio: 'ignore', cwd: projectDir });
} catch (_) {
  try { execSync(`${gitCmd} checkout source`, { stdio: 'ignore', cwd: projectDir }); } catch (_) {}
}

execSync(`${gitCmd} reset`, { stdio: 'ignore', cwd: projectDir });
execSync(`${gitCmd} add .gitignore AGENTS.md package.json tsconfig.json next.config.ts build.js deploy.js README.md app/ src/ messages/ public/`, { stdio: 'inherit', cwd: projectDir });
try {
  execSync(`${gitCmd} commit -m "feat: updated branding, 1px alignment, centered badges, and artem-schevchenko-cv URL"`, { stdio: 'inherit', cwd: projectDir });
} catch (_) {}

try {
  execSync(`${gitCmd} push origin source --force`, { stdio: 'inherit', cwd: projectDir });
  console.log('✅ Source code pushed to artem-schevchenko-cv (source branch).');
} catch (e) {
  console.log('ℹ️ Source branch note:', e.message);
}

console.log('\n🎉 ALL DEPLOYS COMPLETED!');
console.log('🌐 Primary URL: https://redefinedqq.github.io/artem-schevchenko-cv/');
console.log('🌐 Root URL:    https://redefinedqq.github.io/\n');
