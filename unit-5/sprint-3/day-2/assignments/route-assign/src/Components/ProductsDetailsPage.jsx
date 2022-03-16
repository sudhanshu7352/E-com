export const ProductsDetailsPage = () => {
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
          <img src={""} alt="" />
          <div className="productDetails" style={{ padding: "20px" }}>
            <div>
              <h2 className="productName">{product.name}</h2>
              <h5 className="productPrice">Price : {product.price}</h5>
            </div>
            <h5>Specifications : </h5>
            <div style={{ width: "700px", paddingLeft: "30px" }}>
              {/* Show Product specification here */}
            </div>
          </div>
        </div>
      </>
    );
  };