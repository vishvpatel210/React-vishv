import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [fruits,setFruit] = useState("apple");

  function handle(){
    setFruit("banana");
  }

  return (
    
    <>
        <h1>{fruits}</h1>
        <button onClick={handle}>change</button>
    </>
  )
}

export default App
