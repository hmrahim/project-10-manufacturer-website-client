import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, index, refetch }) => {
  const { _id, title, price, image, quantity, minquantity, desc, categorie } =
    product;

  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/product/${_id}`,{
      method:"DELETE",
      headers:{
        "content-type":"application/json",
        authorization:`bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
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
