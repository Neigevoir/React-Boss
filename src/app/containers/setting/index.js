import { useState, useEffect } from 'react'
export default function Settings(props) {
  const [type, setType] = useState('hidden')

  useEffect(() => {
    // this.refs.body.style.webkitTransform = `translateX(${
    //   window.screen.width
    // }px)`
    // this.refs.corperationList.style.height = `${window.screen.height - 50}px`
  }, [])

  // const gotoChangePassword = () => {
  //   this.context.router.push('settings/changePassword')
  // }

  // const gotoChangeTelephone = () => {
  //   this.context.router.push('settings/changeTelephone')
  // }

  // const getLoginOut = () => {
  //   // UserAction.getLoginOut()
  // }

  // const showState = () => {
  //   this.transiton('show')
  //   this.refs.body.style.webkitTransform = `translateX(0px)`
  // }

  // const hiddenState = () => {
  //   this.transiton('hidden')
  //   this.refs.body.style.webkitTransform = `translateX(${window.screen.width}px)`
  // }

  // const transiton = state => {
  //   this.refs.body.setAttribute(
  //     'class',
  //     'passwordLogin SetttingsBody transition'
  //   )
  //   this.refs.body.addEventListener('webkitTransitionEnd', () => {
  //     this.setState(
  //       {
  //         type: state
  //       },
  //       () => {
  //         if (state === 'hidden')
  //           this.refs.body.setAttribute(
  //             'class',
  //             'passwordLogin SetttingsBody hidden'
  //           )
  //       }
  //     )
  //   })
  // }

  return (
    <div ref="body" className="passwordLogin SetttingsBody hidden">
      <div className="paddingTop">
        <ul ref="corperationList" className="setttingList">
          <li className="setttingLi setLiMarginTop setLiMarginBottom">
            <div className="Operation">
              <div className="floatLeft">
                <span>提醒设置</span>
              </div>
              <div className="floatRight">
                <img src={require('src/assets/images/right.png')} alt="" />
              </div>
              <div className="clearfix" />
            </div>
          </li>
          <li className="setttingLi setLiMarginBottom">
            <div className="Operation">
              <div className="floatLeft">
                <span>屏蔽公司</span>
              </div>
              <div className="floatRight">
                <img src={require('src/assets/images/right.png')} alt="" />
              </div>
              <div className="clearfix" />
            </div>
          </li>
          <li className="setttingLi" onClick={this.gotoChangeTelephone}>
            <div className="Operation">
              <div className="floatLeft">
                <span>修改手机号</span>
              </div>
              <div className="floatRight">
                <img src={require('src/assets/images/right.png')} alt="" />
              </div>
              <div className="clearfix" />
            </div>
          </li>
          <li
            className="setttingLi setLiMarginBottom"
            onClick={this.gotoChangePassword}
          >
            <div className="Operation">
              <div className="floatLeft">
                <span>修改密码</span>
              </div>
              <div className="floatRight">
                <img src={require('src/assets/images/right.png')} alt="" />
              </div>
              <div className="clearfix" />
            </div>
          </li>
          <li className="setttingLi">
            <div className="Operation">
              <div className="floatLeft">
                <span>意见反馈</span>
              </div>
              <div className="floatRight">
                <img src={require('src/assets/images/right.png')} alt="" />
              </div>
              <div className="clearfix" />
            </div>
          </li>
          <li className="setttingLi">
            <div className="Operation">
              <div className="floatLeft">
                <span>我要评价</span>
              </div>
              <div className="floatRight">
                <img src={require('src/assets/images/right.png')} alt="" />
              </div>
              <div className="clearfix" />
            </div>
          </li>
          <li className="setttingLi">
            <div className="Operation">
              <div className="floatLeft">
                <span>关于我们</span>
              </div>
              <div className="floatRight">
                <img src={require('src/assets/images/right.png')} alt="" />
              </div>
              <div className="clearfix" />
            </div>
          </li>
          <li className="setttingLi setLiMarginBottom">
            <div className="Operation">
              <div className="floatLeft">
                <span>切换身份</span>
              </div>
              <div className="floatRight">
                <span>牛人版</span>
                <img src={require('src/assets/images/right.png')} alt="" />
              </div>
              <div className="clearfix" />
            </div>
          </li>
          <li className="setttingLi setLiMarginBottom">
            <div className="Operation">
              <div className="floatLeft">
                <span>切换身份</span>
              </div>
              <div className="floatRight">
                <span>牛人版</span>
                <img src={require('src/assets/images/right.png')} alt="" />
              </div>
              <div className="clearfix" />
            </div>
          </li>
          <li className="setttingLi setLiMarginBottom setLastBottom">
            <div className="setloginOut" onClick={this.getLoginOut}>
              退出登录
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
