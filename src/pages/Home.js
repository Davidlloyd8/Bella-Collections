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
      <div className="container mt-5">
        <div className="row mt-5 mb-5">
          {productData.map((product) => (
            <div className="col-lg-3 mt-4">
              <ProductCards
                productID={product.productID}
                productName={product.productName}
                productPrice={product.productPrice}
                productImage={product.productImage}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
