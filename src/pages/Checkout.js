import { useParams } from "react-router-dom"
import productData from "../data/productData"
import {usePaystackPayment} from 'react-paystack';
const Checkout = () => {
    const {productID} = useParams();
    const product = productData.find((item) => item.productID === productID);
    const publicKey = 'pk_test_f22acc1e98f2f45c4adc83dd8cc3694f1c84a53d';
    const config = {
        email: 'test@test.com',
        amount: product.productPrice * 100,
        publicKey: publicKey,
    };
    const onSuccess = (reference) => {
        console.log(reference);
    };
    const onClose = () => {
        console.log('closed')
    }
    const initializePayment = usePaystackPayment(config);
    const handlePayment = (e) => {
        e.preventDefault()
        initializePayment(onSuccess, onClose)
    }
    return (
        <>
        <div className="container-fluid" id="nav">
        <div className="container">
          <p>BELLA COLLECTIONS</p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
            <div className="col-12">
                <section>
                    <h3 className="text-center">CHECKOUT PAGE</h3>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={product.productImage} className="img-fluid rounded-start" alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{product.productName}</h5>
                                    <p className="card-text">₦ {product.productPrice}</p>
                                    <p className="card-text"><small class="text-muted">{product.desc}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action="" onSubmit={handlePayment}>
                        <button className="btn btn-info text-white p-3">PROCEED TO PAYMENT</button>
                    </form>
                </section>
            </div>
        </div>
      </div>
        </>
    )
}

export default Checkout