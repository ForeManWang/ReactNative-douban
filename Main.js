// Main 项目的根组件
// 导入组件
import React, { Component } from 'react'
import { View, Image, Text, ActivityIndicator } from 'react-native'

// 导入路由相关的组件
// Router: 就相当于  HashRouter
// Stack: 这是一个分组的容器，他不表示具体的路由，专门用来给路由分组的
// Scene：就表示一个具体的路由规则，好比 昨天学到的 Route
import { Router, Stack, Scene } from 'react-native-router-flux'

// 导入App组件
import App from './App.js'
import MovieList from './components/movie/MovieList.js'
import MovieDetail from './components/movie/MovieDetail.js'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <Router sceneStyle={{ backgroundColor: 'white' }}>
      <Stack key="root">
        {/* 配置路由规则 */}
        {/* 注意，所有的路由规则，都应该写到这个位置 */}
        {/* 第一个 Scene 就是默认要展示的首页 */}
        {/* key 属性，表示路由的规则名称，将来可以使用这个 key ，进行编程式导航，每一个路由规则，都应该提供一个 唯一的key， key不能重复 */}
        <Scene key="app" component={App} title="" hideNavBar={true} />
        {/* 电影列表的路由规则 */}
        <Scene key="movielist" component={MovieList} title="热映电影列表" />
        <Scene key="moviedetail" component={MovieDetail} title="电影详情" />
      </Stack>
    </Router>
  }
}