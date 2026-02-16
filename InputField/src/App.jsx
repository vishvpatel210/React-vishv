import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [val, setVal] = useState("");
  function change(event){
      setVal(event.target.value);
  }
  function handle(){
      setVal("");

  }
  return (
    <>
      <input type="text" value={val} onChange={change} />
      <h1>{val}</h1>
      <button onClick={handle}>Clear</button>
    </>
  )
}

export default App
