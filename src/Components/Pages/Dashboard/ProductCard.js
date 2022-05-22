import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ProductCard = ({ product, index, refetch }) => {
  const { _id, title, price, image, quantity, minquantity, desc, categorie } =
    product;

  const deleteProduct = (id) => {
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
        fetch(`http://localhost:5000/product/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("Product deleted succesfully");
          });
      }
    });
  };
  refetch();
  return (
    <tr>
      <th className="text-center">{index + 1}</th>
      <td className="text-center">{title}</td>
      <td className="text-center">{price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center">{categorie}</td>
      <td className="text-center">{desc.slice(0, 20)}</td>
      <td className="text-center">
        <div class="avatar">
          <div class="w-16 rounded">
            <img src={image} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td className="text-center">
        <Link
          to={`/dashboard/updateproduct/${_id}`}
          class="btn btn-sm btn-success"
        >
          Edit
        </Link>
        <button
          onClick={() => deleteProduct(_id)}
          class="btn btn-sm btn-error ml-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductCard;
