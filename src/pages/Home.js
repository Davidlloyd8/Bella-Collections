import React from "react";
import productData from "../data/productData";
import ProductCards from "../components/productCard";

function Home() {
  return (
    <>
      <div className="container-fluid" id="nav">
        <div className="container">
          <p>BELLA COLLECTIONS</p>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="container">
            {productData.map((product) => (
                <ProductCards 
                productID={product.productID}
                productName={product.productName}
                productPrice={product.productPrice}
                productImage={product.productImage}
                />
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
