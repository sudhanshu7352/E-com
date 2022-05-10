




import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getApData, getData, getElData } from "../../redux/action"
import "./appliances.css"

export const Appliances =()=>{
    const {appliances} =useSelector((store)=>store.appliances)
    const dispatch =useDispatch()
    useEffect(()=>{
       axios.get(" http://localhost:8080/appliances").then((res)=>{
          // console.log(res.data)
           dispatch(getApData(res.data))
       })
    },[])
    return(
        <>
        <div>
            <select name="" id="priceSort">
                <option value="">--sort by price--</option>
                <option value="low">low to high</option>
                <option value="high">high to low</option>
            </select>
        </div>
        <div className="apl_container">
            {appliances.map((e)=>(
                <div key={e.id}>
                    <img src={e.image} />
                    <h3>{e.name}</h3>
                    <h4>₹ {e.price}</h4>
                </div>
                
            ))}
        </div>
        </>
    )
      
    
}