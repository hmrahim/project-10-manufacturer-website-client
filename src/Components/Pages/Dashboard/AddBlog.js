import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddBlog = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onsubmit = (data) => {
   
    // console.log(data);
    // console.log(obj);

    fetch("https://protected-peak-92782.herokuapp.com/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Review sent succesfully !");
        reset()
       
      });
  };
  return (
    <div className="md:w-3/5 w-full bg-base-300 mx-auto p-3 rounded-lg">
      <h1 className="text-4xl text-center capitalize my-3">Add new blog</h1>
      <hr />
      <form onSubmit={handleSubmit(onsubmit)} action="">
        <div className="grid grid-cols-1  gap-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              {...register("title", {
                required: {
                  value: true,
                  message: "Title is required",
                },
              })}
            />
            <label className="label">
              {errors?.title?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.title.message}
                </span>
              )}
            </label>
          </div>
          
         
          
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Blog Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Blog description"
              {...register("blog", {
                required: {
                  value: true,
                  message: "Blog description is required",
                },
              })}
            ></textarea>
            <label className="label">
              {errors?.blog?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.blog.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <button className="btn btn-primary">Send Review</button>
      </form>
    </div>
  );
};

export default AddBlog;
