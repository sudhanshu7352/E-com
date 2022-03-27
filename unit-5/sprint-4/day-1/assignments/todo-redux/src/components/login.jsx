import axios from "axios"
import { useEffect, useState } from "react"
// import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
// import { useStore } from "react-redux"


export const TodoDetail =()=>{
  const [data,setData] =useState([])

  let {id} =useParams()
 // const {todo} =useSelector((store)=>store.todo)

  const getTodo = () => {
    axios.get(`http://localhost:3200/Todo/${id}`).then((res) => {
       setData([res.data])
      console.log(res.data)

    });
  };
  const change = (status) => {
      
    axios.patch(`http://localhost:3200/Todo/${id}`, {
     
        status:true,
        //setData([res.data])
        // getTodo()
    }).then(()=>{
       getTodo()
    });
  };
  useEffect(()=>{
      getTodo()
  },[])
   return (
       <div>
           {data.map((e)=>(
              <div key={e.id}>
               <h2>{e.title} </h2>
               <button onClick={()=>change(e.status)}>{e.status==true ?"complete":"incomplete"}</button>
              </div>
           ))}
       </div>
   )
}