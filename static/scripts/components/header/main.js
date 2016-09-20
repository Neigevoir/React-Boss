import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

export default class Header extends React.Component{

    static contextTypes = {
        router:React.PropTypes.object
    };

    static defaultProps = {
        title: '',
        titleHidden:'false',
        LeftBtn: '',
        LeftBtnFunc:()=>{},
        RightBtn:'',
        RightBtnFunc:()=>{}
    };

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        titleHidden:React.PropTypes.string.isRequired,
        LeftBtn: React.PropTypes.string.isRequired,
        LeftBtnFunc: React.PropTypes.func.isRequired,
        RightBtn: React.PropTypes.string.isRequired,
        RightBtnFunc:React.PropTypes.func.isRequired,
    };

    state = {
        type:"position",
        content:"",
        opacity:0
    };

    constructor(props){
        super(props);

        this.addOpacity = this.addOpacity.bind(this);
    }

    addOpacity(num){
        this.refs.body.style = `background-color: rgba(83,202,189,${num})`;
    }

    setStateType(newType){
        this.setState({
            type:newType
        })
    }

    render() {
        return (
            <div  ref="body" className={ this.props.titleHidden=='true' ? "titleFiexd titleHidden" : "title"}>
                <span className="notice" onClick={ this.props.LeftBtnFunc }>
                    { this.props.LeftBtn }
                </span>
                <span>{this.props.title}</span>
                <span className="search" onClick={ this.props.RightBtnFunc } >
                    <b>{this.props.RightBtn}</b>
                </span>
            </div>
        )
    }
}
