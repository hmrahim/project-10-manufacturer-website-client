import React from "react";
import Footer from "../Footer/Footer";
import img from "../../../images/notfound.png";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const NotFound = () => {
  return (
    <div className="w-full ">
       <Helmet>
        <title>404 Not-Found</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      
      <div className="w-full md:w-11/12 mx-auto flex flex-col justify-center items-center h-[100vh]">
        <img src={img} alt="" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-3xl">Page not found</h1>
          <Link to="/" className="btn btn-primary mt-4">
            Back to home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
