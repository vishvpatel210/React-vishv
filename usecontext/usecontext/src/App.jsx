import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './components/Parent'
import { countContext } from './context/Context'

function App() {
  const [count, setCount] = useState(0)
  function handle(){
    setCount(count+1);
  }
  return (
    <>
     <countContext.Provider value={count}>
     <Parent/>
     <button onClick={handle}>increase</button>
     </countContext.Provider>
    </>
  )
}

export default App
