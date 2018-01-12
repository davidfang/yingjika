import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  head: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight / 5
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 10
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: Metrics.baseMargin,
    justifyContent: 'space-between'
  },
  button: {
    width: Metrics.screenWidth * 0.18,
    margin: Metrics.baseMargin,
    alignItems: 'center'
  }
})
