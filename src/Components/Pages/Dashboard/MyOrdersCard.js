import React from "react";
import { Link } from "react-router-dom";

const MyOrdersCard = ({ product, refetch, index }) => {
    refetch()
  return (
    <tr class="hover">
      <th>{index + 1}</th>
      <td>{product.name}</td>
      <td>{product.email}</td>
      <td>{product.phone}</td>
      <td>{product.title}</td>
      <td>{product.quantity}</td>
      <td>${product.price}</td>
      <td>
        <div class="avatar">
          <div class="w-16 rounded">
            <img
              src={product.image}
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
        </div>
      </td>
      <td> 
        
        {
          product.paid ? <button className="btn btn-xs capitalize" >{product.status == 0 ? "Pending" : "Shift"}</button> : <Link to={`/dashboard/payment/${product._id}`} class="btn btn-xs capitalize">pay</Link>
        }
        </td>
    </tr>
  );
};

export default MyOrdersCard;
