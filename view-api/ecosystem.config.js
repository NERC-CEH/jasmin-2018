module.exports = {
  apps: [{
    name: 'View API',
    script: 'src/server.js',
    watch: ['src'],
    ignore_watch: ['src/data/*.json']
  }]
}
