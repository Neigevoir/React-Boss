import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Actions from 'src/app/actions/actions'
import './index.scss'

export default function User(props) {
  const customer = useSelector(state => state.customer)

  useEffect(() => {
    props.dispatch(
      Actions.common.changeHeader({
        title: '我的',
        leftBtn: '广告',
        handleLeft: gotoNotice,
        rightBtn: '设置',
        handleRight: () => {}
      })
    )
    return () => {
      window.removeEventListener('scroll', changeOpacity)
    }
  }, [])

  const gotoNotice = () => props.history.push('/notice')

  // const _initialize = () => {
  //   this.refs.userAvator.style.width = window.screen.availWidth + 'px'
  //   this.refs.userAvator.style.height = window.screen.availWidth * 0.625 + 'px'
  //   let srcollY = window.screen.availWidth * 0.625 - 50
  //   window.addEventListener('scroll', changeOpacity(srcollY))
  // }

  const changeOpacity = srcollY => () => {
    // if (this.refs.header)
    //   this.refs.header.addOpacity(parseFloat(window.pageYOffset / srcollY))
  }

  // const showSettings = () => {
  //   this.refs.Settings.showState()
  // }

  return (
    <div ref="body" className="userBody">
      <div className="userTop">
        <img
          alt=""
          ref="userAvator"
          className="userAvator"
          src={require('src/assets/images/beaut.jpg')}
        />
        <div className="user">
          <div className="userData">
            <div className="userState">
              <img alt="avator" src={`http://${customer.picture}`} />
              <div className="State">
                <h5>{customer.name}</h5>
                <span>编辑100%</span>
                <span>{customer.state}</span>
              </div>
              <div className="clearfix" />
            </div>
            <div className="userPoint">
              <h4>
                {customer.point}
                <img alt="" src={require('src/assets/images/GoldCoin.png')} />
              </h4>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
      <ul className="navList">
        <li>
          <div className="userOpreation userOpreationBorder">
            <img alt="" src={require('src/assets/images/message.png')} />
            <div className="operationText">
              <span>{customer.contact}</span>
              <span>沟通过</span>
            </div>
            <div className="clearfix" />
          </div>
          <div className="userOpreation">
            <img alt="" src={require('src/assets/images/collect.png')} />
            <div className="operationText">
              <span>{customer.collect}</span>
              <span>收藏过</span>
            </div>
          </div>
          <div className="clearfix" />
        </li>
        <li>
          <div className="PointOperation">
            <div className="floatLeft">
              <img alt="" src={require('src/assets/images/file.png')} />
              <span>上传附件简历</span>
            </div>
            <div className="floatRight">
              <span>送20积分</span>
              <img alt="" src={require('src/assets/images/right.png')} />
            </div>
            <div className="clearfix" />
          </div>
        </li>
        <li>
          <div className="Operation">
            <div className="floatLeft">
              <img alt="" src={require('src/assets/images/task.png')} />
              <span>积分任务</span>
            </div>
            <div className="floatRight">
              <span>获得积分越多，推荐排名越高</span>
              <img alt="" src={require('src/assets/images/right.png')} />
            </div>
            <div className="clearfix" />
          </div>
          <div className="Operation">
            <div className="floatLeft">
              <img alt="" src={require('src/assets/images/trophy.png')} />
              <span>成就</span>
            </div>
            <div className="floatRight">
              <span />
              <img alt="" src={require('src/assets/images/right.png')} />
            </div>
            <div className="clearfix" />
          </div>
          <div className="Operation">
            <div className="floatLeft">
              <img alt="" src={require('src/assets/images/bean.png')} />
              <span>真豆</span>
            </div>
            <div className="floatRight">
              <span>0</span>
              <img alt="" src={require('src/assets/images/right.png')} />
            </div>
            <div className="clearfix" />
          </div>
          <div className="Operation">
            <div className="floatLeft">
              <img alt="" src={require('src/assets/images/money.png')} />
              <span>零钱</span>
            </div>
            <div className="floatRight">
              <span>0元</span>
              <img alt="" src={require('src/assets/images/right.png')} />
            </div>
            <div className="clearfix" />
          </div>
        </li>
        <li>
          <div className="Operation">
            <div className="floatLeft">
              <img alt="" src={require('src/assets/images/case.png')} />
              <span>我的道具</span>
            </div>
            <div className="floatRight">
              <span>
                拥有：
                <b>0</b>
              </span>
              <span>
                使用中:
                <b>0</b>
              </span>
              <img alt="" src={require('src/assets/images/right.png')} />
            </div>
            <div className="clearfix" />
          </div>
        </li>
        <li>
          <div className="Operation">
            <div className="floatLeft">
              <img alt="" src={require('src/assets/images/case.png')} />
              <span>我的道具</span>
            </div>
            <div className="floatRight">
              <span>
                拥有：
                <b>0</b>
              </span>
              <span>
                使用中:
                <b>0</b>
              </span>
              <img alt="" src={require('src/assets/images/right.png')} />
            </div>
            <div className="clearfix" />
          </div>
        </li>
        <li>
          <div className="Operation">
            <div className="floatLeft">
              <img alt="" src={require('src/assets/images/case.png')} />
              <span>我的道具</span>
            </div>
            <div className="floatRight">
              <span>
                拥有：
                <b>0</b>
              </span>
              <span>
                使用中:
                <b>0</b>
              </span>
              <img alt="" src={require('src/assets/images/right.png')} />
            </div>
            <div className="clearfix" />
          </div>
        </li>
      </ul>
    </div>
  )
}
