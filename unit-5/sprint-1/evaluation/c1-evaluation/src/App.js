import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [Book, setBook] = useState(13);
  const [Pen, setPen] = useState(10);
  const [Notebook, setNoteBook] = useState(44);
  const [Inkpen, setInkpen] = useState(78);
  // const [total,setTotal] =useState(0)

  function handleBook(value) {
    setBook(Book + value);
  }
  function handlePen(value) {
    setPen(Pen + value);
  }
  function handleNotebook(value) {
    setNoteBook(Notebook + value);
  }
  function handleInkpen(value) {
    setInkpen(Inkpen + value);

  }
  // function totalOf(){
  //      setTotal(Book+Pen+Notebook+Inkpen)
  // }
  return (
    <div className="App">
      <div className="items">
        <span>Books:</span>
        <button className="addBook" onClick={() => handleBook(1)}>
          +
        </button>
        <button className="remBook" onClick={() => handleBook(-1)}>
          -
        </button>
        <span className="totalBooks">{Book}</span>
      </div>
      <div className="items">
        <span>Pens:</span>
        <button className="addPen" onClick={() => handlePen(1)}>
          +
        </button>
        <button className="remPen" onClick={() => handlePen(-1)}>
          -
        </button>
        <span className="totalPens">{Pen}</span>
      </div>
      <div className="items">
        <span>Notebooks:</span>
        <button className="addNotebook" onClick={() => handleNotebook(1)}>
          +
        </button>
        <button className="remNotebook" onClick={() => handleNotebook(-1)}>
          -
        </button>
        <span className="totalNotebooks">{Notebook}</span>
      </div>
      <div className="items">
        <span>Inkpens:</span>
        <button className="addInkpen" onClick={() => handleInkpen(1)}>
          +
        </button>
        <button className="remInkpen" onClick={() => handleInkpen(-1)}>
          -
        </button>
        <span className="totalInkpens">{Inkpen}</span>
      </div>
      <div className="total">{Book+Pen+Notebook+Inkpen}</div>
    </div>
  );
}

export default App;
