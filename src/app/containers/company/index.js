import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Actions from 'src/app/actions/actions'
import './index.scss'

function Title() {
  return <span className="header-left">公司</span>
}

export default function Company() {
  const { list, filters } = useSelector(state => ({
    list: state.company.list,
    filters: state.company.filters
  }))
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(
      Actions.common.changeHeader({
        leftBtn: () => <Title />,
        rightBtn: ''
      })
    )
    dispatch(Actions.company.getCompanyLineList(filters))
  }, [dispatch, filters, history])

  const showCompanyDetail = index => () => {
    history.push({ pathname: '/company_detail', state: { index } })
  }

  return (
    <div className="company-container">
      {_.map(list, (v, k) => {
        return (
          <div
            key={k}
            className="conpany-list-item"
            onClick={showCompanyDetail(k)}
          >
            <div className="logo-box">
              <img className="company-logo" src={v.image} alt="" />
            </div>
            <div className="company-info-box">
              {/* <div className="companyContent">
                <span className="companyText">{v.user.nick_name}</span>
                <span className="companyText">{v.title}</span>
                <span className="companyText">
                  热招职位: <b className="position">前端开发</b>
                </span>
              </div> */}
              <div className="company-title">前端工程师</div>
              <div className="company-introduce">
                <span className="intro-item">腾讯科技</span>
                <span className="intro-item">D轮</span>
              </div>
              <div className="company-info">
                <span className="text-box">深圳</span>
                <span className="text-box">3-5年</span>
                <span className="text-box">本科</span>
              </div>
              <div className="company-position">
                <span>热招：前端开发工程师等岗位 </span>
                <span className="icon">></span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
