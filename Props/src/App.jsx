import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import { Card } from "./components/Card";
import { CardList } from "./components/CardList";
import Child1 from "./components/Child1";
import { Child } from "./components/Child";
function App() {
  return (
    <>
      <CardList />
      <Child/>
    
    </>
  );
}

export default App;
