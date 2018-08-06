import React from 'react'
import { connect } from 'react-redux'
import {
  getCompanyLineList,
  getCompanyDetail,
  changeCompanyDetail
} from 'src/app/actions/companyAction'

import Header from '../header/main'
// import InfoDetail from '../information/infoDetail'

import '../../../styles/company/companyDetail.less'
import '../../../styles/information/information.less'

class CompanyDetail extends React.Component {
  constructor(props) {
    super(props)

    this.showDetail = this.showDetail.bind(this)
    this.getCompanyDetail = this.getCompanyDetail.bind(this)
  }

  getCompanyDetail(res) {
    if (res.status_code === '200') {
      this.setState({
        type: 'block',
        DetailList: res.data
      })
    }
  }

  showDetail(data) {
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
    this.props.dispatch(changeCompanyDetail('hidden'))
  }

  render() {
    let { DetailList, CompanyDetailData, CompanyDetailType } = this.props
    console.log(CompanyDetailData)
    CompanyDetailData = null
    return (
      <div className={CompanyDetailType == 'hidden' ? 'hidden' : 'InfoDetail'}>
        <Header
          title="公司简介"
          LeftBtn="x"
          LeftBtnFunc={this.closeModal.bind(this)}
        />
        <div className="companyDetailBody">
          <div className="companyDetailBodyImg">
            <img
              className="Imgshow"
              src={CompanyDetailData ? CompanyDetailData.image : ''}
            />
            <img
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
                  ? CompanyDetailData.priviledge == 'public'
                    ? '公开'
                    : '私密'
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
              CompanyDetailType == 'hidden' ? 'hidden' : 'DetailBodyContent'
            }
            controls="controls"
            src="http://file.ih5.cn/files/78655/17007/34cff1.mp4"
          />
        </div>
      </div>
    )
  }
}

function selectState(state, type) {
  switch (type) {
    case 'CompanyDetailData':
      if (state.Company) {
        return state.Company.CompanyData
      }
      return state
    case 'CompanyDetailType':
      if (state.CompanyType) {
        return state.CompanyType
      }
      return 'hidden'
  }
}

function select(state) {
  return {
    CompanyDetailData: selectState(state.CompanyReducer, 'CompanyDetailData'),
    CompanyDetailType: selectState(state.CompanyReducer, 'CompanyDetailType')
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(CompanyDetail)
