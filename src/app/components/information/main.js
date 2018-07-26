import React from 'react'
import { connect } from 'react-redux'

import InformationAction from '../../actions/informationAction'

import Loading from '../ui/loading'
import Header from '../header/main'

class Information extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props) {
    super(props)

    this.getFollowing = this.getFollowing.bind(this)
    this.showInfoDetail = this.showInfoDetail.bind(this)
    this.LeftBtnFunc = this.LeftBtnFunc.bind(this)
    this.showUserFans = this.showUserFans.bind(this)
    this.getPrivateMessageList = this.getPrivateMessageList.bind(this)
    this._initialize = this._initialize.bind(this)
  }

  componentWillMount() {
    this.getPrivateMessageList()
  }

  componentDidMount() {
    this._initialize()
  }

  componentWillUnmount() {}

  _initialize() {
    this.refs.Infomation.style.height = window.screen.availHeight - 50 + 'px'
  }

  getPrivateMessageList() {
    this.props.dispatch(InformationAction.getPrivateMessageList())
  }

  getFollowing(res) {
    this.refs.loading.hidden()
    function sortData(a, b) {
      return b.message.created_at - a.message.created_at
    }
    this.setState({
      informationData: res.data.sort(sortData)
    })
  }

  showInfoDetail(res) {
    this.refs.InfoDetail.setState(
      {
        type: 'show',
        data: res
      },
      () => {
        this.refs.InfoDetail.getUserMessage()
      }
    )
  }

  LeftBtnFunc() {
    this.context.router.push('notice')
  }

  showUserFans() {
    this.refs.InformationOther.showUserFans()
  }

  render() {
    let { InformationData, InformationType } = this.props
    return (
      <div>
        <Header title="消息" LeftBtn="广播" LeftBtnFunc={this.LeftBtnFunc} />
        <Loading
          type={InformationType == 'FETCHING_POSTING' ? 'block' : 'hidden'}
        />
        <div className="Infomation" ref="Infomation">
          <ul className="InfoList">
            <div className="InfoTip">
              <div className="Tip" onClick={this.showUserFans}>
                <img
                  className="avator"
                  src="../../../static/images/collect.png"
                />
                <span className="Tip_text">收藏我</span>
              </div>
              <div className="Tip">
                <img
                  className="avator"
                  src={
                    InformationData
                      ? InformationData[InformationData.length - 1].user.picture
                      : '../../../static/images/collect.png'
                  }
                />
                <span className="Tip_text">
                  {InformationData ? `${InformationData.length}人看过我` : ''}
                </span>
              </div>
              <div className="Tip">
                <img
                  className="avator"
                  src="../../../static/images/collect.png"
                  alt=""
                />
                <span className="Tip_text">个新职位</span>
              </div>
            </div>
            <div className="clearfix" />
            <h4 className="TipTitle">最近联系的Boss</h4>
            <ul className="Info">
              {InformationData
                ? InformationData.map((v, k) => {
                    return (
                      <li key={k} onClick={this.showInfoDetail.bind(null, v)}>
                        <div>
                          <img
                            className="avator"
                            src={
                              v.user.picture
                                ? v.user.picture
                                : '/sites/default/files/user-pictures/user-default-picture.jpg'
                            }
                            alt=""
                          />
                          <div className="InfoContent">
                            <span className="Tip_text">
                              <span>{v.user.nick_name}</span>
                              <a className="fontDefaultColor">@{v.user.name}</a>
                              <span />
                            </span>
                            <span className="Tip_text">
                              {v.message ? v.message.message : '你好'}
                            </span>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </li>
                    )
                  })
                : ''}
            </ul>
          </ul>
        </div>
      </div>
    )
  }
}

function selectState(state, type) {
  switch (type) {
    case 'InformationData':
      if (state.InformationData) {
        return state.InformationData.data
      }
      return null
    case 'InformationType':
      if (state.InformationType) return state.InformationType
      return null
    default:
      return null
  }
}

function select(state) {
  return {
    InformationData: selectState(state.InformationReducer, 'InformationData'),
    InformationType: selectState(state.InformationReducer, 'InformationType')
  }
}

export default connect(select)(Information)
