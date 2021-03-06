import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MyOrdersCard = ({ product, refetch, index }) => {
  const cancelOrder = (id)=> {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Cancelled!',
          'Your order has been cancelled.',
          'success'
        )
        fetch(`https://protected-peak-92782.herokuapp.com/order/${id}`,{
          method:"DELETE",
          headers:{
            "content-type":"application/json"
          }
        })
        .then(res=>res.json())
        .then(data=>console.log(data))


      }
    })

  

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
      <td className="text-red-500">{product?.transactionId ? product.transactionId : "Payment not complete"}</td>
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
          product.paid ? <button className="btn btn-xs capitalize" >{product.status == 0 ? "Pending" : "Shipped"}</button> 
          : 
          <>
          <Link to={`/dashboard/payment/${product._id}`} className="btn btn-xs capitalize">pay</Link>
          <button onClick={()=> cancelOrder(product._id)} className="btn btn-xs btn-error capitalize ml-3" >Cancel order</button> 
          </>
          
        }
        </td>
    </tr>
  );
};

export default MyOrdersCard;
