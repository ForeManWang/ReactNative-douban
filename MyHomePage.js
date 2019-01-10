// /**
//  * 自己的首页
//  */

// // 导入 react
import React, { Component } from 'react'
// 按需导入组件， View 组件就好比网页中的 div 元素
import { View, Text, TextInput } from 'react-native'

export default class MyHomePage extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		// 1. 在 RN 中不能使用在网页中的所有标签
		// 2. 如果想要实现布局，RN 提供了一个叫做 View 的组件，来实现布局， 想要使用，要先导入
		return (
			<View>	
				{ /*3. 在 RN 中，所有的文本，必须使用 RN 提供的 Text 组件进行包裹，依然是按需导入*/ }
				<Text></Text>
				<TextInput></TextInput>				
			</View>)
	}
}
