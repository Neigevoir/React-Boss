import { useEffect } from 'react'

export default function Information(props) {
  useEffect(() => {
    // getPrivateMessageList()
  }, [])

  const { InformationData, InformationType } = props
  return (
    <div className="Infomation" ref="Infomation">
      <ul className="InfoList">
        <div className="InfoTip">
          <div className="Tip">
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
                  <li key={k}>
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
  )
}
