import { useState,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [data,setData] = useState(0);

  useEffect(()=>{

    check()},[count]);

  function check(){
    console.log("print many times so we use use effect");
  }

  

  return (
    <>
      <h1> count: {count}</h1>
      <h1>data: {data}</h1>
      <button onClick={()=> setCount(count+1)}>Count</button>
      <button onClick={()=> setData(data+1)}>Data</button>

    </>
  )
}

export default App
