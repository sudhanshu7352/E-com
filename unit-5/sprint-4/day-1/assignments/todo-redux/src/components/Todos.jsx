import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo } from "../redux/action";
import './todos.css'

export const Todo = () => {
  const [text, setText] = useState("");

  const {todo} = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  const postTodo = () => {
    axios
      .post("http://localhost:3200/Todo", {
        title: text,
        status: false,
      })
      .then(() => getTodo());
  };
  useEffect(() => {
    getTodo();
  }, []);
  const getTodo = () => {
    axios.get("http://localhost:3200/Todo").then(({ data }) => {
      dispatch(addTodo(data));
    });
  };
  const deleteTodo =(id)=>{
      axios.delete(`http://localhost:3200/Todo/${id}`).then(getTodo)
  }
  return (
    <div className="maindiv" >
      <div className="smalldiv" >
          <h2>Add Todo</h2>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <br />
        <br />
        <button className="add" onClick={() => postTodo()}>add todo</button>
      </div>
      <div className="smalldiv" >
          <h2>Todo List</h2>
        {todo.map((e) => (
          <div  style={{padding:"8px",border:"2px solid gray"}} key={e.id}><Link to={`/todo/${e.id}`}> {e.title}</Link> 
           <button className="remove" onClick={()=>deleteTodo(e.id) }>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
