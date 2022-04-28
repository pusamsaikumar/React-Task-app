import React,{useState} from 'react';
import './example2.css';


function Ex2() {
    const [items,setItems]=useState([]);
    const [itemName,setItemName]=useState("");
    const addItem=(event)=>{
        event.preventDefault();
        setItems((prevState)=>([
            ...prevState,
            {
                id:items.length,
                name:itemName
            }
        ])
            
        )
    }
    return(
        <div className='container'>
        <form onSubmit={addItem}>
            <label>
                <input type='text' name="item" value={itemName} onChange={(event)=>setItemName(event.target.value)} />
            </label>
            <button>submit</button>
        </form>
        <ul>
            {
                items.map((item)=>{
                    return <li key={item.id}>{item.name}</li>
                })
            }
        </ul>
        
        </div>
    );
}

export default Ex2;