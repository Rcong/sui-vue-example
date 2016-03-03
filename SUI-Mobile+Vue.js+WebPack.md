# SUI-Mobile+Vue.js+webpack

### [SUI Mobile](http://m.sui.taobao.org/) - 一套淘宝UED基于Framework7开发的轻量级UI库
只需要引入CDN文件就可以使用,并且能兼容到 iOS 6.0+ 和 Android 4.0+,组件都是按照iOS风格设计的,所有有很多组件都是iOS独有的炫酷设计非常适合开发跨平台Web App。

一些效果截图:

![首页.png](https://ooo.0o0.ooo/2016/03/02/56d7b0026cbb3.png) ![收藏.png](https://ooo.0o0.ooo/2016/03/02/56d7ad8dbf1fe.png) ![详情.png](https://ooo.0o0.ooo/2016/03/02/56d7ad8c6f46f.png)

### [Vue.js](http://cn.vuejs.org/) - 一个轻量级的[MVVM](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)库。


### [webpack](http://webpack.github.io/) - 一款模块加载器兼打包工具。
![webpack](http://images0.cnblogs.com/blog2015/561179/201507/161453372048661.jpg)
在实际开发当中,几个人写一堆js,然后在html中这样引入文件:

```javascript
<body>
      ...
      <script src="a.js"></script>
      <script src="b.js"></script>
      <script src="c.js"></script>
      <script src="d.js"></script>
      <script src="e.js"></script>
</body>
```

即增加了http请求的性能损耗,也有可能造成命名重叠。而使用webpack可以把js资源当作模块,然后用一份配置控制怎么加载,之后就可以这样引入:

```javascript
<body>
      ...
      <script src="bundle.js"></script>
</body>
```

配置文件的形式:

```javascript
var path = require('path');

module.exports = {
    // 入口
    entry: './src/main.js',
    // 输出
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/dist/'
    },
    externals: {
      'zepto': 'Zepto'
    },
    module: {
        // 加载器
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader'},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    }
  }
```

这样就减少了请求数量。除此之外webpack还能压缩混淆、图片转base64,模块化的其他一些文件。
