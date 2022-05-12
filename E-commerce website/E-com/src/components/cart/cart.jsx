
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { cartData } from "../../redux/action"
import "./cart.css"
export const Cart =()=>{
    const {cart} =useSelector((store)=>store.cart)
    const [data,setData] =useState([])
    const dispatch =useDispatch()
    // console.log({cart})
      
    const showData=()=>{
        axios.get("http://localhost:8080/cart").then((res)=>{
            // console.log(res.data)
                setData([...res.data])
            })
    }
    useEffect(()=>{
     showData()
        //console.log(showData())
    },[])
    let handleDelete=(e)=>{
        axios.delete(`http://localhost:8080/cart/${e}`).then(
            alert("removed")
        ).then(()=>{
            showData()
        })
        dispatch(cartData())
    }
    return(
        <div className="cart_div">
            {/* <h1>cart page</h1> */}
            <div className="cart_prod">
            {data.map((e)=>(
            <div className="ca_div" key={e.id}>
              <div>
                  <img src={e.image} alt="" />
              </div>
              <div className="det_div">
                 <h2>{e.name}</h2>
                 <h3>Price : ₹ {e.price}</h3>
                 <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"40px"}}>
                 <h3>Quantity :1</h3>
                 <button onClick={()=>handleDelete(e.id)}>Remove</button>
                 </div>
                 
              </div>
            </div>
            )
            )} 
            </div>
            <div className="price_details">
                <h1>Subtotal</h1>
                <div>cart total:</div>
                <div>delivery charge : ₹ 100</div>
                <div>Total:</div>
            </div>
        </div>
    )
}