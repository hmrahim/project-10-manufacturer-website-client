import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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
            "content-type":"application/json",
            authorization:`bearer ${localStorage.getItem("token")}`
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
              <button  className="btn btn-xs btn-success capitalize">Shipped</button>

            }
          </div> 
           : 
           <>
          
          <button className="btn btn-xs capitalize">Unpaid</button>
          <button onClick={()=>cancelOrder(product._id)} className="btn btn-xs btn-error capitalize ml-2">Cancel</button>
           </>
          
          
        }
        
      </td>
    </tr>
  );
};

export default ManageOrderCard;
