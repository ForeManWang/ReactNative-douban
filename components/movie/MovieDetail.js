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
