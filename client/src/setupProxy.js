const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://easy-duty-api.herokuapp.com',
            changeOrigin: true,
        })
    );
};