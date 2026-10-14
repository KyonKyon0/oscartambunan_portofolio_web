module.exports = {
  apps: [
    {
      name: 'oscartambunan-portfolio',
      script: '.next/standalone/server.js',
      cwd: '/www/wwwroot/oscartambunan_portofolio_web',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '768M',
      kill_timeout: 10000,
      listen_timeout: 10000,
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOSTNAME: '127.0.0.1',
        NEXT_TELEMETRY_DISABLED: '1',
      },
    },
  ],
};
