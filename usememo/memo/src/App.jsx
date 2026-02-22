import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const result = useMemo(() => {
    console.log("Heavy function running...");
    for (let i = 0; i < 100000000; i++) {
    }
    return "Done";
  }, [])   

  function handle() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handle}>count+</button>
    </>
  )
}

export default App