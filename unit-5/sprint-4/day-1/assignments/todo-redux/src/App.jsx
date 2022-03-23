import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Routes>
       <Route path="/"   element={<Todo />}  />
     </Routes>
    </div>
  )
}

export default App
