const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  // 公共路徑：如果您的應用不是部署在域名的根路徑下，您需要設置這個選項
  // publicPath: process.env.NODE_ENV === 'production' ? '/your-project-name/' : '/',

  // 輸出目錄：構建後的文件將會被輸出到這個目錄
  // outputDir: 'dist',

  // 是否在保存時使用 eslint-loader 進行檢查
  lintOnSave: process.env.NODE_ENV !== 'production',

  // 開發服務器配置
  devServer: {
    port: 8080, // 開發服務器端口
    open: true, // 自動打開瀏覽器
  },

  // 如果您需要修改 Webpack 配置，可以使用 configureWebpack 選項
  // configureWebpack: {
  //   // 在這裡添加或修改 Webpack 配置
  // },

  // 如果您需要對 Webpack 配置進行更細粒度的控制，可以使用 chainWebpack
  // chainWebpack: config => {
  //   // 在這裡鏈式修改 Webpack 配置
  // }
})