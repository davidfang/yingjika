import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AccountScreenStyle'

class AccountScreen extends Component {
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

          <View style={styles.button} >
            <Image style={{width: 30, height: 30}} source={require('../Images/卡宝--我的/vip.png')}/>
            <Text>VIP会员</Text>
          </View>


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
