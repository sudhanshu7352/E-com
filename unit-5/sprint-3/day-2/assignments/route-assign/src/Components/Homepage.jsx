import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const HomePage = () => {
  const [product,setProduct] =useState([])

  useEffect(()=>{
     axios.get("http://localhost:3333/products").then((res)=>{

      setProduct([...res.data])
       console.log(res.data)
     })
  },[])
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {/* Iterate over products and show links */}
        {product.map((el) => {
          return <Link to={`/products/${el.id}`}>{
             <div style={{width :"220px",height:"200px"}}>
               <img src={el.img} alt="" style={{width :"220px",height:"200px"}} />
               <h3>{el.name}</h3>
             </div>
            }</Link>;
        })}
        
      </div>
    </>
  );
};