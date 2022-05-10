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
    const handleSort=(e)=>{
        let {id,value} =e.target
            if(id =="priceSort" && value =="low"){
                cloth.sort((a,b)=>a.price -b.price)
                dispatch(getData(cloth))
            }
            if(id =="priceSort" && value =="high"){
                cloth.sort((a,b)=>b.price -a.price)
                dispatch(getData(cloth))
            }
        
    }
    return(
        <>
          <div>
            <select name="" id="priceSort" onChange={handleSort}>
                <option value="">-- sort by price --</option>
                <option value="low">low to high</option>
                <option value="high">high to low</option>
            </select>
        </div>
        <div className="container">
            {cloth.map((e)=>(
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