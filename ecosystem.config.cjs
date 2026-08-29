module.exports = {
  apps: [{
    name: 'resources',
    script: 'npx',
    args: 'vite preview --host 0.0.0.0 --port 3000 --strictPort',
    cwd: '/home/user/webapp',
    watch: false,
    instances: 1,
    exec_mode: 'fork'
  }]
}
