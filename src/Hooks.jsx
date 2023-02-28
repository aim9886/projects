import React from 'react'
import { useState } from 'react'

const Hooks = () => {
    let [userName , setUserName] = useState("Aim")
    let [phone , setPhone] = useState(9886085432)
  return (
    <div>
        <h1>{userName}</h1>
        <h2>{phone}</h2>
        <button onClick={()=>{
            setUserName("HEMANTH")
        }}>CLICK</button>
    </div>
  )
}

export default Hooks