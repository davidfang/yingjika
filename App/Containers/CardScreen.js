import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CardScreenStyle'

class CardScreen extends Component {

  renderBank () {
    return <View style={styles.bank}>
      <Image source={require('../Images/办卡/招商logo70.png')} style={{width: 40, height: 40}} />
      <View style={styles.bankInfo}>
        <Text style={styles.normal}>招商银行</Text>
        <Text style={styles.cardDescribe}>9元看电影</Text>
      </View>
      <Image source={require('../Images/办卡/角标.png')} style={styles.bankImgTag} />
    </View>
  }
  renderCard(){
    return <View style={styles.cardGroup}>
      <View style={styles.card}>
        <Text style={styles.cardName}>上海银行</Text>
        <Text style={styles.cardShortDescribe}>免年费白金卡，10万额度秒批</Text>
        <Image source={require('../Images/办卡/k3.png')} style={{width:250, height:150}} />
        <View>
          <Text style={styles.cardDescribe}>最高10万额度，最快1天下卡</Text>
          <Text style={styles.cardDescribe}>最高10万额度，最快1天下卡</Text>
          <Text style={styles.cardDescribe}>最高10万额度，最快1天下卡</Text>
          <Text style={styles.cardDescribe}>最高10万额度，最快1天下卡</Text>
        </View>
      </View>
    </View>
  }
  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.body}>
          {this.renderCard()}
          {this.renderCard()}
          {this.renderCard()}
          {this.renderCard()}
          {this.renderCard()}
          <View>
            <Text style={styles.normal}>更多热门银行，申卡火热进行中</Text>
          </View>
          <View style={styles.bankGroup}>
            {this.renderBank()}
            {this.renderBank()}
            {this.renderBank()}
            {this.renderBank()}
            {this.renderBank()}
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

export default connect(mapStateToProps, mapDispatchToProps)(CardScreen)
