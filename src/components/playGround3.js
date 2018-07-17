import React, { Component } from 'react';

class PlayGround3 extends Component {
    constructor(){
        super();
        this.state = {items: []}
    }

    componentWillMount(){
        fetch('https://swapi.co/api/people/?format=json')
        .then(response => response.json())
        // used results because in tjAPI it is results
        .then(({results: items}) => this.setState({items})).catch("error")
    }

    render() {
        let items = this.state.items
        return (
            <div>
                <h1>STAR WARS API</h1>
                {items.map(item => <h4 key={item.name}> -  {item.name}</h4>)}
            </div>
        );
    }
}


export default PlayGround3;