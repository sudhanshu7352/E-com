import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"



export const Todo =()=>{
    const [text,setText] =useState("")

      const {todo} =useSelector((store)=>store.todo)
      const dispatch =useDispatch()

      
    return (
        <div>
            <div>
                <input type="text" onChange={(e)=>setText(e.target.value)} />
                <button onClick={()=>addTodo()}></button>
            </div>
            <div></div>
        </div>
    )
}