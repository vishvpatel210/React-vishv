import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";


function App() {
  const [count, setCount] = useState(0);

  // return (
  //   // <>
  //   //   <DogImg> </DogImg>
  //   //   <DogImg> </DogImg>
  //   //   <DogImg> </DogImg>
  //   // </>

  //   // <React.Fragment>
  //   //   <DogImg />
  //   //   <DogImg />
  //   //   <DogImg />
  //   // </React.Fragment>


  // );

  return [
    <DogImg key="1" />,
    <DogImg key="2" />,
    <DogImg key="3" />
  ];
}

const DogImg = () => {
  const age=19;
  // let watch = "not available";
  // if(age>=18) {watch = "available"};

  const WatchFun = ()=>{
    if(age>=18){
      return "available"
    }

    return "not available"
  }

  const name="dogyy bhai";
  const country = "india";
  const DynamicFun = ()=> {
    const food = "Roti-Milk";
    return food;
  }
  return (
    <>
      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBuMvSuYezLE9rwI-zOJeIOmcIGfDPqOvFA&s"
          alt=""
        />
        <div className="dog">Name: {name}</div>
        <div className="country">country: {country}</div>
        <div>lifespwan: {1.5+5.5}</div>
        <div className="new">{DynamicFun()}</div>
        
        {/* <button>{age>=18 ? "touch" : "Dont touch"}</button> */}
        {/* <button>{watch}</button> */}
        <button>{WatchFun()}</button>
      </div>
    </>
  );
};
export default App;
