/** 
	
 */
// 从ReactNative的包中，导入AppRegistry的组件，它的作用就是注册项目首页的
import {AppRegistry} from 'react-native'
// import App from './App'
import Main from './Main.js'
import {name as appName} from './app.json'

// 导入自己的组件页面
import MyHomePage from './MyHomePage.js'

// 当使用 AppRegistry 注册项目的时候，方法中的第一个参数不要改
// 第二个参数表示要把哪个页面注册为首页
AppRegistry.registerComponent(appName, () => Main);
