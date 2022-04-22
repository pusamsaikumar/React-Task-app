import React from 'react'

function TableD(props) {
  return (
    <div className='table-compoenent'>
        {
            props.data.length > 0 ? 
            <table border='2px'>
                <thead>
                    {
                        props.headers.map((header,index)=>{
                            return <th key={index}>{header}</th>
                        })
                    }
                </thead>
                <tbody>
                    {
                        props.data.map((obj,index)=>{
                            return <tr key={index}>
                                {
                                    Object.keys(obj).map((key,index)=>{
                                        return <td key={index}>{obj[key]}</td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>



            </table>
             : <h4>No Data found</h4>
        }
    </div>
  )
}

export default TableD;