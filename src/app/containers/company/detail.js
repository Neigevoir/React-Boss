import React from 'react'
import { connect } from 'react-redux'
// import Actions from 'src/app/actions/actions'
import withoutFooter from 'src/app/components/HOC/without_footer'
import './index.scss'
// import '../../../styles/information/information.less'

function getState(state) {
  const { list, filters } = state.company
  return {
    list,
    filters
  }
}
@connect(getState)
@withoutFooter
export default class CompanyDetail extends React.Component {
  getCompanyDetail = res => {
    if (res.status_code === '200') {
      this.setState({
        type: 'block',
        DetailList: res.data
      })
    }
  }

  showDetail = data => {
    this.setState(
      {
        DetailtData: data
      },
      () => {
        // CompanyAction.getCompanyDetail({uid:data.user.uid});
      }
    )
  }

  closeModal() {
    // this.props.dispatch(changeCompanyDetail('hidden'))
  }

  render() {
    let { CompanyDetailData, CompanyDetailType } = this.props
    CompanyDetailData = null
    return (
      <div className={CompanyDetailType === 'hidden' ? 'hidden' : 'InfoDetail'}>
        <div className="companyDetailBody">
          <div className="companyDetailBodyImg">
            <img
              alt=""
              className="Imgshow"
              src={CompanyDetailData ? CompanyDetailData.image : ''}
            />
            <img
              alt=""
              className="ImgAvator"
              src={CompanyDetailData ? CompanyDetailData.user.picture : ''}
            />
          </div>
          <div className="companyDetailBodytitle">
            <h4>{CompanyDetailData ? CompanyDetailData.title : ''}</h4>
            <h5>{CompanyDetailData ? CompanyDetailData.user.email : ''}</h5>
            <div className="detailsomeTitle">
              <span>
                {CompanyDetailData ? CompanyDetailData.user.nick_name : ''}
              </span>
              <span>
                {CompanyDetailData
                  ? CompanyDetailData.priviledge === 'public' ? '公开' : '私密'
                  : ''}
              </span>
              <span>
                {CompanyDetailData ? CompanyDetailData.play_count : ''}
              </span>
            </div>
          </div>
          <div className="companydescription">
            <div className="BottomHR" />
            公司介绍
            <div className="BottomHR" />
            <div className="companydescriptionBody">
              {CompanyDetailData ? CompanyDetailData.description : ''}
            </div>
          </div>
          <video
            ref="video"
            className={
              CompanyDetailType === 'hidden' ? 'hidden' : 'DetailBodyContent'
            }
            controls="controls"
            src="https://file.ih5.cn/files/78655/17007/34cff1.mp4"
          />
        </div>
      </div>
    )
  }
}
