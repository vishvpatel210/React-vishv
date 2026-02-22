import { useRef } from 'react'

function App() {
  const inputref = useRef(null);

  function handle() {
    inputref.current.focus();
    inputref.current.style.outline = "none";  
    inputref.current.style.border = "2px solid red";
    inputref.current.style.color = "blue";
  }

  return (
    <>
      <input type="text" ref={inputref} />
      <button onClick={handle}>Focus</button>
    </>
  )
}

export default App;
