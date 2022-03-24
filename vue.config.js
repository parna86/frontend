module.exports = {
  devServer: {
    proxy: 'http://127.0.0.1.com/',
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/variables.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/frontend" : "/"
};