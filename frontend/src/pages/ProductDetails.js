import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProductDetails({cartItems,setcartItems}) {
  const [product, setproduct] = useState(null);

  const [qty,setqty]=useState(1);
  const { id } = useParams();
  useEffect(() => {
    fetch(process.env.https://formerscart-backend.onrender.com + "/product/" + id) ////ithu product url la .env  file la store panni,fetch pannurom
      .then((res) => res.json())
      .then((res) => setproduct(res.product));
  }, []);


  function addToCart(){
     const ItemExist= cartItems.find((Item)=>Item.product._id == product._id)
     if(!ItemExist){
        const newItem = {product,qty};
        setcartItems((state)=>[...state,newItem]);
        toast.success("cart item add succesfully!")
     }
    
  }
//ithu normal incress deress panna
  function increaseqty(){
    if(product.stock == qty){
      return;
    }
    setqty((state)=>state +1 )
  }
  function decreaseqty(){
    if(qty>1){
       return setqty((state)=>state -1);
    } 
  }

  return (
    product && (
      <div className="container container-fluid">
        <div className="row f-flex justify-content-around">
          <div className="col-12 col-lg-5 img-fluid" id="product_image">
            <img
              src={product.images[0].image}
              alt="sdf"
              height="500"
              width="500"
            />
          </div>

          <div className="col-12 col-lg-5 mt-5">
            <h3>{product.name}</h3>
            <p id="product_id">Product # {product._id}</p>

            <hr />

            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
            </div>

            <hr />
            {/*  */}
            <p id="product_price">₹{product.price}</p>
            <div className="stockCounter d-inline">
              <span className="btn btn-danger minus" onClick={decreaseqty} >-</span>

              <input
                type="number"
                className="form-control count d-inline"
                value={qty}
                readOnly
              />

              <span className="btn btn-primary plus" onClick={increaseqty}>+</span>
            </div>
                  {/* disabled kututha varathu */}
            <button
              type="button" onClick={addToCart} disabled={product.stock == 0}
              id="cart_btn"
              className="btn btn-primary d-inline ml-4" >
              Add to Cart
            </button>


            {/* add cart panna steps.
            1.app.js la ProductDetails La useState create pannanum(cartItems,setcartItems)
            2.ProductDetails ----- la (cartItems,setcartItems)  props aa send pannanum
            3.ProductDetails components la props vanganum 
            4.addToCart function create pananum. next atha onClick la potanum */}

            <hr />

            <p>
              Status:{" "}
              <span
                id="stock_status"
                className={product.stock > 0 ? "text-success" : "text-danger"}
              >
                {product.stock > 0 ? "In stock" : "Out of Stock"}
              </span>
            </p>

            <hr />

            <h4 className="mt-2">Description:</h4>
            <p>{product.description}</p>
            <hr />
            <p id="product_seller mb-3">
              Sold by: <strong>{product.seller}</strong>
            </p>

            <div className="rating w-50"></div>
          </div>
        </div>
      </div>
    )
  );
}
