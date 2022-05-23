import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Dashboard/Loading";
import {useAuthState} from "react-firebase-hooks/auth"
import auth from "../../../firebase.init"

const Details = () => {
  const { id } = useParams();
  const { data, isLoading, refetch } = useQuery("available", () =>
    fetch(`http://localhost:5000/productdetails/${id}`).then((res) =>
      res.json()
    )
  );

  const [user] = useAuthState(auth)
 

  const [qty,setQty] = useState(100)
  const increase = ()=> {
    setQty(parseInt(qty)+1)
  }
  const decrease = ()=> {
    if(qty <= 100){
      return false
    }else{

      setQty(parseInt(qty)-1)
    }

  }
// let error;
//   if(qty > quantity){
//     error = "You can not order more then available quantity"

//   }
const orderNow = (e)=> {
  e.preventDefault()
  const obj = {
    productid:data._id,
    title:data.title,
    price:data.price,
    quantity:e.target.orderqty.value,
    email:user.email


  }

  console.log(obj);
}

 
  if (isLoading) {
    return <Loading />;
  }

  refetch();
  return (
    <div className="w-full px-6 md:px-0">
      <div className="w-full md:w-4/5 h-full mt-10 rounded-lg mx-auto  flex flex-col md:flex-row bg-base-300">
        <div className="flex-1 flex justify-center mt-4 md:mt-0 items-center">
          <img src={data.image} className="rounded-xl" alt="" />
        </div>
        <div className="flex-1 mt-4 md:mt-0 p-4">
          <h1 className="text-5xl capitalize my-2">{data.title}</h1>
          <h3 className="text-xl my-2 capitalize">Unit: 1 pcs </h3>
          <h3 className="text-xl my-2 capitalize">
            Price: ${data.price} per unit{" "}
          </h3>
          <h3 className="text-xl my-2 capitalize">
            available quantity: {data.quantity} pcs{" "}
          </h3>
          <h3 className="text-xl my-2 capitalize">
            minimum order quantity: {data.minquantity} pcs{" "}
          </h3>
          <form onSubmit={orderNow} action="">
            <div class="form-control">
              <label class="label">
                <span class="label-text text-xl capitalize">
                  Enter quantity
                </span>
              </label>
              <label class="input-group">
                <span onClick={decrease} className="bg-primary cursor-pointer select-none">
                  -
                </span>
                <input
                name="orderqty"
                onChange={(e)=> setQty(e.target.value)}
                value={qty}
                  type="number"
                  placeholder="10"
                  class="input border-0 w-20"
                  
                />
                <span onClick={increase} className="bg-primary cursor-pointer select-none">
                  +
                </span>
              </label>

            </div>
            <label htmlFor=""> <span className="text-[14px] capitalize mt-3 text-red-500">{parseInt(data.quantity ) < parseInt(qty) ? "you cannot order more then available quantity" : ""}</span> </label>
            <label htmlFor=""> <span className="text-[14px] capitalize mt-3 text-red-500">{ parseInt(qty) < 100 ? "You cannot order less then 100 pcs" : ""}</span> </label>

            <div>
              <button className="btn btn-primary mt-5">Order Now</button>
            </div>
          </form>



          <p className="mt-5"><strong>Details:</strong> {data.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
