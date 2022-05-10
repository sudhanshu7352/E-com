import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getData } from "../../redux/action"
import "./clothing.css"

export const Clothing =()=>{
    const {cloth} =useSelector((store)=>store.cloth)
    const dispatch =useDispatch()
    useEffect(()=>{
       axios.get(" http://localhost:8080/clothing").then((res)=>{
         //  console.log(res.data)
           dispatch(getData(res.data))
       })
    },[])
    return(
        <div className="container">
            {cloth.map((e)=>(
                <div key={e.id}>
                    <img src={e.image} />
                    <h3>{e.name}</h3>
                    <h4>Rs. {e.price}</h4>
                </div>
                
            ))}
        </div>
    )
      
    
}