import React, { Component } from 'react'

export class Product extends Component {
  render() {
    return (
      <div>
        <Cart></Cart>
      </div>
    )
  }
}

export default Product

class Cart extends Component {

    constructor(props) {
        super(props)

        this.state = {
            qty : 0
        }
    }

    updateQtry = ()=> {
        this.setState({
            qty: this.state.qty+1
        })
    }

    componentDidMount() {
        console.log("Executing after component render");
    }

    componentDidUpdate(prevProps,prevState) {
        console.log("Updated")
    }

    render() {
        return(
            <>
                <h1>CART : {this.state.qty}</h1>
                <button onClick={this.updateQtry}>Update Qty</button>
                
            </>
        )
    }
}