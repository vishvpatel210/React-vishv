import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import { Clock } from "./Clock";

function App() {
  const [color, setColor] = useState("green");
  function handle(event){
    setColor(event.target.value);
  }
  return(
    <>
      <select name="" id="" onChange={handle}>
        <option value="green">green</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
      </select>

      <Clock color={color} />
    </>
  );
}

export default App;
