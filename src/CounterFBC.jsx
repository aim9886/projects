// import React from 'react'
// import { useState } from 'react'

// const CounterFBC = () => {
//     let [count , setCount] =useState(0)

//     let handleIncrement =()=>{
//         setCount(count+ 1)
//     }

//     let handleDecrement =()=>{
//         setCount(count- 1)
//     }

//     let handleReset =()=>{
//         setCount(0)
//     }
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={handleIncrement}>+ Increment</button>
//         <button onClick={handleDecrement}>- Decrement</button>
//         <button onClick={handleReset}>RESET</button>
//     </div>
//   )
// }

// export default CounterFBC

///////////////////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react'

export default class CounterFBC extends Component {
    constructor(){
        super()
        this.state={
            username : "HEMANTH"
        }
        // this.handleChange=this.handleChange.bind(this)// method 1
    }

    handleChange= function(){
        console.log(this);

        this.setState({username : "AIMANTH"})
    }
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        {/* <button onClick={this.handleChange}>change</button> method 1. */}
        
        <button onClick={this.handleChange.bind(this)}>change</button> {/* method 2 */}
      </div>
    )
  }
}
