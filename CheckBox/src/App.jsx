import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [check,setCheck] = useState([]);
  function handle(event){
    
    setCheck(event.target.value);
    if(event.target.checked==true){
      setCheck([...check," ",event.target.value])
    }
  else {
    setCheck(check.filter((item) => item !== event.target.value));
  }
  }


  const [radio,setRadio] = useState("male");
  function Gender(event){
    setRadio(event.target.value);
  }

  const [Drop,setDrop] = useState("ahmedabad");
  return (
    <>
        <h1>CheckBox Handle</h1>
        <input type="checkbox" id='php' value="PHP" onChange={handle} />
        <label htmlFor="php">PHP</label><br /><br />

        <input type="checkbox" id='c'onChange={handle} value="CLanguage" />
        <label htmlFor="c">C Language</label><br /><br />

        <input type="checkbox" id='github'onChange={handle} value="github"/>
        <label htmlFor="github">GitHub</label><br /><br />

        <h1>{check}</h1><br /><br />


        <h1>Radio Button</h1>

        <input type="radio" id="male" value={"male"} name='gen' onChange={Gender} checked={radio=="male"}/>
        <label htmlFor="male">Male</label>
        <input type="radio" id='female' value={"female"} name='gen' onChange={Gender} checked={radio=="female"}/>
        <label htmlFor="female">Female</label>

        <h1>Selected Gender:{radio}</h1>


        <h1>DropDown</h1>

        <select name="" id="" defaultValue={"delhi"}>
          <option value="ahmedabad">ahmedabad</option>
          <option value="delhi">delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
    </>
  )
}

export default App
