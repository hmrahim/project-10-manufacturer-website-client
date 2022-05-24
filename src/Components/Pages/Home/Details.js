import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Dashboard/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Details = () => {
  const { id } = useParams();
  const { data, isLoading, refetch } = useQuery(["available",id], () =>
    fetch(`https://protected-peak-92782.herokuapp.com/productdetails/${id}`).then((res) =>
      res.json()
    )
  );

  const [user] = useAuthState(auth);

  const [qty, setQty] = useState(100);
  const increase = () => {
    setQty(parseInt(qty) + 1);
  };
  const decrease = () => {
    if (qty <= 100) {
      return false;
    } else {
      setQty(parseInt(qty) - 1);
    }
  };
  // let error;
  //   if(qty > quantity){
  //     error = "You can not order more then available quantity"

  //   }
const {register,formState:{errors},handleSubmit,reset} = useForm()
const navigate = useNavigate()

let nameError;
let emailError;
let phoneError;
let addressError;
let quantityError;


  const onSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const phone = e.target.phone.value
    const address = e.target.address.value
    
    if(!name){
      toast.error("Name is required")
    }else if(!email){
      toast.error("Email is required")
    }else if(!phone){
      toast.error("Phone is required")
    }else if(!address){
      toast.error("Address is required")

    }else{
      const obj = {
        productid: data._id,
        title: data.title,
        price: data.price,
        quantity:e.target.orderqty.value,
        name:e.target.name.value,
        email: e.target.email.value,
        phone:e.target.phone.value,
        address:e.target.address.value,
        image:data.image
        
      };
  
      fetch("https://protected-peak-92782.herokuapp.com/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(obj),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Your order is pending please complete the payment")
          // console.log(data);
          navigate("/completeorder")
        });

    }

    
    
  };

  if (isLoading) {
    return <Loading />;
  }

  refetch();
  return (
    <div className="w-full px-6 md:px-0">
      <div className="w-full md:w-4/5 h-full mt-10 rounded-lg mx-auto p-3  flex flex-col md:flex-row bg-base-300">
        <div className="flex-1  mt-4 md:mt-0 p-4">
          <div className="w-full flex justify-center items-center">
          <img src={data.image} className=" rounded-lg" alt="" />

          </div>
          
          <div>
                 
          <h1 className="text-5xl capitalize my-2 text-center">{data.title}</h1> 
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
          <p className="mt-5">
            <strong>Details:</strong> {data.desc}
          </p>
          </div>
        </div>
        <div className="flex-1 mt-4 md:mt-0 p-4 md:border-l-2">

     

          <form onSubmit={onSubmit} action="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter Quantity</span>
              </label>
              <label className="input-group">
                <span
                  onClick={decrease}
                  className="bg-primary cursor-pointer select-none"
                >
                  -
                </span>
                <input
                  name="orderqty"
                  onChange={(e) => setQty(e.target.value)}
                  value={qty}
                  type="number"
                  placeholder="10"
                  className="input border-0 w-20"
                />
                <span
                  onClick={increase}
                  className="bg-primary cursor-pointer select-none"
                >
                  +
                </span>
              </label>
            </div>
            <label htmlFor="">
              {" "}
              <span className="text-[14px] capitalize mt-3 text-red-500">
                {parseInt(data.quantity) < parseInt(qty)
                  ? "you cannot order more then available quantity"
                  : ""}
              </span>{" "}
            </label>
            <label htmlFor="">
              {" "}
              <span className="text-[14px] capitalize mt-3 text-red-500">
                {parseInt(qty) < 100
                  ? "You cannot order less then 100 pcs"
                  : ""}
              </span>{" "}
            </label>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                name="name"
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full "
                />
               
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                name="email"
                value={user?.email}
                disabled
                  type="text"
                  placeholder="Your Email"
                  className="input input-bordered w-full "
                />
             
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Your Phone</span>
                </label>
                <input
                name="phone"
                  type="text"
                  placeholder="Your Phone"
                  className="input input-bordered w-full m"
                />
              
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Your Address</span>
                </label>
                <textarea  name="address" className="textarea" placeholder="Address..."></textarea>
              
              </div>
            </div>

            <div>
              <button className="btn btn-primary mt-5">Order Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
