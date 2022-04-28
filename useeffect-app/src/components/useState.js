import React,{useState,createRef,useRef} from 'react';

import './usestate.css';

function AddTwoNum() {
    const [sum,setSum]  = useState(0);
    const [clr,setClr] = useState('');
  
    const myRef=createRef();
const refn2 = useRef();
    const fnAdd=()=>{
        let clr="";
        let res=Number(myRef.current.value)+Number(refn2.current.value);
        if(sum > 100){
            clr="red";
        } else{
            clr="blue";
        }
        setClr(clr);
        setSum(res);
    }
  return (
    <div className='container'>
        <h2 className='header'>Add Two Numbers</h2>
        <input type="text" ref={myRef}/><input type="text" ref={refn2} /><button onClick={fnAdd}>ADD</button>
        <div><span style={{color:clr}}>{sum}</span></div>
        <b className={sum > 100 ? "color-red" : "color-blue"}>{sum}</b>
    </div>
  );
}

export default AddTwoNum;