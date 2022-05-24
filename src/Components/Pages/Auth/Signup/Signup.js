import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword,useSignInWithGoogle,useUpdateProfile ,useSendEmailVerification} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init"
import { ToastContainer, toast } from 'react-toastify';
import useMakeUser from "../../../Hooks/useMakeUser";

const Signup = () => {
  const [createUserWithEmailAndPassword, SignupUser, SignupLoading, SignupError] =
    useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, VerifyError]= useSendEmailVerification(auth)
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();


console.log(SignupUser || googleUser);
  const [token] = useMakeUser(SignupUser || googleUser)


  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email,data.password)
    .then(()=> {
     updateProfile({displayName:data.name})
     .then(async()=> {
       await sendEmailVerification()
       toast.success("Verification email sent please veriy your account")
       reset()
     })

    })

  };

  const googleSignup = ()=> {
    signInWithGoogle()
    .then(()=> {
      toast.success("Login succesfully!")
    })
    
  }
  return (
    <div className="md:w-2/6 lg:w-2/6 w-full px-6 md:px-0 mx-auto bg-base-300 my-10 rounded-lg">
      <h1 className="text-4xl text-center font-semibold py-4">Signup</h1>
      <div className="p-5">
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text"> Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              {...register("title", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <label className="label">
              {errors?.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
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
            <Link to="/login" className="label-text-alt link link-hover">
              Already have an account ?
            </Link>
          </label>
          <div className="form-control w-full mt-5">
      {SignupError && <p className="text-center text-[14px] my-2 text-red-500">{SignupError.message}</p>}
      {googleError && <p className="text-center text-[14px] my-2 text-red-500">{googleError.message}</p>}
              {
                  SignupLoading ?<button className="btn btn-primary loading">Loading</button> :<button className="btn btn-primary">Signup</button>
              }
            
          </div>
          <div className="divider">OR</div>
        </form>
        <div className="form-control w-full mt-5">
          <button onClick={googleSignup} className="btn btn-outline">Continue with google</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
