import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ProductsDetailsPage = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const navigate =useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:3333/products/${id}`).then((res) => {
      // if(res =={}){
      //   navigate("/error")
      // }
      setDetail(res.data);
      console.log(detail);
    }).catch((e)=>{
      navigate("/error")
    });
  }, []);
   
  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        {detail.map((e) => (
          
          <>
            <img src={e.img} alt="" />
            <div className="productDetails" style={{ padding: "20px" }}>
              <div>
                <h2 className="productName">{e.name}</h2>
                <h5 className="productPrice">Price : {e.price}</h5>
              </div>
              <h5>Specifications : </h5>
              <div style={{ width: "700px", paddingLeft: "30px" }}>
                {/* Show Product specification here */}
                {e.specs}
              </div>
            </div>
          </>
          
        ))}
      </div>
    </>
  );
};
