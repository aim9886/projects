// import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';


// const Toast = () => {
//   return (
//     <div>
//         <ToastContainer />
//         <h1>Toast</h1>
//         <button onClick={()=>{
//             toast.success(`SUCCESS`, {
//               position:toast.POSITION.TOP_CENTER
//             })
              // toast.error("COMPLETE")
//         }}>SUCCESS</button>
//     </div>
//   )
// }

// export default Toast

/////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Toast = () => {
  return (
    <div>
        <ToastContainer />
        <h1>Toast</h1>
        <button onClick={()=>{
          var a = 20;
          var b = 30;
          var c = a+b
            toast.success(`The Value is ${c}`, {
              position:toast.POSITION.TOP_CENTER
            })
        }}>SUCCESS</button>
    </div>
  )
}

export default Toast
