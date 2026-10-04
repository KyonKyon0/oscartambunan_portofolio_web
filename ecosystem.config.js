// PM2 ecosystem config for aaPanel Node.js Project Manager
// Usage: pm2 start ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'oscartambunan-portfolio',
      script: 'node',
      args: '.next/standalone/server.js',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOSTNAME: '0.0.0.0',
        NEXT_TELEMETRY_DISABLED: '1',
      },
    },
  ],
};
