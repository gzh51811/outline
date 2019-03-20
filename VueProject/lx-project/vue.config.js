module.exports = {
    devServer: {
        proxy:{
            '^/jxapi':{
                "target": "https://m.jiuxian.com", //目标服务器
                "changeOrigin": true,
                "pathRewrite": {
                    "^/jxapi" : "/"
                }
            },
            '^/api':{
                "target": "http://localhost:1811", //目标服务器
                "changeOrigin": true,
                "pathRewrite": {
                    "^/api" : "/api"
                }
            }
        }
    }
}