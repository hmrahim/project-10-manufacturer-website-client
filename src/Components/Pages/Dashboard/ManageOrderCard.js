import React from "react";

const ManageOrderCard = ({ product, refetch, index }) => {
  const shiftProduct = (id)=> {
    fetch(`http://localhost:5000/shiptproduct/${id}`,{
      method:"PATCH",
      headers:{
        "content-type":"application/json",
        authorization:`bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))


  }
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
          product.paid ?
          <div>
            {
              product.status== 0 ?
              <button onClick={()=> shiftProduct(product._id)} class="btn btn-xs btn-info capitalize">pending</button>
              :
              <button class="btn btn-xs btn-success capitalize">Shifted</button>

            }
          </div> 
           : 
           <button class="btn btn-xs capitalize">unpaid</button>
          
          
          
        }
        
      </td>
    </tr>
  );
};

export default ManageOrderCard;
