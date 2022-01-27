module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].template = '/public_html/index.html'
                return args
            })
    }
}