import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : "Ajay"
      }
      console.log("LifeCycleA : constructor")

    }
    // if u want to change anything in props and state before rendering
    static getDerivedStateFromProps(props,state) {
        console.log("LifeCycleA : this.getDerivedStateFromProps")
        return null;
    }

    // if u want to change aftering rendering 
    componentDidMount() {
        console.log("LifeCycleA : componentDidMount")
    }

  render() {
    console.log("LifeCycleA : render")

    return (
      <div>
        LifeCycleA
        <LifeCycleB></LifeCycleB>
      </div>
    )
  }
}

export default LifeCycleA