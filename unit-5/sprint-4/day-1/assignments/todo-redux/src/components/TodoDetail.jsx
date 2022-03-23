import { useState } from "react"
import { useSelector } from "react-redux"
// import { useStore } from "react-redux"


export const TodoDetail =()=>{
  const [data,setData] =useState()
  const {todo} =useSelector((store)=>store.todo)
 
   return (
       <div>
           {todo.map((e)=>(
              <div>
                   <h2>{e.title} </h2>
               <h4>{e.status}</h4>
              </div>
           ))}
       </div>
   )
}