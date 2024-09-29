import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Cart({ cartItems, setcartItems }) {
  const [complete, setComplete] = useState(false);

  function increaseqty(item) {
    if (item.product.stock === item.qty) return;

    const updatedItems = cartItems.map((i) => {
      if (i.product._id === item.product._id) {
        i.qty++;
      }
      return i;
    });

    setcartItems(updatedItems);
  }

  function decreaseqty(item) {
    if (item.qty > 1) {
      const updatedItems = cartItems.map((i) => {
        if (i.product._id === item.product._id) {
          i.qty--;
        }
        return i;
      });
      setcartItems(updatedItems);
    }
  }

  function removeitem(item) {
    const updatedItems = cartItems.filter(
      (i) => i.product._id !== item.product._id
    );
    setcartItems(updatedItems);
  }

  function placeorderHandler() {
    fetch(process.REACT_APP_API_URL  + "/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    }).then(() => {
      setcartItems([]);
      setComplete(true);
      toast.success("Order successful");
    });
  }

  return cartItems.length > 0 ? (
    <Fragment>
      <div className="container container-fluid">
        <h2 className="mt-5">
          Your Cart: <b>{cartItems.length} items</b>
        </h2>
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-lg-8">
            {cartItems.map((item) => (
              <Fragment key={item.product._id}>
                <hr />
                <div className="cart-item">
                  <div className="row">
                    <div className="col-4 col-lg-3">
                      <img
                        src={item.product.images[0].image}
                        alt={item.product.name}
                        height="90"
                        width="115"
                      />
                    </div>
                    <div className="col-5 col-lg-3">
                      <Link to={`/product/${item.product._id}`}>
                        {item.product.name}
                      </Link>
                    </div>
                    <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                      <p id="card_item_price">₹{item.product.price}</p>
                    </div>
                    <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                      <div className="stockCounter d-inline">
                        <span
                          className="btn btn-danger minus"
                          onClick={() => decreaseqty(item)}
                        >
                          -
                        </span>
                        <input
                          type="number"
                          className="form-control count d-inline"
                          value={item.qty}
                          readOnly
                        />
                        <span
                          className="btn btn-primary plus"
                          onClick={() => increaseqty(item)}
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                      <i
                        id="delete_cart_item"
                        onClick={() => removeitem(item)}
                        className="fa fa-trash btn btn-danger"
                      ></i>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>

          <div className="col-12 col-lg-3 my-4">
            <div id="order_summary">
              <h4>Order Summary</h4>
              <hr />
              <p>
                Total units:{" "}
                <span className="order-summary-values">
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)} Units
                </span>
              </p>
              <p>
                 Total price:{" "}
                <span className="order-summary-values">
                ₹{cartItems.reduce((acc, item) => acc + item.product.price * item.qty, 0)}
                </span>
              </p>
              <hr />
              <button
                id="checkout_btn"
                onClick={placeorderHandler}
                className="btn btn-primary btn-block"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  ) : !complete ? (
    <h2 className="mt-5">Your cart is empty</h2>
  ) : (
    <Fragment>
      <h2 className="mt-5">Order Complete</h2>
      <p>Your order has been successfully completed.</p>
    </Fragment>
  );
}
