import React from 'react'
import { connect } from 'react-redux'
import { is } from 'immutable'

import CompanyAction from '../../actions/companyAction'

import Loading from '../ui/loading'
import CompanyDetail from './companyDetail'
import Header from '../header/main'

class Company extends React.Component {
  constructor(props) {
    super(props)
    this.CompanyFromData = {
      offset: 0,
      num: 16,
      fid: 0,
      uid: 0,
      like: 0,
      type: 'recommend'
    }

    this.ScrollTop = 0
    this.ScrollHeight = window.screen.availHeight - 50 + 'px' //滑动列表的高度用作overflow

    this.getCompanyLineList = this.getCompanyLineList.bind(this)
    this.onScroll = this.onScroll.bind(this)
    this.CorperationaddEvent = this.CorperationaddEvent.bind(this)
    this.LeftBtnFunc = this.LeftBtnFunc.bind(this)
    this.showCompanyDetail = this.showCompanyDetail.bind(this)
    this._initialize = this._initialize.bind(this)
  }

  componentDidMount() {
    this._initialize()
    this.props.dispatch(CompanyAction.getCompanyLineList(this.CompanyFromData))
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !(this.props === nextProps || is(this.props, nextProps)) ||
      !(this.state === nextState || is(this.state, nextState))
    )
  }

  componentWillUnmount() {}

  _initialize() {
    this.refs.companyList.style.height = this.ScrollHeight //用作overflow
    this.CorperationaddEvent() //增加Touch事件
  }

  CorperationaddEvent() {
    let startY, moveY, endY
    this.refs.companyList.addEventListener('touchstart', e => {
      startY = e.touches[0].pageY
      moveY = 0
    })
    this.refs.companyList.addEventListener('touchmove', e => {
      endY = e.changedTouches[0].pageY
      moveY = endY - startY
      if (moveY > 0 && this.ScrollTop == 0) {
        e.preventDefault()
        this.refs.companyList.style.webkitTransform =
          'translateY(' + moveY + 'px)'
      }
    })
    this.refs.companyList.addEventListener('touchend', e => {
      if (moveY > 0 && this.ScrollTop == 0) {
        this.refs.companyList.setAttribute('class', 'companyList transition')
        this.refs.companyList.style.webkitTransform = 'translateY(' + 0 + 'px)'
      }
    })
    this.refs.companyList.addEventListener('webkitTransitionEnd', () => {
      this.refs.companyList.setAttribute('class', 'companyList')
      if (moveY > parseInt(this.ScrollHeight) / 9) {
        this.onScroll()
      }
    })
    this.refs.companyList.addEventListener('scroll', e => {
      this.ScrollTop = e.target.scrollTop
    })
  }

  onScroll() {
    if (this.ScrollTop == 0) {
      this.CompanyFromData.num += 16
      CompanyAction.getCompanyLineList(this.CompanyFromData)
    }
  }

  getCompanyLineList(res) {
    this.setState({
      CompanyData: res.data.reverse()
    })
  }

  LeftBtnFunc() {
    this.context.router.push('notice')
  }

  showCompanyDetail(data) {
    this.props.dispatch(CompanyAction.changeCompanyDetail('show'))
  }

  render() {
    let { CompanyData, CompanyType } = this.props
    return (
      <div>
        <Header title="公司" LeftBtn="广播" LeftBtnFunc={this.LeftBtnFunc} />
        <Loading
          type={CompanyType == 'FETCHING_POSTING' ? 'block' : 'hidden'}
        />
        <ul ref="companyList" className="companyList">
          {CompanyData
            ? CompanyData.data.map((v, k) => {
                return (
                  <li key={k} onClick={this.showCompanyDetail.bind(null, v)}>
                    <div className="companys">
                      <img className="companyPic" src={v.image} />
                      <div className="companyPro">
                        <img
                          className="companyLogo"
                          src={
                            v.image
                              ? v.image
                              : '../../../static/images/logo.jpg'
                          }
                        />
                        <div className="companyContent">
                          <span className="companyText">
                            {v.user.nick_name ? v.user.nick_name : ''}
                          </span>
                          <span className="companyText">
                            {v.title ? v.title : ''}
                          </span>
                          <span className="companyText">
                            热招职位：<b className="position">前端开发</b>
                          </span>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </li>
                )
              })
            : ''}
        </ul>
        <CompanyDetail />
      </div>
    )
  }
}

function selectState(state, type) {
  switch (type) {
    case 'CompanyData':
      if (state.Company) {
        return state.Company.CompanyData
      }
      return null
    case 'CompanyType':
      if (state.Company) return state.Company.CompanyType
      return 'hidden'
  }
}

function select(state) {
  return {
    CompanyData: selectState(state.CompanyReducer, 'CompanyData'),
    CompanyType: selectState(state.CompanyReducer, 'CompanyType')
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Company)
