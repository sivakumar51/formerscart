import {Link} from 'react-router-dom';
export default function ProductCard({product}){
    return  <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card p-3 rounded">



       <img className="card-img-top mx-auto" src={product.images[0].image} />   {/* (product ithu props) next .use pani array va select panna use agum */}{/*thunser client la get products la pakkanum ...images---->0------->image*/}
      
      
      <div className="card-body d-flex flex-column">

        <h5 className="card-title">
          <Link to={"/product/"+product._id}> {product.name}</Link>
        </h5>

        <div className="ratings mt-auto">
          <div className="rating-outer">
            <div className="rating-inner" style={{width:`${product.ratings/5*100}%`}}> </div>   {/*ratings design panna */}
          </div>
        </div>


        <p className="card-text">₹{product.price}</p>


        <Link to={"/product/"+product._id} href="#" id="view_btn" className="btn btn-block">view details</Link>
        {/* view details click pana,,,, 
                                         "/product/"   -----> ithula ena name vana kutukalam  
                                          product._id   ----->ithu la kututhathu vanthu product id(itha thunder client la pakkalam) */}
         
      </div>
    </div>
  </div>
}