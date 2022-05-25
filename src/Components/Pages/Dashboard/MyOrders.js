import React from "react";
import { useQuery } from "react-query";
import getToken from "../../Hooks/getToken";
import Loading from "./Loading";
import ManageOrderCard from "./ManageOrderCard";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import MyOrdersCard from "./MyOrdersCard";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const { data, isLoading, refetch } = useQuery(["available",email], () =>
    fetch(`https://protected-peak-92782.herokuapp.com/order/${email}`, getToken).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mt-5 bg-base-300 rounded-lg w-full mx-auto pb-20 md:pb-0">
      <h1 className="text-center capitalize text-4xl font-semibold py-4">
        Manage Orders
      </h1>
      <div className="overflow-x-auto p-3">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className="text-center">No</th>
              <th className="text-center">Name</th>
              <th className="text-center">email</th>
              <th className="text-center">Phone</th>
              <th className="text-center">Product Title</th>
              <th className="text-center">Total Quantity</th>
              <th className="text-center">Price per unit</th>
              <th className="text-center">Image</th>

              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {data?.map((product, index) => (
              <MyOrdersCard index={index} product={product} refetch={refetch} />
            ))}

            {/* <!-- row 2 --> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
