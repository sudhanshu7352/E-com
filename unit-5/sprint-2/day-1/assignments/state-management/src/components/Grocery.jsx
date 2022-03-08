import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
// import { nanoid } from "nanoid";
import { useEffect } from "react";
import axios from "axios";


export const Grocery = () => {
  const [grocery, setGrocery] = useState([]);
  const [page, setPage] = useState(1);
  const add = (data) => {
    fetch("http://localhost:3002/groceries",{
      method:"POST",
      body:JSON.stringify({title:data,purchase:false}),
      headers:{
        "content-type" :"application/json"
      },
    }).then(()=>{
      getData()
    })
    //   const payload={
    //     id :nanoid(),
    //       title: data,
    //       status:false,
    //     //   id:uuid()
    //   }
    // setGrocery([...grocery, payload]);
  };
  useEffect(()=>{
    getData()
  },[page])
  const getData =()=>{
    axios.get(`http://localhost:3002/groceries?_limit=3&_page=${page}`).then((res)=>{
      setGrocery(res.data)
    })
  }
  const handleDelete =(id)=>{
   axios.delete(`http://localhost:3002/groceries/${id}`).then(()=>{
     
        setGrocery(grocery.filter(item=> item.id !==id))
   })

  }
  return (
    <div>
      <h1>Grocery List</h1>
      <GroceryInput addGroc={add} />
      {grocery.map((e) => (
        <GroceryList  title={e.title} id={e.id} key={e.id} handleDelete={handleDelete}/>
      ))}
      <button className="but" onClick={()=>{setPage(page-1)}}>prev</button>
      <button className="but" onClick={()=>{setPage(page+1)}}>next</button>
    </div>
  );
};
