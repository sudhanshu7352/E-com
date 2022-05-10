

import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getData, getElData } from "../../redux/action"
import "./electronics.css"

export const Electronics =()=>{
    const {electronics} =useSelector((store)=>store.electronics)
    const dispatch =useDispatch()
    useEffect(()=>{
       axios.get(" http://localhost:8080/electronics").then((res)=>{
          // console.log(res.data)
           dispatch(getElData(res.data))
       })
    },[])
    return(
        <div className="el_container">
            {electronics.map((e)=>(
                <div key={e.id}>
                    <img src={e.image} />
                    <h3>{e.name}</h3>
                    <h4> {e.price}</h4>
                </div>
                
            ))}
        </div>
    )
      
    
}