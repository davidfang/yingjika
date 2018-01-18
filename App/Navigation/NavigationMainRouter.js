import React, { Component } from 'react'
import { Platform } from 'react-native'
import { Drawer, Scene, Router, Stack } from 'react-native-router-flux'
import styles from './Styles/NavigationMainRouterStyles'
import { Colors } from '../Themes'
import DrawerContent from '../Containers/DrawerContent'

import { connect } from 'react-redux'
import { isLoggedIn } from '../Redux/LoginRedux'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import EntitiesScreen from '../Containers/EntitiesScreen'
import SettingsScreen from '../Containers/SettingsScreen'
import ChangePasswordScreen from '../Containers/ChangePasswordScreen'
import ForgotPasswordScreen from '../Containers/ForgotPasswordScreen'
import ChatScreen from '../Containers/ChatScreen'
// ignite-jhipster-navigation-import-needle

import Icon from 'react-native-vector-icons/Ionicons'

import MainScreen from '../Containers/MainScreen'
import LoanScreen from '../Containers/LoanScreen'
import CardScreen from '../Containers/CardScreen'
import AccountScreen from '../Containers/AccountScreen'
import MyCenter from '../Containers/MyCenter'

/* **************************
 * Documentation: https://github.com/aksonov/react-native-router-flux
 ***************************/

class NavigationMainRouter extends Component {

  render () {
    //const icons = {}
    if (Platform.OS === 'ios') {
      var icons = {
        home: 'ios-home',
        cash: 'ios-cash',
        card: 'ios-card',
        person: 'ios-person'
      }
    } else if (Platform.OS === 'android') {
      var icons = {
        home: 'md-home',
        cash: 'md-cash',
        card: 'md-card',
        person: 'md-person'
      }
    }
    return (
      <Router>

        <Stack key='root'>
          <Scene key='user' initial tabs={true} labelStyle={styles.tabLabel} tabBarStyle={styles.tabBar}
                 inactiveTintColor={Colors.selectedColor} activeTintColor={Colors.fire}>
            <Scene initial key='main' component={MainScreen} title='首页' hideNavBar
                   icon={({tintColor}) => <Icon name={icons.home} size={30} color={tintColor}/> }
            />
            <Scene key='loan' component={LoanScreen} title='借贷' hideNavBar
                   icon={({tintColor}) => <Icon name={icons.cash} size={30} color={tintColor}/> }
            />
            <Scene key='card' component={CardScreen} title='办卡' hideNavBar
                   icon={({tintColor}) => <Icon name={icons.card} size={30} color={tintColor}/> }
            />
            <Scene key='uCenter' component={this.props.loggedIn ? MyCenter : LoginScreen} title='我的' hideNavBar
                   icon={({tintColor}) => <Icon name={icons.person} size={30} color={tintColor}/> }
            />
          </Scene>
          <Scene key='launchScreen' component={LaunchScreen} title='Welcome' hideNavBar/>
          <Scene key='login' component={LoginScreen} title='Login' hideNavBar/>
          <Scene key='account' component={AccountScreen} hideNavBar />
          <Scene key='myCenter' component={MyCenter} hideNavBar />
          <Scene key='setting' component={SettingsScreen} title='设置'/>
          <Scene key='register' component={RegisterScreen}  hideNavBar/>
          <Scene key='entities' component={EntitiesScreen} title='Entities' back/>
          <Scene key='settings' component={SettingsScreen} title='Settings' back/>
          <Scene key='chat' component={ChatScreen} title='Chat' back/>
          <Scene key='forgotPassword' component={ForgotPasswordScreen} title='Forgot Password'  back/>
          <Scene key='changePassword' component={ChangePasswordScreen} title='Change Password' back/>

          {/* ignite-jhipster-navigation-needle */}
        </Stack>

      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.login.authToken !== null //isLoggedIn(state.login)//
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //logout: () => dispatch(LoginActions.logoutRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMainRouter)
//export default NavigationMainRouter
