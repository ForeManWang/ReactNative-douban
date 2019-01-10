import React, { Component } from 'react'
// 第1步：
import { View, Button, Image } from 'react-native'
// 导入拍照的包
import ImagePicker from 'react-native-image-picker'
// 创建拍照时候的配置对象
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

export default class Me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: 'https://qqqww.com/uploads/avatar.png' // 将来，拍摄的照片路径，会存到这里
    }
  }

  render() {
    return <View style={{ alignItems: 'center', paddingTop: 70 }}>
      <Image source={{ uri: this.state.imgURL }} style={{ width: 200, height: 200, borderRadius: 100 }}></Image>
      <Button title="拍照" onPress={this.cameraAction}></Button>
    </View>
  }

  // 第4步：
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
}