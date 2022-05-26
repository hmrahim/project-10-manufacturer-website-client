import React from "react";
import { useQuery } from "react-query";
import { useParams,Link, useNavigate } from "react-router-dom";
import getToken from "../../Hooks/getToken";
import Loading from "./Loading";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const MessageModal = () => {
    const {id} = useParams()
    const { data, isLoading, refetch } = useQuery(["message",id], () =>
    fetch(`https://protected-peak-92782.herokuapp.com/message/${id}`, getToken).then((res) => res.json())
  );
const redirect = useNavigate()
  const deleteMessage = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`https://protected-peak-92782.herokuapp.com/message/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
              redirect("/dashboard/messages")
          });
      }
    });
  };
  

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
                <button onClick={()=> deleteMessage(data._id)} className="btn btn-error btn-sm ">Delete</button>
                <Link to="/dashboard/messages" className="btn btn-info btn-sm ml-3">Go back</Link>
            </div>

        </div>
      
    </div>
  );
};

export default MessageModal;
