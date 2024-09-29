import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [products, setproducts] = useState([]);
  const [searchParams,setsearchParams]=useSearchParams()    ///ithu search panna 

  useEffect(() => {
    fetch(process.env."https://formerscart-backend.onrender.com"+ "/products?"+searchParams) ////ithu product url la .env  file la store panni,fetch pannurom
      .then((res) => res.json())
      .then((res) => setproducts(res.products));
  }, [searchParams]);    

  return (
    <Fragment>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
      <div className="row">
           {products.map(product =><ProductCard product={product} />)}    {/* props send pana */}
        </div>
      </section>
    </Fragment>
  );
}

