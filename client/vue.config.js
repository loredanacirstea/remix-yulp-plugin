module.exports = {
  publicPath: '/remix-yulp-plugin',
  baseUrl: '/remix-yulp-plugin',
  chainWebpack: config => {
    config.module.rule('eslint').exclude.add(/yulp/);
  },
};
