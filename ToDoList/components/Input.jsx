import React, { useState } from 'react'

export default function Input() {
    const [input,setInput] = useState(null);
    const [display,setDisplay] = useState([]);

  

    function handle(e){
        setInput(e.target.value);
        
    }
    function Add(){
        setDisplay(...display,input);
        
        setInput(" ");
    }
  return (
    <div>
      <input type="text" value={input} placeholder='add Your Task' onChange={handle}/><br /><br />
      <button onClick={Add}>Add</button>
    <h1>{display}</h1>
      
    </div>
  )
}
