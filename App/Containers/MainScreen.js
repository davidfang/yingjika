import React, { Component } from 'react'
import { ScrollView, View, Text, KeyboardAvoidingView, Image } from 'react-native'

import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MainScreenStyle'
import {Fonts} from '../Themes'

class MainScreen extends Component {
  loan () {
    return (<View style={styles.loan}>
      <Image source={require('../Images/卡宝-首页-切图标注/home-mjs.png')}/>
      <View>
        <Text style={styles.loanAmount}>1000</Text>
        <Text style={styles.loanAmountSize}>最高(元)</Text>
      </View>
      <View>
        <Text style={Fonts.style.h5}>借钱花</Text>
        <Text style={styles.loanDesc}>注册即送大礼，随信借，随信还</Text>
      </View>
    </View>)
  }

  card () {
    return (
      <View style={styles.cardItem}>
        <Image source={require('../Images/卡宝-首页-切图标注/k1.png')} style={{width: 120, height: 80}} />
        <Text style={styles.cardName}>上海银行</Text>
        <Text style={styles.cardTag}>10万秒批</Text>
      </View>
    )
  }

  raiders () {
    return (
      <View style={styles.raiders}>
        <Image source={require('../Images/卡宝-首页-切图标注/home-bag.png')} style={{width: 60, height: 60}} />
        <View style={styles.raidersInfo}>
          <Text style={styles.cardName}>资料借贷</Text>
          <Text style={styles.cardTag}>资料这样填，下款快资料这样填，下款快资料这样填，下款快资料这样填，下款快</Text>
        </View>
      </View>
    )
  }
  render () {

    return (
      <ScrollView style={styles.container}>
        {/* *** Header *****/}
        <View style={styles.header} >
          <View style={styles.notice}>
            <Image source={require('../Images/卡宝-首页-切图标注/home-notice.png')} />
            <Text style={styles.titleText}>135****6688通过信用卡还款999元</Text>
          </View>
          <View style={styles.cardButtonGroup}>
            <View style={styles.cardButton} >
              <Image source={require('../Images/卡宝-首页-切图标注/home-ic-gathering.png')}  />
              <Text style={styles.cardButtonText}>信用卡收款</Text>
            </View>
            <View style={styles.cardButton} >
              <Image source={require('../Images/卡宝-首页-切图标注/home-ic-payment.png')}  />
              <Text style={styles.cardButtonText}>信用卡待还</Text>
            </View>
          </View>
        </View>

        <View style={styles.chanel}>
          <Text style={styles.chanelTitle}>VIP福利</Text>
          <View style={styles.chanelContent}>
            <Image source={require('../Images/卡宝-首页-切图标注/享最低0.3费率.png')}/>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.chanel}>
          <Text style={styles.chanelTitle}>小额贷款推荐</Text>
          <View style={styles.chanelContent}>
            {this.loan()}
            {this.loan()}
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.chanel}>
          <Text style={styles.chanelTitle}>大额贷款推荐</Text>
          <View style={styles.chanelContent}>
            {this.loan()}
            {this.loan()}
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.chanel}>
          <Text style={styles.chanelTitle}>必备信用卡</Text>
          <ScrollView style={styles.card} horizontal>
            {this.card()}
            {this.card()}
            {this.card()}
            {this.card()}
            {this.card()}
          </ScrollView>
        </View>
        <View style={styles.separator} />
        <View style={styles.chanel}>
          <Text style={styles.chanelTitle}>最新攻略</Text>
          <View style={styles.chanelContent}>
            {this.raiders()}
            {this.raiders()}
            {this.raiders()}
            {this.raiders()}
            {this.raiders()}
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
