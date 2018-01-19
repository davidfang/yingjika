import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingTop: Metrics.navBarHeight + 20,
    padding: 20
  },
  viewWrap: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  textWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  }
})
