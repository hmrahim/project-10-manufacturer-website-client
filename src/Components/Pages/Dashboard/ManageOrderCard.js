import React from "react";

const ManageOrderCard = ({ product, refetch, index }) => {
  const shiftProduct = (id)=> {
    fetch(`https://protected-peak-92782.herokuapp.com/shiptproduct/${id}`,{
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
    <tr className="hover">
      <th>{index + 1}</th>
      <td>{product.name}</td>
      <td>{product.email}</td>
      <td>{product.phone}</td>
      <td>{product.title}</td>
      <td>{product.quantity}</td>
      <td>${product.price}</td>
      <td>
        <div className="avatar">
          <div className="w-16 rounded">
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
              <button onClick={()=> shiftProduct(product._id)} className="btn btn-xs btn-info capitalize">pending</button>
              :
              <button className="btn btn-xs btn-success capitalize">Shifted</button>

            }
          </div> 
           : 
           <button className="btn btn-xs capitalize">unpaid</button>
          
          
          
        }
        
      </td>
    </tr>
  );
};

export default ManageOrderCard;
