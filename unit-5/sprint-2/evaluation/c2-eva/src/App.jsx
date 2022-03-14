import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  let [type,setType] =useState(false)

  const change =()=>{
     setType =true
     console.log(type)
  }
  return (
    <div className="App">
      <button className="toggleForm" onClick={change}>
        {/* Show text Add House or Show Rentals based on state */}
        change
      </button>
      {/* Show component based on state */}
    
         <Rentals />
    
         <AddHouse />
      
    )
     
      <br />
    </div>
  );
}

export default App;
