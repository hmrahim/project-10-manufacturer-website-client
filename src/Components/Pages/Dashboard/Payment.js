import { getIdToken } from "firebase/auth";
import { parse } from "postcss";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0ULQEQ3HWClU68RtrUt6CyvbFHjwzYfg7M3eyxuTnp8rigwHoU9A2g4aaV3KZxcUQ5LAgWqvUvV0inCOV2pp6W00CtO27aTl"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/orderpayment/${id}`;
  const { data, isLoading, refetch } = useQuery(["available",id], () =>
    fetch(url, getIdToken).then((res) => res.json())
  );
  const totalPrice = parseInt(data?.price) * parseInt(data?.quantity);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="w-full px-6 md:px-0">
        <div className="w-full md:w-4/5 h-full mt-10 rounded-lg mx-auto p-3  flex flex-col md:flex-row bg-base-300 gap-10">
          <div className="flex-1">
            <h1 className="text-center text-3xl my-2">
              Payment for this product
            </h1>{" "}
            <hr />
            <div>
              <h1 className="text-xl capitalize my-2 ">{data.title}</h1>
              <h3 className="text-xl my-2 capitalize">Unit: 1 pcs </h3>

              <h3 className="text-xl my-2 capitalize">
                Total Quantity: {data.quantity} pcs
              </h3>
              <h3 className="text-xl my-2 capitalize">
                Price : ${data.price} per unit
              </h3>
              <h3 className="text-xl my-2 capitalize">
                Total Price: ${totalPrice}
              </h3>
              <h3 className="text-xl my-2 capitalize">
                Total Quantity: {data.quantity} pcs
              </h3>
              <h3 className="text-xl my-2 ">Your Email: {data.email}</h3>
            </div>
          </div>
          <div className="bg-base-100 flex-1 p-5 ">
            <div className="">
              <Elements stripe={stripePromise}>
                <CheckoutForm data={data} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
