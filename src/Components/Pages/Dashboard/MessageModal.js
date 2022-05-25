import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import getToken from "../../Hooks/getToken";
import Loading from "./Loading";

const MessageModal = () => {
    const {id} = useParams()
    const { data, isLoading, refetch } = useQuery(["message",id], () =>
    fetch(`https://protected-peak-92782.herokuapp.com/message/${id}`, getToken).then((res) => res.json())
  );

 console.log(data);
 if(isLoading){
     return <Loading/>
 }
  return (
    <div className="w-full md:w-2/4 mx-auto bg-base-100 p-4 flex items-center justify-center rounded-2xl">
        <div>
            <h1 className="text-2xl font-semibold underline uppercase my-3">{`${data.fname} ${data.lname}`}</h1>
            <h3 className="my-3 italic"><strong>Email:</strong> {data.email}</h3>
            <h3 className="my-3 italic"><strong>Phone:</strong> {data.phone}</h3>
            <p className="my-3 text-justify"><strong>Message:</strong> {data.message}</p>

            <div className="mt-10">
                <button className="btn btn-error btn-sm ">Delete</button>
                <button className="btn btn-info btn-sm ml-3">Go back</button>
            </div>

        </div>
      
    </div>
  );
};

export default MessageModal;
