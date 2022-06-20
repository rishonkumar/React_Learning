import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username : '',
            address : ''
        }
    }

    handleUserName=(event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleAddress=(event) => {
        this.setState({
            address: event.target.value
        })
    }

    handleSubmit=(event) => {
        alert(`${this.state.username} ${this.state.address}`)
        event.preventDefault(); // it will prevent website from reload
    }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type='text' value={this.state.username} onChange= {this.handleUserName}></input>
            </div>
            <div>
                <label>Address </label>
                <textarea  value={this.state.address} onChange= {this.handleAddress}></textarea>
            </div>
            <button>Submit</button>
        </form>
    )
  }
}

export default Form