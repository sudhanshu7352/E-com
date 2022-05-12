import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import "./product_details.css"

export const Details =()=>{
    const [prod,setProd] =useState({})
    const {cloth} =useSelector((store)=>store.cloth)
    const {electronics} =useSelector((store)=>store.electronics)
    const {appliances} =useSelector((store)=>store.appliances)
    const {books} =useSelector((store)=>store.books)
   const info =useParams()
  // console.log(id)
  useEffect(()=>{
      if(info.category =="Cloth" ){
         let temp =cloth.filter((e)=>e.id==info.id)
       //  console.log(temp[0])
         setProd(temp[0])
      }
      if(info.category =="Electronics" ){
        let temp =electronics.filter((e)=>e.id==info.id)
       // console.log(temp[0])
        setProd(temp[0])
     }
     if(info.category =="Appliances" ){
        let temp =appliances.filter((e)=>e.id==info.id)
       // console.log(temp[0])
        setProd(temp[0])
     }
     if(info.category =="Books" ){
        let temp =books.filter((e)=>e.id==info.id)
      //  console.log(temp[0])
        setProd(temp[0])
     }
  },[])
    return(
        <div className="main_div">
            {/* <h1>details</h1> */}
          <div className="img_div">
              
              <img className="small_img" src={prod.image} />
              <img className="big_img" src={prod.image} />
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

               <button>Add to cart</button>
               <button>Go to cart</button>
               </div>
          </div>
        </div>
    )
}