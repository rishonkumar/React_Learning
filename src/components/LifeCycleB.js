import React, { Component } from 'react'

export class LifeCycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : "Ajay"
      }
      console.log("LifeCycleB : constructor")

    }
    // if u want to change anything in props and state before rendering
    static getDerivedStateFromProps(props,state) {
        console.log("LifeCycleB : this.getDerivedStateFromProps")
        return null;
    }

    // if u want to change aftering rendering 
    componentDidMount() {
        console.log("LifeCycleB : componentDidMount")
    }

  render() {
    console.log("LifeCycleB : render")

    return (
      <div>
        {/* LifeCycleB */}
      </div>
    )
  }
}

export default LifeCycleB