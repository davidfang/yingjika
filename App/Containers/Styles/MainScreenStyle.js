import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  header: {
    height: Metrics.screenHeight / 5,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  cardButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Metrics.screenWidth
  },
  cardButton: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 75
  },
  cardButtonText: {
    ...Fonts.style.normal,
    color: Colors.silver
  },
  notice: {
    flexDirection: 'row',
    width: Metrics.screenWidth * 0.8,
    height: 25,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: Metrics.smallMargin
  },
  chanel: {
    marginVertical: Metrics.marginVertical

  },
  chanelTitle: {
    ...Fonts.style.h5,
    color: Colors.charcoal,
    paddingLeft: 15,
    paddingVertical: 5
  },
  chanelContent: {
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: Colors.windowTint,
    padding: Metrics.baseMargin * 2
  },
  loan: {
    width: Metrics.screenWidth - 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  loanAmount: {
    ...Fonts.style.h4,
    color: Colors.fire
  },
  loanAmountSize: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.small,
    color: Colors.charcoal
  },
  loanDesc: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.small,
    color: Colors.charcoal,
    width: 150
  },
  card: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: Colors.windowTint,
    padding: Metrics.baseMargin * 2
  },
  cardItem: {
    alignItems: 'center',
    marginRight: 15,
    height: 120
  },
  cardName: {
    ...Fonts.style.h6
  },
  cardTag: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.small,
    color: Colors.charcoal
  },
  raiders: {
    flexDirection: 'row',
    paddingBottom: 15,
    width: Metrics.screenWidth - 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  raidersInfo: {
    width: Metrics.screenWidth * 0.6,
    paddingLeft: 20
  }
})
