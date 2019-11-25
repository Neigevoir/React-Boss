import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Actions from 'src/app/actions/actions'
// import CompanyDetail from './companyDetail'

export default function Company(props) {
  const CompanyFromData = {
    offset: 0,
    num: 16,
    fid: 0,
    uid: 0,
    like: 0,
    type: 'recommend'
  }
  const ScrollTop = useRef(0)
  const ScrollHeight = useRef(window.screen.availHeight - 50 + 'px') //滑动列表的高度用作overflow
  const { list, filters } = useSelector(state => ({
    list: state.company.list,
    filters: state.company.filters
  }))
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    const gotoNotice = () => history.push('/notice')

    dispatch(
      Actions.common.changeHeader({
        title: '公司',
        leftBtn: '广告',
        handleLeft: gotoNotice,
        rightBtn: '',
        handleRight: () => {}
      })
    )
    dispatch(Actions.company.getCompanyLineList(filters))
  }, [])

  // const initialize = () => {
  //   this.refs.companyList.style.height = ScrollHeight.current //用作overflow
  //   CorperationaddEvent() //增加Touch事件
  // }

  // const CorperationaddEvent = () => {
  //   let startY, moveY, endY
  //   this.refs.companyList.addEventListener('touchstart', e => {
  //     startY = e.touches[0].pageY
  //     moveY = 0
  //   })
  //   this.refs.companyList.addEventListener('touchmove', e => {
  //     endY = e.changedTouches[0].pageY
  //     moveY = endY - startY
  //     if (moveY > 0 && this.ScrollTop === 0) {
  //       e.preventDefault()
  //       this.refs.companyList.style.webkitTransform =
  //         'translateY(' + moveY + 'px)'
  //     }
  //   })
  //   this.refs.companyList.addEventListener('touchend', e => {
  //     if (moveY > 0 && this.ScrollTop === 0) {
  //       this.refs.companyList.setAttribute('class', 'companyList transition')
  //       this.refs.companyList.style.webkitTransform = 'translateY(' + 0 + 'px)'
  //     }
  //   })
  //   this.refs.companyList.addEventListener('webkitTransitionEnd', () => {
  //     this.refs.companyList.setAttribute('class', 'companyList')
  //     if (moveY > parseInt(this.ScrollHeight, 10) / 9) {
  //       this.onScroll()
  //     }
  //   })
  //   this.refs.companyList.addEventListener('scroll', e => {
  //     this.ScrollTop = e.target.scrollTop
  //   })
  // }

  // const onScroll = () => {
  //   if (this.ScrollTop === 0) {
  //     this.CompanyFromData.num += 16
  //     Actions.company.getCompanyLineList(CompanyFromData)
  //   }
  // }

  // const getCompanyLineList = res => {
  //   this.setState({
  //     CompanyData: res.data.reverse()
  //   })
  // }

  const showCompanyDetail = index => () => {
    history.push({ pathname: '/company_detail', state: { index } })
  }

  return (
    <ul className="companyList">
      {_.map(list, (v, k) => {
        return (
          <li key={k} onClick={showCompanyDetail(k)}>
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
