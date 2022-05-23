import React, { useEffect, useState } from "react";
import getToken from "../../Hooks/getToken";
import AllProductCard from "./AllProductCard";

const AllProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allproducts", getToken)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="mt-20 w-11/12 mx-auto">
      <h1 className="text-center text-4xl font-semibold my-5">OUR PRODUCTS</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {
            data.map((product,index)=> <AllProductCard key={index} product={product} />)
        }
        
      </div>
    </div>
  );
};

export default AllProducts;
