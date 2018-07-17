import React, { Component } from 'react';

class PlayGround2 extends Component {

constructor(){
    super();
    this.state={
        value:0,
    }
}

update = () =>{
    this.setState({value: this.state.value + 1})
}

//////////////component life cycle
componentWillMount() {
    console.log("Component Will Mount");
    //here we can add setState to change the state at this level of component life
    this.setState({m: 2})
}
componentDidMount() {
    console.log("Component Did Mount");
    //here we can set function or method to be applied after the component has been mounted as below:
    this.increment = setInterval(this.update,100)
}

render() {
    console.log("render");
    return (
    <div>
        <button className='button' onClick={this.update}>{this.state.value * this.state.m}</button>
    </div>
    );
}

componentWillUnmount() {
    console.log("Component Will Un-mount");
    //here we can set function or method to be applied after the component has been mounted as below:
    clearInterval(this.increment);
}





}
export default PlayGround2;