const path = require('path');
 
function resolve(dir) {
  return path.join(__dirname, dir)
}
 
 
 
module.exports = {
 
  productionSourceMap: false,// 生产环境是否要生成 sourceMap
 
  publicPath: './',  //   部署应用包时的基本 URL
 
  outputDir: 'dist',  //   打包时输出的文件目录
 
  assetsDir: 'assets',  //   放置静态文件夹目录
 
  devServer:{},// dev环境下，webpack-dev-server 相关配置
 
  lintOnSave: false,//是否在开发环境下每次保存代码时都启用 eslint验证
 
  css:{},
  chainWebpack:config=>{
    config.resolve.alias.set('@', resolve('src'))//配置src别名为@
  }
}