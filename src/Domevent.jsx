import React, { Component } from 'react'

export default class Domevent extends Component {
    constructor(){
        super()
        this.state={
            username: "Hemanth"
        }
    }

    componentDidMount(){
        let btn = document.querySelector("button")
        btn.addEventListener("click" , ()=>{
            this.setState({username : "Aim"})
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <button>CHANGE</button>
      </div>
    )
  }
}
