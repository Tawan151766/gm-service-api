const fs = require('fs');
const path = require('path');

console.log('🚀 Building project for HostAtom deployment...');

// 1. Build TypeScript
console.log('📦 Building TypeScript...');
const { execSync } = require('child_process');

try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ TypeScript build completed');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// 2. Copy production package.json
console.log('📋 Copying production package.json...');
fs.copyFileSync('deploy-package.json', 'dist/package.json');

// 3. Copy environment files
console.log('🔧 Copying environment files...');
if (fs.existsSync('.env.production')) {
  fs.copyFileSync('.env.production', 'dist/.env');
}

// 4. Copy ecosystem config
console.log('⚙️ Copying PM2 config...');
fs.copyFileSync('ecosystem.config.js', 'dist/ecosystem.config.js');

// 5. Create logs directory
console.log('📁 Creating logs directory...');
const logsDir = path.join('dist', 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

console.log('✅ Build completed! Ready for HostAtom deployment');
console.log('📂 Upload the "dist" folder to your HostAtom hosting');
console.log('🔧 Don\'t forget to:');
console.log('   1. Update database credentials in .env');
console.log('   2. Run "npm install" in the dist folder');
console.log('   3. Run migrations if needed');
console.log('   4. Start with PM2: pm2 start ecosystem.config.js --env production');