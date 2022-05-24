import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import img from "../../../images/5124556-removebg-preview.png";

const ClientMessage = () => {
  const {register,formState:{errors},handleSubmit,reset} = useForm()

  const onsubmit = (data)=> {
    // console.log(data);
    fetch("http://localhost:5000/message",{
      method:"POST",
      headers:{
        "content-type" : "application/json",
        authorization:`bearer ${localStorage.getItem("token")}`
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      toast.success("Message sent succesfully!")
      reset()
    })

  }
  return (
    <div className="bg-base-300 my-10 ">
        <h1 className="text-center text-4xl font-semibold capitalize py-5">Send Your message</h1>
      <div className="w-11/12 mx-auto flex flex-col md:flex-row p-5">
        <div className="w-full">
          <img src={img} alt="" />
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit(onsubmit)} action="">
            <div className=" grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">What is your first name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type your first name"
                  className="input input-bordered w-full "
                  {...register("fname",{
                    required:{
                      value:true,
                      message:"First name is required"
                    }
                  })}
                />
                 <label className="label">
                   {errors?.fname?.type === "required" &&  <span className="label-text text-red-500">{errors.fname.message}</span>}
                 
                </label>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">What is your last name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type your last name"
                  className="input input-bordered w-full "
                  {...register("lname",{
                    required:{
                      value:true,
                      message:"Last name is required"
                    }
                  })}
                />
                <label className="label">
                   {errors?.lname?.type === "required" &&  <span className="label-text text-red-500">{errors.lname.message}</span>}
                 
                </label>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">What is your email?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type your email"
                  className="input input-bordered w-full "
                  {...register("email",{
                    required:{
                      value:true,
                      message:"Email is required"
                    },
                    pattern:{
                      value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message:"Please provide a valid email address"
                    }
                  })}
                />
                <label className="label">
                   {errors?.email?.type === "required" &&  <span className="label-text text-red-500">{errors.email.message}</span>}
                   {errors?.email?.type === "pattern" &&  <span className="label-text text-red-500">{errors.email.message}</span>}
                 
                </label>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">What is your phone?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type your phone"
                  className="input input-bordered w-full "
                  {...register("phone",{
                    required:{
                      value:true,
                      message:"Phone is required",
                      
                    },
                    minLength:{
                      value:11,
                      message:"Cannot provide less 11 carrecters"
                    }
                  })}
                />
                <label className="label">
                   {errors?.phone?.type === "required" &&  <span className="label-text text-red-500">{errors.phone.message}</span>}
                   {errors?.phone?.type === "minLength" &&  <span className="label-text text-red-500">{errors.phone.message}</span>}
                 
                </label>
              </div>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">What is your message?</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Message"
                {...register("message",{
                  required:{
                    value:true,
                    message:"Message name is required"
                  }
                })}
              ></textarea>
              <label className="label">
                   {errors?.message?.type === "required" &&  <span className="label-text text-red-500">{errors.message.message}</span>}
                 
                </label>
            </div>
            <button type="submit" className="btn btn-primary my-4">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientMessage;
