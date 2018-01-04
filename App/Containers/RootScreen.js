import React, { Component } from 'react'
import { ScrollView, View, Text, KeyboardAvoidingView, StatusBar } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import MainScreen from './MainScreen'
import LoanScreen from './LoanScreen'
import CardScreen from './CardScreen'
import AccountScreen from './AccountScreen'

// Styles
import styles from './Styles/RootScreenStyle'
import {Colors} from '../Themes'

const Tab = TabNavigator(
  {
    MainScreen: {
      screen: MainScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '首页',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name='ios-home' size={30} color={tintColor} />
        )
      })
    },
    LoanScreen: {
      screen: LoanScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '借贷',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name='logo-usd' size={30} color={tintColor} />
        )
      })
    },
    CardScreen: {
      screen: CardScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '办卡',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name='ios-card' size={30} color={tintColor} />
        )
      })
    },
    AccountScreen: {
      screen: AccountScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name='ios-person' size={30} color={tintColor} />
        )
      })
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,
    initialRouteName: 'MainScreen',
    lazy: true,
    tabBarOptions: {
      activeTintColor: Colors.selectedColor,
      inactiveTintColor: Colors.charcoal,
      style: {
        backgroundColor: Colors.silver
      }
    }
  }
)

class RootScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <StatusBar barStyle='light-content' />
        <Tab></Tab>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen)
