import React from 'react'
import { connect } from 'react-redux'
import Actions from 'src/app/actions/actions'
// import CompanyDetail from './companyDetail'

function getState(state) {
  const { list, filters } = state.company
  return {
    list,
    filters
  }
}

@connect(getState)
export default class Company extends React.Component {
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
  }

  componentDidMount() {
    this.props.dispatch(
      Actions.common.changeHeader({
        title: '公司',
        leftBtn: '广告',
        handleLeft: this.gotoNotice,
        rightBtn: '',
        handleRight: () => {}
      })
    )
    this.props.dispatch(Actions.company.getCompanyLineList(this.props.filters))
  }

  gotoNotice = () => this.props.history.push('/notice')

  _initialize = () => {
    this.refs.companyList.style.height = this.ScrollHeight //用作overflow
    this.CorperationaddEvent() //增加Touch事件
  }

  CorperationaddEvent = () => {
    let startY, moveY, endY
    this.refs.companyList.addEventListener('touchstart', e => {
      startY = e.touches[0].pageY
      moveY = 0
    })
    this.refs.companyList.addEventListener('touchmove', e => {
      endY = e.changedTouches[0].pageY
      moveY = endY - startY
      if (moveY > 0 && this.ScrollTop === 0) {
        e.preventDefault()
        this.refs.companyList.style.webkitTransform =
          'translateY(' + moveY + 'px)'
      }
    })
    this.refs.companyList.addEventListener('touchend', e => {
      if (moveY > 0 && this.ScrollTop === 0) {
        this.refs.companyList.setAttribute('class', 'companyList transition')
        this.refs.companyList.style.webkitTransform = 'translateY(' + 0 + 'px)'
      }
    })
    this.refs.companyList.addEventListener('webkitTransitionEnd', () => {
      this.refs.companyList.setAttribute('class', 'companyList')
      if (moveY > parseInt(this.ScrollHeight, 10) / 9) {
        this.onScroll()
      }
    })
    this.refs.companyList.addEventListener('scroll', e => {
      this.ScrollTop = e.target.scrollTop
    })
  }

  onScroll = () => {
    if (this.ScrollTop === 0) {
      this.CompanyFromData.num += 16
      Actions.company.getCompanyLineList(this.CompanyFromData)
    }
  }

  getCompanyLineList = res => {
    this.setState({
      CompanyData: res.data.reverse()
    })
  }

  showCompanyDetail = index => () => {
    this.props.history.push({
      pathname: '/company_detail',
      state: {
        index
      }
    })
  }

  render() {
    const { list } = this.props
    return (
      <ul ref="companyList" className="companyList">
        {!_.isEmpty(list) &&
          list.map((v, k) => {
            return (
              <li key={k} onClick={this.showCompanyDetail(k)}>
                <div className="companys">
                  <img className="companyPic" src={v.image} alt="" />
                  <div className="companyPro">
                    <img
                      alt=""
                      className="companyLogo"
                      src={v.image || require('src/assets/images/logo.jpg')}
                    />
                    <div className="companyContent">
                      <span className="companyText">{v.user.nick_name}</span>
                      <span className="companyText">{v.title}</span>
                      <span className="companyText">
                        热招职位: <b className="position">前端开发</b>
                      </span>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
              </li>
            )
          })}
      </ul>
    )
  }
}
