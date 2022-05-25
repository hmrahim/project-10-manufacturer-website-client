import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import atuh from "../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { async } from "@firebase/util";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ForgotPass = () => {
    const [user] = useAuthState(atuh)
    const redirect = useNavigate()
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(atuh);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit =async (data) => {
   await sendPasswordResetEmail(data.email)
    toast.success("Password reset email is sent to your email!")
    reset()
   
  };
  return (
    <div className="md:w-2/6 lg:w-2/6 w-full px-6 md:px-0 mx-auto bg-base-300 my-10 rounded-lg">
        <Helmet>
        <title>Falcon-Reset-Password</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1 className="text-4xl text-center font-semibold py-4">Reset Password</h1>
      <div className="p-5">
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text"> Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
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
            <label className="label">
              {errors?.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors?.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

        
          <div className="form-control w-full mt-5">
            {error && (
              <p className="text-center text-[14px] my-2 text-red-500">
                {error.message}
              </p>
            )}

            {sending ? (
              <button className="btn btn-primary loading capitalize">Sending...</button>
            ) : (
              <button className="btn btn-primary capitalize">Send</button>
            )}
          </div>
        
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
