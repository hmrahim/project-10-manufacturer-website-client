import React from 'react';
import {useForm} from "react-hook-form"
import { Link } from 'react-router-dom';
const Signup = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    return (
        <div className="md:w-2/6 lg:w-2/6 w-full px-6 md:px-0 mx-auto bg-base-300 my-10 rounded-lg">
      <h1 className="text-4xl text-center font-semibold py-4">Signup</h1>
      <div className="p-5">
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text"> Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full "
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
             
              })}
            />
            <label class="label">
              {errors?.name?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
           
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text"> Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full "
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Please provide a valid email address",
                },
              })}
            />
            <label class="label">
              {errors?.email?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors?.email?.type === "pattern" && (
                <span class="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Password?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full "
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 6,
                  message: "Your password shound be more then 6 digit",
                },
              })}
            />
            <label class="label">
              {errors?.password?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors?.password?.type === "minLength" && (
                <span class="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
         
          <label class="label">
              <Link to="/login" class="label-text-alt link link-hover">
                Already have an account ?
              </Link>
            </label>
          <div class="form-control w-full mt-5">
            <button className="btn btn-primary">Signup</button>
           
          </div>
          <div class="divider">OR</div>
        </form>
        <div class="form-control w-full mt-5">
            <button className="btn btn-outline">Continue with google</button>
           
          </div>
      </div>
    </div>
    );
};

export default Signup;