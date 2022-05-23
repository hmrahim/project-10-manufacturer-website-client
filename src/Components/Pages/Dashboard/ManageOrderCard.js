import React from "react";

const ManageOrderCard = ({ product, refetch, index }) => {
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
      <td> <button class="btn btn-xs">{product.paid ? "pending" : "Unpaid"}</button></td>
    </tr>
  );
};

export default ManageOrderCard;
