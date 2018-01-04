import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: Metrics.screenWidth,
    height: 30,
    marginTop: Metrics.baseMargin,
    backgroundColor: Colors.silver
  },
  headerLabel: {
    flex: 1,
    justifyContent: 'center'
  },
  headerButton: {
    backgroundColor: Colors.steel,
    justifyContent: 'center',
    margin: Metrics.smallMargin,
    borderRadius: Metrics.smallMargin,
    width: Metrics.screenWidth * 0.3
  },
  headerText: {
    ...ApplicationStyles.darkLabel,
    color: Colors.panther,
    textAlign: 'center',
    alignSelf: 'center',
    padding: Metrics.smallMargin
  },
  sectionHeaderBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    width: Metrics.screenWidth,
    marginTop: Metrics.baseMargin,
    backgroundColor: Colors.silver
  },
  row: {
    flex: 1,
    backgroundColor: Colors.cloud,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
    margin: 10,
    padding: 5,
    paddingVertical: 10,
    borderRadius: Metrics.smallMargin
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.medium
  },
  label2: {
    textAlign: 'center',
    color: Colors.ricePaper,
    fontSize: Fonts.size.small
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.baseMargin
  },
  cardHeaderContent: {
    justifyContent: 'flex-start'
  },
  cardButton: {
    backgroundColor: Colors.facebook,
    //margin: Metrics.baseMargin,
    width: 80,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardName: {
    ...Fonts.style.h5,
    fontWeight: 'bold',
    color: Colors.snow,
    marginBottom: Metrics.smallMargin
  },
  tagLabGroup: {
    flexDirection: 'row'
  },
  tagLab: {
    ...Fonts.style.normal,
    color: Colors.snow,
    marginRight: Metrics.smallMargin
  },
  cardHeaderLab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-start'
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cardInfoLab: {

  },
  facebook: {
    backgroundColor: '#3b5998'
  },
  youtube: {
    backgroundColor: '#cd201f'
  },
  twitter: {
    backgroundColor: '#55acee'
  },
  weChat: {
    backgroundColor: '#09b83e'
  },
  instagram: {
    backgroundColor: '#e4405f'
  }
})
