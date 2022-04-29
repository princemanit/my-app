const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/ITMServices",
    createProxyMiddleware({
      target: "https://itmservices.cherryworkproducts.com",
      changeOrigin: true,
      pathRewrite: { "^/ITMServices": "" },
    })
  );
};
