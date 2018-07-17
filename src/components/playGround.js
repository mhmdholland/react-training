import React, { Component } from 'react';

class PlayGround extends Component {
    constructor(){
        super()
            this.state={
                title:"I &hearts; Rotterdam"
            }
    }
    update = (e) => {
        this.setState({title: e.target.value})
    }
    
        render(){
            return(
                <div style={{color: "red"}}>
                   <h1> {this.state.title} </h1>
                   {/* <input type="text" onChange={this.update}/> */}
                    <Widget update={this.update}/>
                </div>
            )
        }
    }
    
    
    const Widget = (props) => {
        return (<input type="text" onChange={props.update}/>)
    }
    

export default PlayGround;