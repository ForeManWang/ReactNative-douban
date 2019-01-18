# ReactNative豆瓣电影

基于ReactNative做的安卓app，用的豆瓣电影的api

## 运行

1. 要有安卓项目运行环境，点击看文档**[ReactNative项目环境搭建](https://qqqww.com/ReactNative项目环境搭建/)**
2. 克隆项目到本地`git clone git@github.com:ForeManWang/ReactNative-douban.git --depth 1`
3. 安装依赖包`yarn install`
4. 集成测试app
   1. 详细参考[ReactNative项目环境搭建](https://qqqww.com/ReactNative项目环境搭建/)
   2. 在这之前保证你的手机正确连接电脑了
   3. 打开了开发者调试功能
   4. 允许电脑安装应用
   5. 在项目的`/ReactNative-douban/android`目录中打开控制面板，输入`react-native run-android`会自动生成一个测试版的`app`，自动安装到你的手机上
5. 发布安卓项目`android release`
   1. 详细参考[ReactNative豆瓣电影项目文档](https://qqqww.com/ReactNative豆瓣电影项目文档/)的**发布安卓项目**章节
   2. 发布之后将生成的`app`装到手机上就可以了

## 部分功能截图

![movieList](/assets/movieList.png)

![movieDetail](/assets/movieDetail.png)