/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// 导入 React 基础包，这个包，作用是创建 组件
import React, { Component } from 'react'
// 从 react-native 中导入系统开发需要的包
import {StyleSheet, View, Text} from 'react-native'
// 导入 Tabbvar 相关组件
import TabNavigator from 'react-native-tab-navigator'
import Home from './components/tabbars/Home.js'
import Me from './components/tabbars/Me.js'
import Search from './components/tabbars/Search.js'
import ShopCar from './components/tabbars/ShopCar.js'

// 导入图标相关的组件
import Icon from 'react-native-vector-icons/FontAwesome'

export default class MyHomePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedTab: 'home' // 默认选中 home
		}
	}
	render() {
		// 1. 在 RN 中不能使用在网页中的所有标签
		// 2. 如果想要实现布局，RN 提供了一个叫做 View 的组件，来实现布局， 想要使用，要先导入
		return <View style={styles.container}>	
				<TabNavigator>
				  <TabNavigator.Item
				    selected={this.state.selectedTab === 'home'}
				    title="主页"
				    renderIcon={() => <Icon name="home" size={25} color="gray" />} // 未选中状态下，展示的图标
            		renderSelectedIcon={() => <Icon name="home" size={25} color="#0079FF" />} // 选中状态下展示的图标
				    onPress={() => this.setState({ selectedTab: 'home' })}>
				    <Home></Home>
				  </TabNavigator.Item>

				  <TabNavigator.Item
				    selected={this.state.selectedTab === 'search'}
				    title="搜索"
				    renderIcon={() => <Icon name="search" size={25} color="gray" />}
            		renderSelectedIcon={() => <Icon name="search" size={25} color="#0079FF" />}
				    onPress={() => this.setState({ selectedTab: 'search' })}>
				    <Search></Search>
				  </TabNavigator.Item>

				  <TabNavigator.Item
				    selected={this.state.selectedTab === 'shopcar'}
				    title="购物车"
				    renderIcon={() => <Icon name="shopping-cart" size={25} color="gray" />}
            		renderSelectedIcon={() => <Icon name="shopping-cart" size={25} color="#0079FF" />}
				    badgeText="0"
				    onPress={() => this.setState({ selectedTab: 'shopcar' })}>
				    <ShopCar></ShopCar>
				  </TabNavigator.Item>

				  <TabNavigator.Item
				    selected={this.state.selectedTab === 'me'}
				    title="我的"
				    renderIcon={() => <Icon name="user" size={25} color="red" />}
            		renderSelectedIcon={() => <Icon name="user-o" size={25} color="#0079FF" />}
				    onPress={() => this.setState({ selectedTab: 'me' })}>
				    <Me></Me>
				  </TabNavigator.Item>
		  
				</TabNavigator>


			</View>
	}
}

// 使用 StyleSheet.create 创建样式表对象，可以为 create 传递一个配置对象，这个对象就是要创建的样式
const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
