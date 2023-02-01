import { Link } from "react-router-dom";

const productCard = ({
  productID,
  productName,
  productPrice,
  productImage,
}) => {
  return (
    <div className="row mt-5 mb-5">
      <div className="col-lg-3 mt-2">
        <Link to={`checkout/${productID}`}>
          <div className="card">
            <img src={productImage} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{productName}</h5>
              <p className="card-text">₦ {productPrice}</p>
              <button className="btn btn-outline-info">Buy</button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default productCard;
