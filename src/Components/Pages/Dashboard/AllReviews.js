import React from 'react';
import { useQuery } from 'react-query';
import getToken from "../../Hooks/getToken"
import Loading from "./Loading"
import ReviewCard from './ReviewCard';
const AllReviews = () => {
  const {data,isLoading,refetch} = useQuery("review",()=> fetch("https://protected-peak-92782.herokuapp.com/reviews",getToken).then(res=>res.json()))
  

  if(isLoading){
    return <Loading/>
  }
  return (
        <div className="mt-5 bg-base-100 rounded-lg w-full mx-auto pb-20 md:pb-0">
      <h1 className="text-center capitalize text-4xl font-semibold py-4">
        All Reviews
      </h1>
      <div className="overflow-x-auto p-3">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className="text-center">No</th>
              <th className="text-center">Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Phone</th>
              <th className="text-center">Rating</th>
              <th className="text-center">Review</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
         {
           data.map((review,index)=> <ReviewCard key={index} index={index} review={review} refetch={refetch} />)
         }

            {/* <!-- row 2 --> */}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllReviews;