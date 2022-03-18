import { Link } from "react-router-dom";
import { useState } from "react";

export const HomePage = () => {
  const [product,setProduct] =useState([])
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
        {[].map((el) => {
          return <Link to={``}>{/* Show product image and name */}</Link>;
        })}
        {/* <h1>kljdkl</h1> */}
      </div>
    </>
  );
};