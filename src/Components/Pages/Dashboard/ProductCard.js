import React from "react";

const ProductCard = ({ product, index }) => {
  const { title, price, image, quantity, minquantity, desc ,categorie} = product;
  return (
    <tr>
      <th className="text-center">{index + 1}</th>
      <td className="text-center">{title}</td>
      <td className="text-center">{price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center">{categorie}</td>
      <td className="text-center">{desc.slice(0,100)}</td>
      <td className="text-center">
        <div class="avatar">
          <div class="w-16 rounded">
            <img
              src={image}
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
        </div>
      </td>
      <td className="text-center">
      <button class="btn btn-sm btn-success">Edit</button>
      <button class="btn btn-sm btn-error ml-2">Delete</button>
      </td>
     
    </tr>
  );
};

export default ProductCard;
