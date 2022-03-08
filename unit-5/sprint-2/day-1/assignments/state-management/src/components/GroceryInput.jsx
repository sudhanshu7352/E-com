import { useState } from "react"
// import {}

export const GroceryInput =({addGroc})=>{
    const [name,setName] =useState("")


    return(
        <div>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} />
            <button className="add" onClick={()=>addGroc(name)} >add</button>

        </div>
    )
}