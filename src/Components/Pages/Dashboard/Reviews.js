import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Reviews = () => {
    
   

    const {register,formState:{errors},handleSubmit,reset} = useForm()

    const onsubmit = (data)=> {
        const obj = {
            name:data.name,
            email:data.email,
            phone:data.phone,
            review:data.review
        }
       
        fetch("http://localhost:5000/reviews",{
            method:"POST",
            headers:{
              "content-type":"application/json",
              authorization:`bearer ${localStorage.getItem("token")}`
            },
            body:JSON.stringify(obj)
          })
        .then(res=>res.json())
        .then(data=>{
            toast.success("Review sent succesfully !")
            reset()
        })

    }
  return (
    <div className="md:w-3/5 w-full bg-base-300 mx-auto p-3 rounded-lg">
      <h1 className="text-4xl text-center capitalize my-3">Send a Review</h1> <hr />
      <form onSubmit={handleSubmit(onsubmit)} action="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Your Name</span>
          </label>
          <input
        
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
            {...register("name",{
                required:{
                    value:true,
                    message:"Name is required"
                }
            })}
          
          />
          <label class="label">
              {errors?.name?.type === "required" &&   <span class="label-text-alt text-red-500">{errors.name.message}</span>}
           
          </label>
        </div>
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Your Email</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
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
          <label class="label">
          {errors?.email?.type === "required" &&   <span class="label-text-alt text-red-500">{errors.email.message}</span>}
          {errors?.email?.type === "pattern" &&   <span class="label-text-alt text-red-500">{errors.email.message}</span>}
           
          </label>
        </div>
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Your Phone</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            class="input input-bordered w-full "
            {...register("phone",{
                required:{
                    value:true,
                    message:"phone is required"
                },
                minLength:{
                    value:11,
                    message:"You have to provide more then 11 carrecter"
                }
            })}
          />
          <label class="label">
          {errors?.phone?.type === "required" &&   <span class="label-text-alt text-red-500">{errors.phone.message}</span>}
          {errors?.phone?.type === "minLength" &&   <span class="label-text-alt text-red-500">{errors.phone.message}</span>}
           
          </label>
        </div>
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Your Review</span>
          </label>
          <textarea 
          class="textarea textarea-bordered"
           placeholder="Review"
           {...register("review",{
            required:{
                value:true,
                message:"Review is required"
            }
        })}
           >

           </textarea>
          <label class="label">
          {errors?.review?.type === "required" &&   <span class="label-text-alt text-red-500">{errors.review.message}</span>}
           
          </label>
        </div>
      </div>
      <button className="btn btn-primary">Send Review</button>
      </form>
      
    </div>
  );
};

export default Reviews;