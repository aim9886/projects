/////////////////////////////////////////////////////////////////////////////
// Props Drilling

// import React from 'react'
// import Parent from './Parent';

// const Grandparent = (props) => {
//   return (
//     <div className='grandparent'>
//         <strong>Grandparent</strong>
//         <Parent data={props.data} />
//     </div>
//   )
// }

// export default Grandparent
///////////////////////////////////////////////////////////////////////////////////
// Props.Children

import React from 'react'
// import Parent from './Parent';

const Grandparent = (props) => {
    console.log(props);
  return (
    <>
    <h1>{props.children}</h1>
    </>
  )
}

export default Grandparent

