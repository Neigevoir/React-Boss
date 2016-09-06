import React from 'react'

export default class Loading extends React.Component{

    state={
        type:"none"
    }

    constructor(props){
        super(props);
    }

    show(){
        this.setState({
            type:"block"
        });
    }

    hidden(){
        this.setState({
            type:"none"
        });
    }

    render() {
        return (
            <div id="loading-page" className={ this.state.type=="block" ? "loading animated fadeIn8" : "hidden" }>
                <div className="loader-middle">
                    <div className="loader">Loading...</div>
                </div>
            </div>
        )
    }
}
