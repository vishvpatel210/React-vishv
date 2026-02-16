import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Order from './Order.jsx'

function App() {
  const details = [
    {
      orderId: "ORD01",
      items: [
        { name: "Laptop", price: 50000 },
        { name: "Mouse", price: 500 },
      ],
    },
    {
      orderId: "ORD02",
      items: [
        { name: "Phone", price: 30000 },
        { name: "Charger", price: 1000 },
      ],
    },
  ];

  return (<>
    {details.map((ele)=>
      <Order order1={ele}/>
    )}
  
  </>);
}

export default App;
