import { useEffect } from 'react'
import { connect } from 'react-redux'

import InformationAction from '../../actions/informationAction'

import Loading from '../ui/loading'
import Header from '../header/main'

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

function Information(props) {
  useEffect(() => {
    getPrivateMessageList()
    _initialize()
  }, [])

  const _initialize = () => {
    this.refs.Infomation.style.height = window.screen.availHeight - 50 + 'px'
  }

  const getPrivateMessageList = () => {
    this.props.dispatch(InformationAction.getPrivateMessageList())
  }

  const getFollowing = res => {
    this.refs.loading.hidden()
    function sortData(a, b) {
      return b.message.created_at - a.message.created_at
    }
    this.setState({
      informationData: res.data.sort(sortData)
    })
  }

  const showInfoDetail = res => {
    // this.refs.InfoDetail.setState(
    //   {
    //     type: 'show',
    //     data: res
    //   },
    //   () => {
    //     this.refs.InfoDetail.getUserMessage()
    //   }
    // )
  }

  const LeftBtnFunc = () => {
    this.context.router.push('notice')
  }

  const showUserFans = () => {
    this.refs.InformationOther.showUserFans()
  }

  let { InformationData, InformationType } = props
  return (
    <div>
      <Header title="消息" LeftBtn="广播" LeftBtnFunc={LeftBtnFunc} />
      <Loading
        type={InformationType === 'FETCHING_POSTING' ? 'block' : 'hidden'}
      />
      <div className="Infomation" ref="Infomation">
        <ul className="InfoList">
          <div className="InfoTip">
            <div className="Tip" onClick={showUserFans}>
              <img
                alt=""
                className="avator"
                src="../../../static/images/collect.png"
              />
              <span className="Tip_text">收藏我</span>
            </div>
            <div className="Tip">
              <img
                className="avator"
                alt=""
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
                    <li key={k} onClick={showInfoDetail(v)}>
                      <div>
                        <img
                          className="avator"
                          src={
                            v.user.picture ||
                            '/sites/default/files/user-pictures/user-default-picture.jpg'
                          }
                          alt=""
                        />
                        <div className="InfoContent">
                          <span className="Tip_text">
                            <span>{v.user.nick_name}</span>
                            <span className="fontDefaultColor">
                              @{v.user.name}
                            </span>
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
