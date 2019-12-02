import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Actions from 'src/app/actions/actions'
// import CompanyDetail from './companyDetail'

export default function Company(props) {
  const { list, filters } = useSelector(state => ({
    list: state.company.list,
    filters: state.company.filters
  }))
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(
      Actions.common.changeHeader({
        title: '公司',
        leftBtn: '广告',
        handleLeft: () => history.push('/notice'),
        rightBtn: '',
        handleRight: () => {}
      })
    )
    dispatch(Actions.company.getCompanyLineList(filters))
  }, [dispatch, filters, history])

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
