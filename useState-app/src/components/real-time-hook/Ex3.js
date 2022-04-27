import React,{useState} from 'react';
import './ex3.css';

function Ex3() {
   

    const [items,setItems]=useState([]);
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const fnSubmit=(e)=>{
        e.preventDefault();
        console.log(username,password);
        setItems((prevState)=>([
            ...prevState,
            {
                id:items.length,
                name:username,
                password:password
            }
        ])
        )
    }

  return (
    <div className='container'>
        <form onSubmit={fnSubmit}>
            <label>
                <input type="text" name='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
            </label>
            <label>
                <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
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

export default Ex3