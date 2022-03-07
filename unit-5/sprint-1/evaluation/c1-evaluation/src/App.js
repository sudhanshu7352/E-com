import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";

function App() {
  const [count,setCount] =useState(0)

  function handle(value){

  }
  return (
    <div className="App">
      <div className="items">
        <span>Books:</span>
        <button className="addBook">+</button>
        <button className="remBook">-</button>
        <span className="totalBooks">1</span>
      </div>
    </div>
  );
}

export default App;
