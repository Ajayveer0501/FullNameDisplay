import './App.css';
import {useState} from "react";


function App() {
  const [firstName, setFirstName]= useState("")
  const [lastName, setLastName]= useState("")
  const [fullName, setFullName]= useState("")

  function HandleSubmit(e){
    e.preventDefault()
    if(firstName !==" " && lastName !== "")
    setFullName(`${firstName} ${lastName}`)
  else{
    setFullName(" ")
    alert("Fill Both feilds")
  }
    
  }
  function DisplayName(fullName){
    return fullName? <p>Full Name: {fullName}</p>:null
  }
   
  return (
    <div className="App">
      <form onSubmit={HandleSubmit}><h1>Full Name Display</h1>
      
      <p>First Name: <input value={firstName} placeholder="Enter First Name" onChange={(e)=>setFirstName(e.target.value)} /></p>
      <p>Last Name: <input value={lastName} placeholder="Enter Last Name" onChange={(e)=>setLastName(e.target.value)}  /></p>
      <button type='submit'>Submit</button>
      {DisplayName(fullName)}
      </form>

    </div>
  );
}

export default App;
