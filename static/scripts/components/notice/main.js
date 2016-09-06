import React from 'react'
import Header from '../header/main'

import Fetch from '../../utils/fetch'

export default class Notice extends React.Component{

    static contextTypes = {
        router:React.PropTypes.object
    }

    constructor(props){
        super(props);

        this.onMounted;
        this.getNotice = this.getNotice.bind(this);
        this.getNoticeDay = this.getNoticeDay.bind(this);
    }

    componentDidMount(){
        this.getNotice();
        this.onMounted=true;
    }

    componentWillUnmount(){
        this.onMounted=false;
    }

    getNoticeDay(date){
        let nowDate = new Date().getTime();
        let creatDate = date*1000;
        if (nowDate-(7*86400000)<creatDate) {
            return Math.floor((nowDate-creatDate)/86400000)+"天前";
        };
        if (nowDate-(30*86400000)<creatDate) {
            return Math.floor((nowDate-creatDate)/(7*86400000))+"周前";
        };
        if (nowDate-(365*86400000)<creatDate) {
            return Math.floor((nowDate-creatDate)/(30*86400000))+"月前";
        };
    }

    getNotice(){
        Fetch({
            type:'POST',
            url:__Url__+"/app/message/list",
            mode:"cors",
            data:{
                offset:"0",
                num:"99"
            }
        }).then((res)=>{
            if (!this.onMounted) return ;
            this.setState({
                noticeData:res.data.message
            })
        });
    }

    render() {
        return (
          <div>
            <Header title="广播" LeftBtn="返回" LeftBtnFunc={ this.context.router.goBack } />
            <div className="noticeBody">
                <ul>
                    12313212
                </ul>
            </div>
          </div>
        )
    }
}
