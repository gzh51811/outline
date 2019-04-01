# day7-1

## 混合开发

* iOS（webkit）
    * xml
    * Objective-C/swift

* Android(webkit)
    * xml
    * java

* windows()

* h5 -> 跨平台(浏览器)
    * html
    * css
    * js

* webApp -> 浏览器 -> 呈现页面
* hybridApp -> 用一个壳子包装h5页面 -> 安装 -> 运行
* nativeApp -> 安装 -> 运行

* webview（浏览器）
    * 原理：通过window全局对象暴露方法
    * native提供接口交互：window
        * jQuery(window.$,window.jQuery),require(window.define,window.require)
            * require()
        * window.moxiu
            * 退出：window.moxiu.exit()
            * 获取token: let token = window.moxiu.getUserMxauth()
    * h5提供接口调用
        *  webview.stringByEvaluatingJavaScriptFromString("laoxie.getData()")
* 5+runtime
    * 在window对象中提供plus属性
        * window.plus.camera
