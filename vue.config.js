module.exports = {
  publicPath: '',

  pages: {
    index: {
      entry: 'examples'
    }
  },

  productionSourceMap: false,

  css: {
    // 组件的css动态注入到 JavaScript 中的 inline
    extract: false
  },

  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      const nodeExternals = require('webpack-node-externals')
      // 分离 Element
      config.externals = config.externals || {}
      config.externals = [
        config.externals,
        {
          'element-ui': {
            root: 'ELEMENT',
            commonjs: 'element-ui',
            commonjs2: 'element-ui',
            amd: 'element-ui'
          }
        },
        // 排除 node_modules 目录中所有模块
        nodeExternals()
      ]
    }
  },

  devServer: {
    port: 8888
  }
}
