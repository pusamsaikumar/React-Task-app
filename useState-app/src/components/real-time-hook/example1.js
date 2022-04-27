import React,{useState} from 'react';
import './example1.css';

function Example1() {
    const [title,setTitle]=useState('im start learning react Hooks');
    const [year,setYear]=useState('2010');
    const [emails,setEmails]=useState([
        {name:"saikumar",email:"saikumar@gmail.com"},
        {name:"saikiran",email:"saikiran@gmail.com"},
        {name:"teja",email:"teja@gmail.com"},
        {name:"harsha",email:"harsha@gmail.com"}
    ])
  return (
    <div className='container1'>
        <h1 className='header1'>{title}</h1>
        <h1 className='header2'>{year}</h1>
        <button onClick={()=>{setTitle("i'm learnt React hooks")}}>ChangeTitle</button>
        <button onClick={()=>{setYear("2022")}}>ChangeYear</button>
        <h1 className='header3'> Employees details with name and email id:</h1>
        <div>
            {
                emails.map((item,index)=>{
                    return <p key={index}>
                    Name:<span>{item.name}</span> and Email-ID:<span>{item.email}</span> </p>
                })
            }
        <button onClick={()=>{
            setEmails([
                {name:"pusam",email:"pusam@gmail.com"},
                {name:"kiran",email:"kiran@gmail.com"},
                {name:"satya",email:"satya@gmail.com"},
                {name:"sai",email:"sai@gmail.com"} 
            ])
        }}>
        UpDateEmployeesDEta</button>
        </div>
      

    </div>
  )
}

export default Example1