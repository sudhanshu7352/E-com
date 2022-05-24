import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { cartData } from "../../redux/action"
import { Caro } from "./caraosel/caraosel"
import "./home.css"

export const Home =()=>{
    const navigate =useNavigate()
    const [cloth,setCloth] =useState([])
    const dispatch =useDispatch()
    useEffect(()=>{
        axios.get(" http://localhost:8080/cloth").then((res)=>{
          //  console.log(res.data)
            let x=res.data.slice(0,3)
           // console.log(x)
            setCloth(x)
        })
     },[])
     const handlecart =(e)=>{
        //  console.log(e)
          axios.post(" http://localhost:8080/cart",e).then(()=>{
            //   alert("added to cart")
             
             dispatch(cartData())
          }).catch((e)=>{
              console.log(e.message)
              alert("Cart had same item's")
          })
         // console.log({cart})
      } 
    return(
        <div>
            <Caro />
         
            <div className="prod_div">
              <div className="view_div">
                <h2>Clothing Products</h2>
                <button onClick={()=>navigate("/Cloth")}>View all</button>
              </div>
              {/* <hr /> */}
              <div className="products">
              {cloth.map((e)=>(
                <div >
                <div key={e.id} onClick={()=>navigate(`/Cloth/product_details/${e.id}`)}>
                    <img src={e.image} />
                    <h3>{e.name}</h3>
                    <h4>₹ {e.price}.00</h4>
                   
                 </div>
                   <div >

                    <button onClick={ ()=>handlecart(e)} >Add to cart</button>
                    </div>
                </div>
               
                
            ))}

              </div>
            </div>

            <div  className="prod_div">
                <h1>Electronics Products</h1>
            </div>
            <div  className="prod_div">
                <h1>Appliances Products</h1>
            </div>
            <div  className="prod_div">
                <h1>Books Products </h1>
            </div>
        </div>

    )
}
