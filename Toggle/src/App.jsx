import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [ison,setBtn] = useState(false);

  function handleBtn(){
    setBtn(!ison);
   if(ison){
      document.body.style.backgroundColor = "white";
   }
   else{
    document.body.style.backgroundColor = "black";
   }
    
    
  }
  return (
    <>
        <div className='Switch' onClick={handleBtn}>
            <div className='btn'>
              <span>{ison ? "on" : "off"}</span>
            </div>
        </div>
    </>
  )
}

export default App
