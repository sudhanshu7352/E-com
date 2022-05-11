




import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getApData, getApFilData, getData, getElData } from "../../redux/action"
import "./appliances.css"

export const Appliances =()=>{
    const {appliances} =useSelector((store)=>store.appliances)
    const filappliances =useSelector((store)=>store.appliances.filappliances)
    const dispatch =useDispatch()
    useEffect(()=>{
       axios.get(" http://localhost:8080/appliances").then((res)=>{
          // console.log(res.data)
           dispatch(getApData(res.data))
       })
    },[])
    const handleSort=(e)=>{
        let {id,value} =e.target
            if(id =="priceSort" && value =="low"){
                appliances.sort((a,b)=>a.price.split(",").join("") -b.price.split(",").join(""))
                dispatch(getApData(appliances))
            }
            if(id =="priceSort" && value =="high"){
                appliances.sort((a,b)=>b.price.split(",").join("")  -a.price.split(",").join("") )
                dispatch(getApData(appliances))
            }
            if(id =="filterCategory"){
              //  console.log(value,"a")
                  dispatch(getApFilData(value))
              }
    }
    return(
        <>
        <div>
            <select name="" id="priceSort" onChange={handleSort}>
                <option value="">--sort by price--</option>
                <option value="low">low to high</option>
                <option value="high">high to low</option>
            </select>
            <select name="" id="filterCategory" onChange={handleSort}>
                <option value="">-- filter by category --</option>
                <option value="Television">filter by Television</option>
                <option value="refrigerator">filter by refrigerator</option>
                <option value="washing machine">filter by washing machine</option>
             
            </select>
        </div>
        <div className="apl_container">
            {appliances &&filappliances.map((e)=>(
                <div key={e.id}>
                    <img src={e.image} />
                    <h3>{e.name}</h3>
                    <h4>₹ {e.price}.00</h4>
                </div>
                
            ))}
        </div>
        </>
    )
      
    
}