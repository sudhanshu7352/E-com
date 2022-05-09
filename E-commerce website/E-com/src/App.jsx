import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/home/home'
import ResponsiveAppBar from './components/navbar/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ResponsiveAppBar />
     <Routes>
       <Route path='/' element={<Home /> } />
       
     </Routes>
    </div>
  )
}

export default App
