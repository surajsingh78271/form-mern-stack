import React, { useEffect } from 'react'
import "./table.css"
const Table = (props) => {
  console.log(props.data)
  
  return (
    <div >
        <div>
          <table className='table'>
            <thead className='table-head'>
              <tr className='table-tr'>
                <th className='table-th'>Fname</th>
                <th className='table-th'>Lname</th>
                <th className='table-th'>email</th>
                <th className='table-th'>password</th>
                <th className='table-th'>Gender</th>
                <th className='table-th'>Age</th>
                {/* <th className='table-th'>Check</th> */}
                </tr>
            </thead>
            <tbody>
              {
                props.data.map((val,index)=>{
                  console.log(val.check)
                  return (
                    <tr className='table-tr' key={index}>
                      <td className='table-td'>{val.fname}</td>
                      <td className='table-td'>{val.lname}</td>
                      <td className='table-td'>{val.email}</td>
                      <td className='table-td'>{val.password}</td>
                      <td className='table-td'>{val.gender}</td>
                      <td className='table-td'>{val.age}</td>
                      {/* <td className='table-td'>{val.check}</td> */}
                    </tr>
                    
                  )
                  

                })
              }


                

            </tbody>
          </table>
        </div>

    </div>
  )
}

export default Table