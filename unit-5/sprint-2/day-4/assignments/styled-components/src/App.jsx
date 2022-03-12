import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Button,DefaultButton,DashedButton,TextButton,LinkButton} from "./components/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
         <Button>Primary Button</Button>
         <DefaultButton id="default" >Default Button</DefaultButton>
         <DashedButton>Dashed Button</DashedButton>
         <br/>
         <TextButton>Text Button</TextButton>
         <LinkButton>Link Button</LinkButton>
    </div>
  )
}

export default App
