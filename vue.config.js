modules.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'common': resolve('@/common'),
        'assets': resolve('@/assets'),
        'components': resolve('@/components'),
        'network': resolve('@/network'),
        'views': resolve('@/views'),
      }
    }
  }
}