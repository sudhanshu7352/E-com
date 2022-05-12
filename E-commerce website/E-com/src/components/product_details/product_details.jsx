import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { addCart, cartData, getBookData } from "../../redux/action"
import "./product_details.css"

export const Details =()=>{
    let [prod,setProd] =useState({})
    // const [data,setData]=useState()
    const {cloth} =useSelector((store)=>store.cloth)
    const {electronics} =useSelector((store)=>store.electronics)
    const {appliances} =useSelector((store)=>store.appliances)
    const {books} =useSelector((store)=>store.books)
    const {cart} =useSelector((store)=>store.cart)
    const info =useParams()
    const navigate =useNavigate()
    const dispatch =useDispatch()

// console.log("prod append",prod)
//  if(Object.keys(prod).length === 0){

  useEffect(()=>{
   // dispatch(cartData())
   //console.log(books)
   
    console.log("hello")
      if(info.category =="Cloth" ){
         let temp =cloth.filter((e)=>e.id==info.id)
         setProd(temp[0])
      }
      if(info.category =="Electronics" ){
        let temp =electronics.filter((e)=>e.id==info.id)
        setProd(temp[0])
     }
     if(info.category =="Appliances" ){
        let temp =appliances.filter((e)=>e.id==info.id)
       // console.log(temp[0])
        setProd(temp[0])
     }
     if(info.category =="Books" ){
        let temp =books.filter((e)=>e.id==info.id)
       // console.log(temp)
        setProd(temp[0])
       
     }
  },[])
  const handlecart =()=>{
      axios.post(" http://localhost:8080/cart",prod).then(()=>{
          alert("added to cart")
         // dispatch(addCart(prod))
      })
     // console.log({cart})
      dispatch(cartData())
  } 
    
    return  (
        
        <div className="main_div">
            {/* <h1>details</h1> */}
          <div className="img_div">
              
              <img className="small_img" src={prod.image} />
              <img className="big_img" src={prod?prod.image:""} />
          </div>
          <div className="info_div">
              <h1>{prod.name}</h1>
              <div style={{display:"flex",justifyContent:"space-around",margin:"40px",color:"darkgray"}}>
                  <h2>Category: {prod.category}</h2>
                  <h2>Size: {prod.size}</h2>
              </div>
              <h3>Price : ₹ {prod.price}.00</h3>
               <h4>Description : {prod.desc}</h4>
               <div className="button_div">

               <button onClick={handlecart} >Add to cart</button>
               <button onClick={()=>navigate("/cart")}>Go to cart</button>
               </div>
          </div>
        </div>

        // <div>hello</div>
    )
}