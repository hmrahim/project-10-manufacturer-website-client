import React from "react";
import { Link } from "react-router-dom";
import getToken from "../../Hooks/getToken";
import MessageModal from "./MessageModal";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MessageRow = ({ message, index, refetch }) => {
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
          .then((data) => console.log(data));
      }
    });
  };
  refetch();
  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className="text-center">{`${message.fname} ${message.lname}`}</td>
      <td className="text-center">{message.email}</td>
      <td className="text-center">{message.phone}</td>
      <td className="text-center">{message?.message?.slice(0, 20) + "..."}</td>
      <td className="text-center">
        <Link
          to={`/dashboard/viewmessage/${message._id}`}
          className="btn btn-success btn-sm ml-2"
        >
          View{" "}
        </Link>

        <button
          onClick={() => deleteMessage(message._id)}
          className="btn btn-error btn-sm ml-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MessageRow;
