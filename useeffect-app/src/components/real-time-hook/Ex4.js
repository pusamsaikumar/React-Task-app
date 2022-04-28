import React,{useState} from 'react';
import './ex4.css';


function Ex4() {
    const [items,setItems]=useState([]);
    const [form,setState]=useState({
        username:'',
        password:''
    })
    const fnSubmit=(e)=>{
        e.preventDefault();
        console.log(form.username,form.password)
        setItems((prevState)=>([
            ...prevState,
            {
                id:items.length,
                name:form.username,
                password:form.password
            }
        ])
        )
    }
    const fnChange=(e)=>{
        setState((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
  return (
    <div>
        <form onSubmit={fnSubmit}>
        <label>
                <input type="text" name='username' value={form.username} onChange={fnChange} />
            </label>
            <label>
                <input type="password" name='password' value={form.password} onChange={fnChange} />
            </label>
            <button>submit</button>
        </form>
        <ul>
            {
                items.map((item)=>{
                    return <li key={item.id}>Useranme:<span>{item.name}</span> and Password: <span>{item.password}</span></li>
                })
            }
        </ul>
    </div>
  )
}

export default Ex4;