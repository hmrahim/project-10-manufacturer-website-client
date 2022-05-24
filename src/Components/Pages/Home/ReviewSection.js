import React from "react";
import ReviewCard from "./ReviewCard";
import img from "../../../images/review.png"
import { useQuery } from "react-query";
import Loading from "../Dashboard/Loading";

const ReviewSection = () => {

    const {data,isLoading} = useQuery("reviews",()=> fetch("https://protected-peak-92782.herokuapp.com/reviews").then(res=>res.json()))

    if(isLoading){
        return <Loading/>
    }
  return (
    <div className="w-full bg-base-300 ">
      <h1 className="  text-4xl text-center capitalize font-semibold p-2  ">
        Customer Reviews
      </h1>
      <div className="w-full md:w-11/12 mx-auto  md:p-10 p-6  mx-auto flex flex-col md:flex-row gap-3">
       
       <div className=" md:flex-1 md:order-1 order-2 h-[80vh] pr-10 bg-base-100 rounded-lg overflow-y-auto overflow-x-clip p-3">
           {
               data.map((review,index)=>  <ReviewCard key={index} review={review} />)
           }
          
          
       </div>
       <div className="md:flex-1 flex justify-center items-center md:order-2 order-1">
           <img src={img} alt="" />
       </div>
        </div>
        
      
    </div>
  );
};

export default ReviewSection;
