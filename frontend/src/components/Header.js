import { Link } from "react-router-dom";
import Search from "./Search";



export default function Header({cartItems}) {
  return (
    <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <Link to='/'> Formers Cart </Link>
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
      <Search/>                                     {/*  intha search mattm components mattm use paniyachu */} 
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
       <Link to={"/cart"}>                           {/*ithu cart ku link pani iruku */}
        <span id="cart" className="ml-3" >
          Cart
        </span>
        <span className="ml-1" id="cart_count">
          {cartItems.length}
        </span>
        </Link>
        
      </div>
    </nav>
  );
}
