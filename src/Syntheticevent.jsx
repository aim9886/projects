import React, { Component } from 'react'

export default class Syntheticevent extends Component {
    constructor(){
        super()
        this.state={
            username : "Aim"
        }
    }
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <button onClick={()=>{
            this.setState({username : "Hemanth"})
        }}>CHANGE</button>
      </div>
    )
  }
}
