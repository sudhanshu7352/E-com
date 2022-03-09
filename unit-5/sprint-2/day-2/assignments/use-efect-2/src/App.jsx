import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Timer } from "./components/Timer"
// import { useEffect } from 'react/cjs/react.production.min';

function App() {
  const [show, setShow] = useState(0);

  

  return (
    <div className="App">
      
      {show? <Timer />:null}
      <button onClick={()=>setShow(!show)}>{show?"hide timer":"show timer"}</button>
    </div>
  )
}

export default App
