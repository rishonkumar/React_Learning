import React from "react";

class Channel extends React.Component{

    constructor() {
        super(); // it will call its parent
        this.state = {              
            msg : 'Helllo channel compoent',
            age: '23'
        }
    }

    subscribe() {
        //create new state
        this.setState({
            msg : 'Thanks for subscribing'
        })
    }
    
    render() {
        return (
            <>
                <h1>{this.state.msg}</h1>
                <button onClick={ ()=> { this.subscribe() }} >Subscribe</button>
            </>

        ) 
    }
}

export default Channel;