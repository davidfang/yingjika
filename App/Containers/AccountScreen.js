import React, { Component } from 'react'
import { ScrollView, Text, TouchableHighlight, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AccountScreenStyle'

class AccountScreen extends Component {
  handlePressLogin = () => {
    NavigationActions.login()
  }
  handlePressRegister = () => {
    NavigationActions.register()
  }
  handlePressForgotPassword = () => {
    NavigationActions.forgotPassword()
  }
  handlePressEntities = () => {
    NavigationActions.entities()
  }
  handlePressSettings = () => {
    NavigationActions.settings()
  }
  handlePressChangePassword = () => {
    NavigationActions.changePassword()
  }
  handlePressChat = () => {
    NavigationActions.chat()
  }
  handlePressLogout = () => {
    this.props.logout()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <ImageBackground source={require('../Images/卡宝--我的/bg.png')} style={styles.head}>
          <Image source={require('../Images/卡宝--我的/tx.png')} style={styles.avatar}/>
        </ImageBackground>
        <View style={styles.buttonGroup} >

          <View style={styles.button} >
            <Image style={{width: 30, height: 30}} source={require('../Images/卡宝--我的/vip.png')}/>
            <Text>VIP会员</Text>
          </View>

          <View style={styles.button} >
            <Image style={{width: 30, height: 30}} source={require('../Images/卡宝--我的/vip.png')}/>
            <Text>VIP会员</Text>
          </View>

          <View style={styles.button} >
            <Image style={{width: 30, height: 30}} source={require('../Images/卡宝--我的/vip.png')}/>
            <Text>VIP会员</Text>
          </View>

          <View style={styles.button} >
            <Image style={{width: 30, height: 30}} source={require('../Images/卡宝--我的/vip.png')}/>
            <Text>VIP会员</Text>
          </View>

          <View style={styles.button} >
            <Image style={{width: 30, height: 30}} source={require('../Images/卡宝--我的/vip.png')}/>
            <Text>VIP会员</Text>
          </View>

          <View style={styles.button} >
            <Image style={{width: 30, height: 30}} source={require('../Images/卡宝--我的/vip.png')}/>
            <Text>VIP会员</Text>
          </View>

          <View style={styles.button} >
            <Image style={{width: 30, height: 30}} source={require('../Images/卡宝--我的/vip.png')}/>
            <Text>VIP会员</Text>
          </View>

          <View style={styles.button} >
            <Image style={{width: 30, height: 30}} source={require('../Images/卡宝--我的/vip.png')}/>
            <Text>VIP会员</Text>
          </View>

          <View style={styles.button} >
            <Image style={{width: 30, height: 30}} source={require('../Images/卡宝--我的/vip.png')}/>
            <Text>VIP会员</Text>
          </View>

          <View style={styles.button} >
            <Image style={{width: 30, height: 30}} source={require('../Images/卡宝--我的/vip.png')}/>
            <Text>VIP会员</Text>
          </View>

          <View style={styles.button} >
            <Image style={{width: 30, height: 30}} source={require('../Images/卡宝--我的/vip.png')}/>
            <Text>VIP会员</Text>
          </View>

          <View style={styles.button} >
            <Image style={{width: 30, height: 30}} source={require('../Images/卡宝--我的/vip.png')}/>
            <Text>VIP会员</Text>
          </View>

          <TouchableOpacity onPress={this.handlePressLogin} >
            <View style={styles.button} >
              <Image style={{width: 30, height: 30}} source={require('../Images/卡宝--我的/vip.png')}/>
              <Text>登录</Text>
            </View>
          </TouchableOpacity>


        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen)
