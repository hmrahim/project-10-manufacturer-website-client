import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ReviewCard = ({ review, index, refetch }) => {
  const deleteReview = (id) => {
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

        fetch(`https://protected-peak-92782.herokuapp.com/reviews/${id}`, {
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
      <th className="text-center">{index + 1}</th>
      <td className="text-center">{review?.name}</td>
      <td className="text-center">{review?.email}</td>
      <td className="text-center">{review?.phone}</td>
      <td className="text-center">
  {
      review.rating == "1" &&       
      <div className="rating rating-sm">
        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
    
      </div>
  }
   {
      review.rating == "2" &&       
      <div className="rating rating-sm">
       <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
       <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
      
      </div>
  }
   {
      review.rating == "3" &&       
      <div className="rating rating-sm">
       <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
       <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
      
       <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
      </div>
  }
   {
      review.rating == "4" &&       
      <div className="rating rating-sm">
       <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
       <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
       <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
      
       <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
      </div>
  }
   {
      review.rating == "5" &&       
      <div className="rating rating-sm">
       <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
       <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
       <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
       <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
      
       <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
      </div>
  }
      </td>
      <td className="text-center">{review?.review?.slice(0, 30) + "..."}</td>
      <td className="text-center">
        <button
          onClick={() => deleteReview(review._id)}
          className="btn btn-error btn-sm"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default ReviewCard;
