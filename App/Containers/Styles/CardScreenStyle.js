import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  body: {
    alignItems: 'center',
    backgroundColor: Colors.steel,
    padding: Metrics.baseMargin
  },
  cardGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.screenWidth,
    marginBottom: Metrics.baseMargin
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.9,
    borderRadius: 10,
    backgroundColor: Colors.silver,
    paddingVertical: Metrics.baseMargin
  },
  cardName: {
    ...Fonts.style.h5,
    marginVertical: Metrics.baseMargin
  },
  cardShortDescribe: {
    ...Fonts.style.normal,
    color: Colors.bloodOrange,
    marginVertical: Metrics.baseMargin
  },
  cardDescribe: {
    ...Fonts.style.description,
    color: Colors.charcoal,
    marginBottom: Metrics.baseMargin
  },
  bankGroup: {
    marginVertical: Metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  bank: {
    width: Metrics.screenWidth * 0.42,
    height: 100,
    backgroundColor: Colors.silver,
    borderRadius: Metrics.buttonRadius,
    flexDirection: 'row',
    paddingVertical: 24,
    paddingHorizontal: 10,
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  bankImgTag: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  bankInfo: {
    marginLeft: Metrics.baseMargin
  }
})
