import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html
import LoanActions from '../Redux/LoanRedux'

// Styles
import styles from './Styles/LoanScreenStyle'

class LoanScreen extends React.PureComponent {

  /* ***********************************************************
   * STEP 1
   * This is an array of objects with the properties you desire
   * Usually this should come from Redux mapStateToProps
   *************************************************************/
  state = {
    loan: this.props.data,
    tagStatus: false,
    typeStatus: false
  }

  componentDidMount () {
    let {checkId, tagId, checks, tags, data} = this.props
    if (tags.length == 0) {
      this.props.getTags()
    }
    if (checks.length == 0) {
      this.props.getChecks()
    }
    if (data.length == 0) {
      this.props.getLoan(checkId, tagId)
    }
  }

  changeStatus (name) {
    if (!name) {
      this.setState({'typeStatus': false, 'tagStatus': false})
    } else {
      let otherStatus = name != 'typeStatus' ? 'typeStatus' : 'tagStatus'
      this.setState({[name]: !this.state[name], [otherStatus]: false})
    }
  }

  /* ***********************************************************
   * STEP 2
   * `renderRow` function. How each cell/row should be rendered
   * It's our best practice to place a single component here:
   *
   * e.g.
   return <MyCustomCell title={item.title} description={item.description} />
   *************************************************************/

  renderRow ({item}) {
    return (
      <View style={styles.row}>
        <View style={styles.cardHeader}>
          <View style={styles.cardHeaderLab}>
            <Image style={{width: 60, height: 60, borderRadius: 5, marginRight: 10}} source={{uri: item.logo}}/>
            <View style={styles.cardHeaderContent}>
              <Text style={styles.cardName}>{item.name}</Text>
              <View style={styles.tagLabGroup}>
                {item.label[1] && <Text style={[styles.tagLab, styles.facebook]}>身</Text> }
                {item.label[2] && <Text style={[styles.tagLab, styles.youtube]}>学</Text> }
                {item.label[3] && <Text style={[styles.tagLab, styles.twitter]}>房</Text> }
                {item.label[4] && <Text style={[styles.tagLab, styles.weChat]}>车</Text> }
                {item.label[5] && <Text style={[styles.tagLab, styles.instagram]}>号</Text> }
              </View>
            </View>
          </View>
          <View style={styles.cardButton}>
            <Text style={styles.titleText}>立即申请</Text>
          </View>
        </View>
        <View style={styles.cardInfo}>
          <View style={styles.cardInfoLab}>
            <Text style={styles.label}>{item.interest}</Text>
            <Text style={styles.label2}>利率</Text>
          </View>
          <View style={[styles.separator, {width: 1, height: 30}]}/>
          <View>
            <Text style={styles.label}>{item.auditTime}</Text>
            <Text style={styles.label2}>审批周期</Text>
          </View>
          <View style={[styles.separator, {width: 1, height: 30}]}/>
          <View>
            <Text style={[styles.label, {color: '#FFFC00'}]}>{item.maxmoney}</Text>
            <Text style={styles.label2}>最高金额</Text>
          </View>

        </View>
      </View>
    )
  }

  arrow = (name) => {
    if (this.state[name]) {
      return <Icon name='ios-arrow-down' size={10}/>
    } else {
      return <Icon name='ios-arrow-up' size={10}/>
    }
  }
  /* ***********************************************************
   * STEP 3
   * Consider the configurations we've set below.  Customize them
   * to your liking!  Each with some friendly advice.
   *************************************************************/
  // Render a header?
  renderHeader = () =>
    <View>
      <View style={styles.sectionHeader}>
        <TouchableOpacity style={styles.headerLabel}><Text onPress={() => this.changeStatus()} style={styles.headerText}>全部</Text></TouchableOpacity>
        <TouchableOpacity style={styles.headerLabel}><Text onPress={() => this.changeStatus('tagStatus')}
                                                           style={styles.headerText}>金额区间 {this.arrow('tagStatus')}</Text></TouchableOpacity>
        <TouchableOpacity style={styles.headerLabel}><Text onPress={() => this.changeStatus('typeStatus')}
                                                           style={styles.headerText}>类型 {this.arrow('typeStatus')}</Text></TouchableOpacity>
      </View>
      {this.state.tagStatus && <View style={styles.sectionHeaderBox}>
        <TouchableOpacity style={styles.headerButton}><Text style={styles.headerText}>aaaa</Text></TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}><Text style={styles.headerText}>aaaa</Text></TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}><Text style={styles.headerText}>aaaa</Text></TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}><Text style={styles.headerText}>aaaa</Text></TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}><Text style={styles.headerText}>aaaa</Text></TouchableOpacity>
      </View>}
      {this.state.typeStatus && <View style={styles.sectionHeaderBox}>
        <TouchableOpacity style={styles.headerButton}><Text style={styles.headerText}>bbbb</Text></TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}><Text style={styles.headerText}>bbbb</Text></TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}><Text style={styles.headerText}>bbbb</Text></TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}><Text style={styles.headerText}>bbbb</Text></TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}><Text style={styles.headerText}>bbbb</Text></TouchableOpacity>
      </View>}
    </View>

  // Render a footer?
  renderFooter = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Footer - </Text>

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
    <Text style={styles.label}> - ~~~~~ - </Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.state.loan}
          renderItem={this.renderRow}
          numColumns={1}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListHeaderComponent={this.renderHeader()}
          //ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          //ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const {loan: {checkId, tagId, checks, tags, data}} = state
  return {
    // ...redux state to props here
    checkId, tagId, checks, tags, data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLoan: (tagId, checkId) => dispatch(LoanActions.loanRequest(tagId, checkId)),
    getTags: () => dispatch(LoanActions.tagsRequest()),
    getChecks: () => dispatch(LoanActions.checksRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoanScreen)
