import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteItemCart } from "../redux/action";
import "./Main.css";
const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  const handleDel = (item) => {
    dispatch(deleteItemCart(item));
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg=light rounded-3 py-5">
        <div className="container py-4 text-center">
          <div className="row">
            <h3>Your Cart is Empty!!!</h3>
          </div>
        </div>
      </div>
    );
  };

  const cartItems = (product) => {
    return (
      <div className="px-4 text-center my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4">
              <img src={product.image} height="250px" width="200px" />
            </div>
            <div className="col-md-4 mt-3">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">
                {product.qty}x${product.price} = ${product.qty * product.price}
              </p>
              <button
                onClick={() => handleDel(product)}
                className="btn btn-outline-dark me-3"
              >
                <AiFillMinusCircle className="icon" />
              </button>
              <button
                onClick={() => handleAdd(product)}
                className="btn btn-outline-dark m-2"
              >
                <AiFillPlusCircle className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };


  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
    </div>
  );
};

export default Cart;
