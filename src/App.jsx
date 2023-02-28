////////////////////////////////////////////////////////////////////////////////////////////////
// import React from "react";
// import {Component} from "react";
// import Nav from './Nav';
// import IMG from "./ferrari2.jpg"
// class App extends Component{
//     render(){
//         return(
//             <>
//             <Nav photo={IMG}/>
//             </>
//         )
//     }
// }
// export default App;
///////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react'
// import Nav from './Nav';
// const App = () => {
//     let IMG = "https://cdn.pixabay.com/photo/2023/02/14/17/27/tobacco-7790117_1280.jpg"
//         return(
//             <div>
//             <Nav photo={IMG}/>
//             </div>
//         )
//     }
// export default App;
////////////////////////////////////////////////////////////////////////////////////////////////

// Props Drilling Topic

// import React from 'react'
// import Grandparent from './propsDrilling/Grandparent';
// import "./global.css"

// const App = () => {
//   return (
//     <div className='rootcomponent'>
//         <strong>ROOT</strong>
//         <Grandparent data="RAJINI" />
//     </div>
//   )
// }

// export default App
////////////////////////////////////////////////////////////////////////////////////////

// Props.children

// import React from 'react'
// import Grandparent from './propsDrilling/Grandparent';
// import "./global.css"

// const App = () => {
//   return (
//     <>
//     <Grandparent>
//         654684645654
//     </Grandparent>
//     </>
//   )
// }

// export default App
///////////////////////////////////////////////////////////////////////////////////////////////

// Faker topic

import React, { Component } from 'react'
// import Faker from './Faker';
import Toast from './Toast';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Faker /> */}
        <Toast />
      </div>
    )
  }
}
