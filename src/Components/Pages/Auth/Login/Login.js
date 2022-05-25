import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword ,useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from "../../../../firebase.init"
import { toast } from "react-toastify";
import useMakeToken from "../../../Hooks/useMakeToken";
import useMakeUser from "../../../Hooks/useMakeUser";
import { GoogleAuthProvider } from "firebase/auth";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Login = () => {
    const [
        signInWithEmailAndPassword,
        signinUser,
        signinLoading,
        signinError,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
 const [token] = useMakeUser(signinUser || googleUser)
 const location = useLocation()
 const from = location?.state?.from?.pathname || "/"
 const navigate = useNavigate()
 if(signinUser || googleUser){
   navigate(from,{replace:true})

 }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email,data.password)
    .then(()=> {
        if(signinUser){
            toast.success("Successfully logged in")
        }
        reset()
    })



  };
  const googleSignin = ()=> {
      signInWithGoogle()
      .then(()=> {
        if(googleUser){
            toast.success("Successfully logged in")
        }

      })
  }
  return (
    <div className="md:w-2/6 lg:w-2/6 w-full px-6 md:px-0 mx-auto bg-base-300 my-10 rounded-lg">
       <Helmet>
        <title>Falcon-Login</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1 className="text-4xl text-center font-semibold py-4">Login</h1>
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
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
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
            <label className="label">
              {errors?.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors?.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          <label className="label">
              <Link to="/forgotpass" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          <label className="label">
              <Link to="/signup" className="label-text-alt link link-hover">
                Create a new account
              </Link>
            </label>
          <div className="form-control w-full mt-5">
          {signinError && <p className="text-center text-[14px] my-2 text-red-500">{signinError.message}</p>}
      {googleError && <p className="text-center text-[14px] my-2 text-red-500">{googleError.message}</p>}
      {
                  signinLoading ?<button className="btn btn-primary loading">Loading</button> :<button className="btn btn-primary">Login</button>
              }
           
          </div>
          <div className="divider">OR</div>
        </form>
        <div className="form-control w-full mt-5">
            <button onClick={googleSignin} className="btn btn-outline">Continue with google</button>
           
          </div>
      </div>
    </div>
  );
};

export default Login;
