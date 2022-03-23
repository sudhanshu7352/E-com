import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Todo } from './components/Todos'
import { TodoDetail } from './components/TodoDetail'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Routes>
       <Route path="/"   element={<Todo />}  />
       <Route path="/todo/:id" element={<TodoDetail /> }  />

     </Routes>
    </div>
  )
}

export default App
