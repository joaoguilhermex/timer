import React, {Component} from "react";
import './style.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            number: 0,
            btnText: 'GO' 
        }
        this.timer = null;
        this.go = this.go.bind(this);
        this.clean = this.clean.bind(this);
    }

    go(){

        let state = this.state;

        if(this.timer != null){
            clearInterval(this.timer);
            this.timer = null;
            state.btnText = 'GO';
        }else{
            this.timer = setInterval(() =>{
                let state = this.state;
                state.number += 0.1;
                this.setState(state);
            }, 100)
            state.btnText = 'PAUSE';
        }
        this.setState(state);
    }

    clean(){
        if(this.timer != null){
            clearInterval(this.timer);
            this.timer = null;
        }

        let state = this.state;
        state.number = 0;
        state.btnText = 'GO';
        this.setState(state);
    }

    render(){
        return(
            <div className="container">
                <img src={require('./assets/timer.png')} className="img"/>
                <a className="timer">{this.state.number.toFixed(1)}</a>
                <div className="areaBtn">
                    <a className="btn" onClick={this.go}>{this.state.btnText}</a>
                    <a className="btn" onClick={this.clean}>CLEAN</a>
                </div>
            </div>
        );
    }
}

export default App;