import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/home/home'
import ResponsiveAppBar from './components/navbar/navbar'
import { Clothing } from './components/clothing/clothing'
import { Electronics } from './components/electronics/electronics'
import { Appliances } from './components/appliances/appliances'
import { Books } from './components/books/books'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ResponsiveAppBar />
     <Routes>
       <Route path='/' element={<Home /> } />
       <Route path='/Clothing' element={<Clothing /> } />
       <Route path='/Electronics' element={<Electronics /> } />
       <Route path='/appliances' element={<Appliances /> } />
       <Route path='/books' element={<Books /> } />
       
     </Routes>
    </div>
  )
}

export default App
