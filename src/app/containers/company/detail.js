import { useEffect } from 'react'
import { connect } from 'react-redux'
import Actions from 'src/app/actions/actions'
import withoutFooter from 'src/app/components/HOC/without_footer'
import './index.scss'
// import '../../../styles/information/information.less'

function getState(state, props) {
  const { index } = props.history.location.state,
    { list } = state.company
  return {
    company: list[index]
  }
}

export default connect(getState)(withoutFooter(CompanyDetail))
function CompanyDetail(props) {
  useEffect(() => {
    props.dispatch(
      Actions.common.changeHeader({
        title: '公司',
        leftBtn: '返回',
        handleLeft: props.history.goBack,
        rightBtn: '',
        handleRight: () => {}
      })
    )
  }, [])

  const { company } = props
  if (_.isEmpty(company)) return null
  return (
    <div className="InfoDetail">
      <div className="companyDetailBody">
        <div className="companyDetailBodyImg">
          <img alt="" className="Imgshow" src={company.image} />
          <img alt="" className="ImgAvator" src={company.user.picture} />
        </div>
        <div className="companyDetailBodytitle">
          <h4>{company.title}</h4>
          <h5>{company.user.email}</h5>
          <div className="detailsomeTitle">
            <span>{company.user.nick_name}</span>
            <span>{company.priviledge === 'public' ? '公开' : '私密'}</span>
            <span>{company.play_count}</span>
          </div>
        </div>
        <div className="companydescription">
          <div className="BottomHR" />
          公司介绍
          <div className="BottomHR" />
          <div className="companydescriptionBody">{company.description}</div>
        </div>
        <video
          ref="video"
          className="DetailBodyContent"
          controls="controls"
          src="https://file.ih5.cn/files/78655/17007/34cff1.mp4"
        />
      </div>
    </div>
  )
}
