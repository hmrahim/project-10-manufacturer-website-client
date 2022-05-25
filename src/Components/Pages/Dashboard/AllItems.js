import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import getToken from "../../Hooks/getToken";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

const AllItems = () => {
  const { data, isLoading, refetch, error } = useQuery("available", () =>
    fetch("https://protected-peak-92782.herokuapp.com/product").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mt-5 bg-base-300 rounded-lg w-full mx-auto pb-20 md:pb-0">
      <h1 className="text-center capitalize text-4xl font-semibold py-4">
        All items
      </h1>
      <div className="overflow-x-auto p-3">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className="text-center">No</th>
              <th className="text-center">Name</th>
              <th className="text-center">Price</th>
              <th className="text-center">Available Quantity</th>
              <th className="text-center">Categorie</th>
              <th className="text-center">Description</th>
              <th className="text-center">image</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {data.map((product, index) => (
              <ProductCard
                key={index}
                index={index}
                product={product}
                refetch={refetch}
              />
            ))}

            {/* <!-- row 2 --> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllItems;
