import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [hide, setHide] = useState(true);
  function handle(){
    setHide(!hide);

  }
  return (
    <>
      {hide?<h1>vishv patel</h1>:null}
      <button onClick={handle}>{hide? "hide":"show"}</button>
      
    </>
  )
}

export default App
