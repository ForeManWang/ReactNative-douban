# ReactNative豆瓣电影

**项目技能**：react，react-native，android环境

**项目目的：**只做项目环境搭建和小部分功能以练习react-native基本功能和android上app的打包构建

**项目地址：**

## ReactNative项目环境搭建

参考我这个文档[ReactNative项目环境搭建](https://qqqww.com/ReactNative%E9%A1%B9%E7%9B%AE%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/)

## 首页

`在进行这一步之前，先确认项目环境搭建并打包下载到手机上没有任何问题之后，进行之后的代码编写和调试`

### 如何更改首页

**知识点：`View组件`和`Text组件`**

**编写一个自己的首页：**根目录下创建`MyHomePage.js`作为自己的首页

**注意：在 RN 中只能使用 .js 不能使用 .jsx**

```javascript
/**
 * 自己的首页
 */

// 导入 react
import React, { Component } from 'react'
// 按需导入组件， View 组件就好比网页中的 div 元素
import { View, Text } from 'react-native'

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
				<Text>123456</Text>
			</View>)
	}
}
```

在`index.js`中导入自己的组件

```javascript
// 导入自己的组件页面
import MyHomePage from './MyHomePage.js'
// 当使用 AppRegistry 注册项目的时候，方法中的第一个参数不要改
// 第二个参数表示要把哪个页面注册为首页
AppRegistry.registerComponent(appName, () => MyHomePage);
```

## 组件的学习

[ReactNative组件]()

## 正式开始豆瓣电影项目

练习了上面一些组件和属性之后，着手去做一个豆瓣电影的小项目

### Tabbar

####基本结构

使用组件`react-native-tab-navigator`

**react-native-tab-navigator使用方法**：老套路，对照官方文档，装包=>导入=>使用

这里的装包，不推荐使用`npm`，首先下载慢，其次如果是`npm5.X`在装新包的时候会把一些老包删除，可能会出现猝不及防的惊喜~~~~

我这里使用的是`facebook`开发的`yarn`装包

```shell
yarn add react-native-tab-navigator // 默认是 --save
```

```javascript
// 导入 Tabbvar 相关组件
import TabNavigator from 'react-native-tab-navigator'
```

```javascript
export default class MyHomePage extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		// 1. 在 RN 中不能使用在网页中的所有标签
		// 2. 如果想要实现布局，RN 提供了一个叫做 View 的组件，来实现布局， 想要使用，要先导入
		return (
			<View style={styles.container}>	
				<TabNavigator>
				  <TabNavigator.Item title="Home">
				    // 放入组件
				  </TabNavigator.Item>
				  <TabNavigator.Item title="Me">
				    // 放入组件
				  </TabNavigator.Item>		  
				</TabNavigator>
			</View>);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
```

这里的放入组件的位置是自己创建的组件，其他后面的自己创建的组件引入方式也是一样套路`创建自己的组件`=>`引入`=>`使用`

**创建自己的新组件，`components/tabars/Home.js`和`components/tabars/Me.js`**

两个组件都简单写下基本代码

```javascript
import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Search extends Component {
  render() {
    return <View>
      <Text>这是 Home 组件</Text>
    </View>
  }
}
```

**引入**

```javascript
import Home from './components/tabbars/Home.js'
import Me from './components/tabbars/Me.js'
```

**使用**

```javascript
<View style={styles.container}>	
	<TabNavigator>
			<TabNavigator.Item title="Home">
				 <Home></Home>
			</TabNavigator.Item>
		 <TabNavigator.Item title="Me">
				 <Me></Me>
			</TabNavigator.Item>		  
	</TabNavigator>
</View>);
```

#### 组件高亮和切换

拿`home`组件举例子，官方文档上这两句加上就行了

```javascript
selected={this.state.selectedTab === 'home'}
onPress={() => this.setState({ selectedTab: 'home' })}>
```

Tab栏的四个组件都按照这样写完，就可以实现正常切换了

#### 组件的图标

用`react-native-vector-icons`的组件，`安装`=>`配置`=>`导入`=>`使用`

#####**安装**

```shell
yarn add react-native-vector-icons
```

#####配置

- 在官方文档找到对应的手机平台配置，我这里应为开发的是`Android`，所以配置的是`Android`的

- **编辑 `android/app/build.gradle( NOT android/build.gradle )`**  ,去这个文件中添加下面两行代码

```javascript
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf', 'FontAwesome.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

- **fonts文件**找到自己的字体文件`C:\Users\wanggongtou\Desktop\douban\node_modules\react-native-vector-icons\Fonts`下面的所有文件全部复制放到`android/app/src/main/assets/fonts `，下面没有`assets/fonts`就手动创建一个，再复制进来
- 将下面两行代码放到`android/settings.gradle `下合适的位置，并把前面的`+`去掉

```javascript
+ include ':react-native-vector-icons'
+ project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
```

- 编辑 `android/app/build.gradle`  ，找到`dependencies`的大括号内部加上`compile project(':react-native-vector-icons')`

```javascript
dependencies {
    ...
    compile project(':react-native-vector-icons')
}
```

- 编辑`android\app\src\main\java\com\douban\MainApplication.java`在`package com.douban;`

这句代码下面添加`import com.oblador.vectoricons.VectorIconsPackage;`这句代码，在同一个文件中，找到`protected List<ReactPackage> getPackages()`在其内部，加上`, new VectorIconsPackage()`

```javascript
package com.douban;
import com.oblador.vectoricons.VectorIconsPackage;

@Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage()
          , new VectorIconsPackage()
      );
    }
```

**注意：只要修改了`Android`里面的配置文件，要重新打包构建**

#####重新打包构建

```shell
react-native run-android
```

**这里可能会遇到两点问题：**

**问题一：提示没有`licenses`协议**

**解决方案：**去配置`Android`的环境目录下，找到 `Android SDK Manager` 安装 `Android SDK Build-tools 23.0.1` 并接受其 `license`;

**注意：这里的 `Android SDK Build-tools 23.0.1` 版本号需要和自己的构建工具版本号相对应**

**问题二：打包构建之后，发现手机上的app打开没有页面了**

**解决方案：**关闭APP进程，重新打开一下就有了

##### 导入

```javascript
import Icon from 'react-native-vector-icons/FontAwesome'
```

##### 使用

可以去`FontAwesome`官网列表中查找对应组件需要的图标，`Icon name=图标的名字`就可以了

```javascript
				<TabNavigator>
				  <TabNavigator.Item
				    ...
				    renderIcon={() => <Icon name="home" size={25} color="gray" />} // 未选中状态下，展示的图标
            		renderSelectedIcon={() => <Icon name="home" size={25} color="#0079FF" />} // 选中状态下展示的图标
				    ...
				    <Home></Home>
				  </TabNavigator.Item>
				</TabNavigator>
```

### 主页

####主页轮播图

#####静态页面

找组件`react-native-swiper`去官网看， 安装、导入、使用

```shell
yarn add react-native-swiper
```

因为轮播图在主页，所以在主页的组件中进行导入

```javascript
// 导入轮播图组件
import Swiper from 'react-native-swiper'
```

把对应的结构和样式全部都拷贝过来

```javascript
export default class Search extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
```

这里轮播图就出来了，再设置自动轮播和轮播图高度，由于这里的轮播图默认充满全屏，所以可以给轮播图最外层套一个`View`，给它一个高度

```javascript
<View style={{ height: 220 }}>
   // 放轮播图代码
</View>
```

给`Swiper`盒子加上属性，自动轮播

```javascript
<Swiper style={styles.wrapper} showsButtons={true} autoplay={true} loop={true}>
    ...
</Swiper>
```

#####渲染数据

```javascript
export default class Home extends Component {
  
  constructor(props) {
  	super(props)
  	this.state = {
  		banner: [] // 轮播图数组
  	}
  }

  componentWillMount() {
  	fetch('http://www.liulongbin.top:3005/api/getlunbo')
  	  .then(res => res.json())
  	  .then(data => {
  	  	// console.warn(JSON.stringify(data, null, '  '))
  	  	this.setState({
  	  	  banner: data.message
  	  	})
  	  })
  }

  render() {
    return (
      <View style={{ height: 220 }}>
    	<Swiper style={styles.wrapper} showsButtons={true} autoplay={true} loop={true}>
		   {this.state.banner.map((item, i) => {
		      return <View key={i}>
					   <Image source={{uri: item.img}} style={{width: '100%', height: '100%'}}></Image>
				     </View>
		    })}
      	</Swiper>
      </View>
    );	
  }
}
```

#### 主页六宫格

导入所需要的组件

```javascript
import { AppRegistry, StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'
```

```javascript
// 六宫格区域
{/* 在 RN 中，默认，就已经为 所有的 View 启用了弹性和模型，同时，默认的主轴是 纵向的 */}
	      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

	        <View style={styles.box}>
	          <Image source={require('../../images/menu1.png')} style={{ width: 60, height: 60 }}></Image>
	          <Text>新闻资讯</Text>
	        </View>
			// ...这里根据需求可以增加主页的宫格数目，我这里是六个，上面代码复制六份就可以
		  </View>
```

```javascript
var styles = StyleSheet.create({
  box: {
    width: '33.33%',
    alignItems: 'center',
    marginTop: 15
  }
})
```

### 热映电影

#### Main.js 配置路由

在项目根目录新建一个`Main.js`作为项目根组件，修改一下`index.js`中指向`App.js`的代码

```javascript
import Main from './Main.js'
AppRegistry.registerComponent(appName, () => Main);
```

去编辑`Main.js`的代码

```javascript
// Main 项目的根组件
// 导入组件
import React, { Component } from 'react'
import { View, Image, Text, ActivityIndicator } from 'react-native'
```

安装一个配置路由规则的插件`react-native-router-flux`

```shell
yarn add react-native-router-flux
```

在`Main.js`中导入

```javascript
import { Router, Stack, Scene } from 'react-native-router-flux'
```

**Router:** 就相当于  HashRouter
**Stack:** 这是一个分组的容器，他不表示具体的路由，专门用来给路由分组的
**Scene：**就表示一个具体的路由规则，好比 昨天学到的 Route

新建两个组件`components/movie/MovieList.js`和`components/movie/MovieDetail.js`作为电影列表组件和电影描述组件

而且由于更换了项目的根组件，所以需要在`Main.js`中导入`App.js`

```javascript
// 导入组件
import App from './App.js'
import MovieList from './components/movie/MovieList.js'
import MovieDetail from './components/movie/MovieDetail.js'
```

**继续修改代码将`App.js`作为首页展示**，在`render`渲染的时候，可以配置首页，并且一并配置其他页面路由

```javascript
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
```

这个时候，依然是不能点击跳转的，是因为没有给`Home.js`内部的`热映电影`组件绑定点击事件，所以去帮顶下

用`TouchableHighlight`包裹`Home.js`中的`热映电影`的代码片段

```javascript
// 在使用前应该现在最前面导入该组件
import { AppRegistry, StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'
			// 包裹
			<TouchableHighlight onPress={this.goMovieList} underlayColor="white" style={styles.box}>
	          {/* 在 TouchableHighlight 内部，只能放置唯一的一个元素 */}
	          <View>
	            <Image source={require('../../images/menu5.png')} style={{ width: 60, height: 60 }}></Image>
	            <Text>热映电影</Text>
	          </View>
	        </TouchableHighlight>
// goMovieList 方法在下面定义
```

**导入`Actions`组件，实现编程式导航**

```javascript
// 导入 Actions 组件，实现编程式导航
// Actions 表示要进行 JS 操作了
import { Actions } from 'react-native-router-flux'
```

写一个跳转方法,并去`TouchableHighlight`中绑定这个方法

```javascript
render() {
    ...
    goMovieList = () => {
      Actions.movielist()
  	}
}
```

```javascript
<TouchableHighlight onPress={this.goMovieList} underlayColor="white" style={styles.box}>
```

这样就实现了基本的路由跳转

#### 豆瓣热映电影列表

###### 基本页面

```javascript
import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, ... } from 'react-native'

const styles = StyleSheet.create({
  ...
})

// 导入路由的组件
import { Actions } from 'react-native-router-flux'

export default class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
     ...
    }
  }

  componentWillMount() {
    ...
  }

  render() {
    return ...
  }
	...
}
```

###### 豆瓣接口

这里先说一下豆瓣接口，根据接口可以进行数据的获取

访问[https://api.douban.com/v2/movie/in_theaters?start=0&count=12](https://api.douban.com/v2/movie/in_theaters?start=0&count=12)可以看到豆瓣的电影数据，链接中的`?`后面的参数`start`表示开始页码，`count`表示每页显示的记录条数，可以根据需求修改，可以拷贝假数据用于测试，可以调用接口，用于测试方法成功之后进行动态数据的渲染

###### fetch获取电影列表数据

1. 根据页码获取电影列表数据
2. 渲染电影列表的方法测试
3. 每项数据需要同步`this.state`中

```javascript
export default class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [], // 电影列表
      nowPage: 1, // 当前的页码
      totalPage: 0, // 总页数
      pageSize: 15, // 每页显示的记录条数
      isloading: true // 是否正在加载数据
    }
  }

  componentWillMount() {
    this.getMoviesByPage()
  }

  render() {
    return <View>
      {this.renderList()}
    </View>
  }

  // 根据页码获取电影列表
  getMoviesByPage = () => {
    const start = (this.state.nowPage - 1) * this.state.pageSize
    const url = `https://api.douban.com/v2/movie/in_theaters?start=${start}&count=${this.state.pageSize}`

    /*
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isloading: false,
          movies: this.state.movies.concat(data.subjects),
          totalPage: Math.ceil(data.total / this.state.pageSize)
        })
      })
    */

    /* 此代码用了拷贝的假数据用于测试 */
    setTimeout(() => {
      this.setState({
        isloading: false,
        movies: require('./test_list.json').subjects,
        totalPage: 1
      })
    }, 1000) 
  }

  // 渲染电影列表的方法,此处用于测试，若能获取电影条数则方法可以继续往下写
  renderList = () => {
    if (this.state.isloading) {
      return <ActivityIndicator size="large"></ActivityIndicator>
    }
    return <View>
        	<Text>{this.state.moives.length}</Text>
        </View>
  }
  ...
}
```

###### 渲染电影列表数据

```javascript
// 渲染电影列表的方法
  renderList = () => {
    if (this.state.isloading) {
      return <ActivityIndicator size="large"></ActivityIndicator>
    }
    return <FlatList
      data={this.state.movies}
      keyExtractor={(item, i) => i} // 解决 key 问题
      renderItem={({ item }) => this.renderItem(item)} // 调用方法，去渲染每一项
    />
  }
  // 渲染每项电影
  renderItem = (item) => {
    return <TouchableHighlight>
      <View>
        <Image source={{ uri: item.images.small }} style={{ width: 100, height: 140, marginRight: 10 }}></Image>
        <View>
          <Text><Text style={styles.movieTitle}>电影名称：</Text>{item.title}</Text>
          <Text><Text style={styles.movieTitle}>电影类型：</Text>{item.genres.join('，')}</Text>
          <Text><Text style={styles.movieTitle}>制作年份：</Text>{item.year}年</Text>
          <Text><Text style={styles.movieTitle}>豆瓣评分：</Text>{item.rating.average}分</Text>
        </View>
      </View>
    </TouchableHighlight>
  }

```

###### 美化布局

相当于加一些样式，不然太丑了

```javascript
  // 渲染电影列表的方法
  renderList = () => {
    if (this.state.isloading) {
      return <ActivityIndicator size="large"></ActivityIndicator>
    }
    return <FlatList
      data={this.state.movies}
      keyExtractor={(item, i) => i} // 解决 key 问题
      renderItem={({ item }) => this.renderItem(item)} // 调用方法，去渲染每一项
      ItemSeparatorComponent={this.renderSeparator} //渲染分割线的属性方法
      onEndReachedThreshold={0.5} // 距离底部还有多远的时候，触发加载更多的事件
      onEndReached={this.loadNextPage} // 当距离不足 0.5 的时候，触发这个方法，加载下一页数据
    />
  }

  // 渲染每项电影
  renderItem = (item) => {
    return 
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <Image source={{ uri: item.images.small }} style={{ width: 100, height: 140, marginRight: 10 }}></Image>
        <View style={{ justifyContent: 'space-around' }}>
          <Text><Text style={styles.movieTitle}>电影名称：</Text>{item.title}</Text>
          <Text><Text style={styles.movieTitle}>电影类型：</Text>{item.genres.join('，')}</Text>
          <Text><Text style={styles.movieTitle}>制作年份：</Text>{item.year}年</Text>
          <Text><Text style={styles.movieTitle}>豆瓣评分：</Text>{item.rating.average}分</Text>
        </View>
      </View>
  }

  // 渲染分割线
  renderSeparator = () => {
    return <View style={{ borderTopColor: '#ccc', borderTopWidth: 1, marginLeft: 10, marginRight: 10 }}></View>
  }
```

###### 下拉加载更多

利用官方文档的属性`onEndReachedThreshold`和`onEndReached`来控制

**`onEndReachedThreshold：`**距离底部还有多远的时候，触发加载更多的事件

**`onEndReached:`**当距离不足 0.5 的时候，触发这个方法，加载下一页数据

```javascript
 // 渲染电影列表的方法
  renderList = () => {
    if (this.state.isloading) {
      return <ActivityIndicator size="large"></ActivityIndicator>
    }
    return <FlatList
      data={this.state.movies}
      keyExtractor={(item, i) => i} // 解决 key 问题
      renderItem={({ item }) => this.renderItem(item)} // 调用方法，去渲染每一项
      ItemSeparatorComponent={this.renderSeparator} //渲染分割线的属性方法
      onEndReachedThreshold={0.5} // 距离底部还有多远的时候，触发加载更多的事件
      onEndReached={this.loadNextPage} // 当距离不足 0.5 的时候，触发这个方法，加载下一页数据
    />
  }

  // 渲染每项电影
  renderItem = (item) => {
    return <TouchableHighlight underlayColor="#fff" onPress={() => { Actions.moviedetail({ id: item.id }) }}>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <Image source={{ uri: item.images.small }} style={{ width: 100, height: 140, marginRight: 10 }}></Image>
        <View style={{ justifyContent: 'space-around' }}>
          <Text><Text style={styles.movieTitle}>电影名称：</Text>{item.title}</Text>
          <Text><Text style={styles.movieTitle}>电影类型：</Text>{item.genres.join('，')}</Text>
          <Text><Text style={styles.movieTitle}>制作年份：</Text>{item.year}年</Text>
          <Text><Text style={styles.movieTitle}>豆瓣评分：</Text>{item.rating.average}分</Text>
        </View>
      </View>
    </TouchableHighlight>
  }
   // 加载下一页
  loadNextPage = () => {
    // 如果下一页的页码值，大于总页数了，直接return
    if ((this.state.nowPage + 1) > this.state.totalPage) {
      return
    }

    this.setState({
      nowPage: this.state.nowPage + 1
    }, function () {
      this.getMoviesByPage()
    })
  }
```

###### 提升体验

写着写着，遇到了个问题，这时不时的访问不到服务，但是这好像和代码关系不大，因为我重连几次就可以了，我觉得和网速关系很大，我这网速太渣

所以我就加了几句提示错误的代码

```javascript
getMoviesByPage = () => {
    const start = (this.state.nowPage - 1) * this.state.pageSize
    const url = `https://api.douban.com/v2/movie/in_theaters?start=${start}&count=${this.state.pageSize}`
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          console.error('服务器忙，请稍后重试' + res.status)
        }
      })
      .then(data => {
        ...
      })
      .catch(err => {
        console.error(err)
      })
  }
```

#### 豆瓣热映电影详情

##### 基本页面

```javascript
import React, { Component } from 'react'

import { View, Image, Text, ActivityIndicator, ScrollView } from 'react-native'

export default class MovieDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieInfo: {}, // 电影信息
      isloading: true
    }
  }

  componentWillMount() {
    ...
  }

  render() {
    return <View>
      ...
    </View>
  }

 ...
}
```

同样的需要去`Main.js`配置路由规则，和配置`MovieList`组件的路由规则一个套路，这里由于我之前配置过了，不再配置

给`MovieDetil`在`MovieList`中的代码片段（就是渲染的每一部电影的代码片段）加上链接跳转，这里依然是要依靠`TouchableHighlight`组件

首先引入

```javascript
import { View, Image, Text, ActivityIndicator, FlatList, StyleSheet, TouchableHighlight } from 'react-native'
```

在获取每项电影的时候，代码片段用`TouchableHighlight`包裹起来

```javascript
renderItem = (item) => {
    return <TouchableHighlight underlayColor="#fff">
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <Image source={{ uri: item.images.small }} style={{ width: 100, height: 140, marginRight: 10 }}></Image>
        <View style={{ justifyContent: 'space-around' }}>
          <Text><Text style={styles.movieTitle}>电影名称：</Text>{item.title}</Text>
          <Text><Text style={styles.movieTitle}>电影类型：</Text>{item.genres.join('，')}</Text>
          <Text><Text style={styles.movieTitle}>制作年份：</Text>{item.year}年</Text>
          <Text><Text style={styles.movieTitle}>豆瓣评分：</Text>{item.rating.average}分</Text>
        </View>
      </View>
    </TouchableHighlight>
  }
```

**绑定点击事件，并导入`Actions`，实现编程式导航**

```javascript
// 导入路由的组件
import { Actions } from 'react-native-router-flux'
```

```javascript
  // 渲染每项电影
  renderItem = (item) => {
    return <TouchableHighlight underlayColor="#fff" onPress={() => { Actions.moviedetail({ id: item.id }) }}>
     ...
    </TouchableHighlight>
  }
```

##### 数据渲染

在生命周期是`componentWillMount()`的时候从接口获取数据，再到`this.state`同步数据，然后去`render()`填充数据，这里为`render()`定义了一个方法，直接`this.renderInfo()`调用就可以

```javascript
import React, { Component } from 'react'

import { View, Image, Text, ActivityIndicator, ScrollView } from 'react-native'

export default class MovieDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieInfo: {}, // 电影信息
      isloading: true
    }
  }

  componentWillMount() {
    fetch('https://api.douban.com/v2/movie/subject/' + this.props.id)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movieInfo: data,
          isloading: false
        })
      })
  }

  render() {
    return <View>
      {this.renderInfo()}
    </View>
  }

  renderInfo = () => {
    if (this.state.isloading) {
      return <ActivityIndicator size="large"></ActivityIndicator>
    }
    return <ScrollView>
      <View style={{ padding: 4 }}>
        <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 20, marginBottom: 20 }}>{this.state.movieInfo.title}</Text>

        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: this.state.movieInfo.images.large }} style={{ width: 200, height: 280 }}></Image>
        </View>

        <Text style={{ lineHeight: 30, marginTop: 20 }}>{this.state.movieInfo.summary}</Text>
      </View>
    </ScrollView>
  }
}
```

**提示：各种接口数据最好借助`Postman`工具，先看一下接口数据里哪些属性要用，不然挺乱的，不过不借助`Psotman`工具的话也可以去该接口连接把`json`数据拷贝下来到编辑器中，自己整理下格式**

## 小功能体验：拍照功能

为`Me.js`添加一个拍照功能

调用插件`react-native-image-picker`该插件可以调用摄像头

1. 安装包

```shell
yarn add react-native-image-picker
```

2. 导入包

```javascript
import { View, Button, Image } from 'react-native'
// 导入拍照的包
import ImagePicker from 'react-native-image-picker'
```

3. 创建拍照时的配置对象

```javascript
var photoOptions = {
  //底部弹出框选项
  title: '请选择',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  quality: 0.75, // 照片的质量
  allowsEditing: true, // 允许被编辑
  noData: false, // 拍照时候不附带日期
  storageOptions: { // 存储选项
    skipBackup: true, // 在IOS平台中，会自动把 照片同步到 云端的存储，如果此项为 true，表示跳过 备份，不会把照片上传到 云端
    path: 'images'
  }
}
```

4. 创建保存数据的容器

```javascript
constructor(props) {
    super(props);
    this.state = {
      imgURL: 'https://qqqww.com/uploads/avatar.png' // 将来，拍摄的照片路径，会存到这里
    }
  }
```

5. 渲染

```javascript
render() {
    return <View style={{ alignItems: 'center', paddingTop: 70 }}>
      <Image source={{ uri: this.state.imgURL }} style={{ width: 200, height: 200, borderRadius: 100 }}></Image>
      <Button title="拍照" onPress={this.cameraAction}></Button>
    </View>
  }
```

6. 定义一个拍照方法，在渲染的时候调用

```javascript
 cameraAction = () => {
    ImagePicker.showImagePicker(photoOptions, (response) => {
      console.log('response' + response);
      if (response.didCancel) { // 点击了取消按钮，此时，用户没有拍照
        return
      }

      // 用户已经拍摄了一张照片了
      this.setState({
        imgURL: response.uri
      });
    })
  }
```

到这一步，在`React-Native项目`中的拍照功能就完成了，并且手机测试成功

## 发布安卓项目

说明：这只是用于测试`react-native`的一部分功能的小`demo`，并不能用于实际作用

参考文章：

- [ReactNative之Android打包APK方法（趟坑过程）](http://www.jianshu.com/p/1380d4c8b596)
- [React Native发布APP之签名打包APK](http://blog.csdn.net/fengyuzhengfan/article/details/51958848)

这里总结下：

1. 先保证配置了一个正确的RN环境
2. 在 cmd 命令行中，运行这一句话`keytool -genkey -v -keystore my-release-key2.keystore -alias my-key-alias2 -keyalg RSA -keysize 2048 -validity 10000`生成签名
   1.  `my-release-key.keystore` 表示你一会儿要生成的那个 签名文件的 名称【很重要，包找个小本本记下来】
   2. `-alias` 后面的东西，也很重要，需要找个小本本记下来，这个名称可以根据自己的需求改动`my-key-alias`
   3. 当运行找个命令的时候，需要输入一系列的参数，找个口令的密码，【一定要找个小本本记下来】
3. 当生成了签名之后，这个签名，默认保存到了自己的用户目录下`C:\Users\liulongbin\my-release-key2.keystore`
4. 将你的签名证书copy到 android/app目录下。
5. 编辑 `android` -> `gradle.properties`文件，在最后，添加如下代码：

```
MYAPP_RELEASE_STORE_FILE=your keystore filename
MYAPP_RELEASE_KEY_ALIAS=your keystore alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

6. 编辑 android/app/build.gradle文件添加如下代码：

```
...
android {
    ...
    defaultConfig { ... }
    + signingConfigs {
    +    release {
    +        storeFile file(MYAPP_RELEASE_STORE_FILE)
    +        storePassword MYAPP_RELEASE_STORE_PASSWORD
    +        keyAlias MYAPP_RELEASE_KEY_ALIAS
    +        keyPassword MYAPP_RELEASE_KEY_PASSWORD
    +    }
    +}
    buildTypes {
        release {
            ...
    +        signingConfig signingConfigs.release
        }
    }
}
...
```

7. 进入项目根目录下的`android`文件夹，在当前目录打开终端，然后输入`./gradlew assembleRelease`开始发布APK的Release版；
8. 第七步出了点小问题，报错信息是**Execution failed for task ':app:validateSigningRelease'.**后来看看原来是我的第五步里的`MYAPP_RELEASE_KEY_ALIAS=your keystore alias`这一块的签名写错了，忘了加后缀名，改了之后，又给了我一个响应超时的惊喜，不过我就重新运行了第二次就打包构建成功了
9. 当发行完毕后，进入自己项目的`android\app\build\outputs\apk`目录中，找到`app-release.apk`，这就是我们发布完毕之后的完整安装包；安装到自己和朋友的手机上，测试成功，就可以上传到各大应用商店供用户使用啦。

> 注意：请记得妥善地保管好你的密钥库文件，不要上传到版本库或者其它的地方。

![发布安卓项目Release版本生成个人签名](ReactNative项目环境搭建\发布安卓项目Release版本生成个人签名.png)































