// import React from 'react'

// const Employee = (props) => {
//     let data = props.empDetails1
//     console.log(data);
//   return (
//     <div>
//         <table className='tableBlock' border={"1px"} cellSpacing={"4px"} cellPadding={"2px"}>
//             <tr>
//                 <th>EMP ID</th>
//                 <th>EMP NAME</th>
//                 <th>EMP SAL</th>
//                 <th>EMP DESIGNATION</th>
//                 <th>EMP GENDER</th>
//                 <th>EMP EDUCATION</th>
//                 <th>EMP EXP</th>
//                 <th>EMP COMPANIES</th>
//                 <th>EMP IMG</th>
//                 <th>EMP SKILLS</th>
//                 <th>EMP CITY</th>
//             </tr>
//             {data.map((x)=>{
//                 return (
//                     <tr>
//                         <td>{x.emp_id}</td>
//                         <td>{x.emp_name}</td>
//                         <td>{x.emp_sal}</td>
//                         <td>{x.emp_des}</td>
//                         <td>{x.emp_gender}</td>
//                         <td>{x.emp_education}</td>
//                         <td>{x.emp_ex}</td>
//                         <td>
//                             <ul style={{listStyle:"square"}}>
//                                 <li>{x.emp_companies.previous}</li>
//                                 <li>{x.emp_companies.current}</li>
//                             </ul>
//                         </td>
//                         <td>
//                             <img src={x.emp_image} alt="" width={"100px"} />
//                         </td>
//                         <td>
//                             <ul style={{listStyle:"square"}}>{x.emp_skills.map((x)=>{
//                                 return <li>{x}</li>
//                             })}

//                             </ul>
//                         </td>
//                         <td>{x.emp_city}</td>
//                     </tr>
//                 )
//             })}
//         </table>
//     </div>
//   )
// }

// export default Employee