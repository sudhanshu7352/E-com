import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Routes>
       <Route></Route>
       <Route></Route>
       <Route></Route>
     </Routes>
    </div>
  )
}

export default App
