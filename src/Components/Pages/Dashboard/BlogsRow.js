import React from 'react';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const BlogsRow = ({index,blog,refetch}) => {


    const deleteBlog = (id)=> {
        console.log(id);
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
            fetch(`https://protected-peak-92782.herokuapp.com/blogs/${id}`,{
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
       <tr>
           <td className="text-center">{index + 1}</td>
           <td className="text-center">{blog.title}</td>
           <td className="text-center">{blog?.blog?.slice(0,30)+"......"}</td>
           <td className="text-center"><button onClick={()=> deleteBlog(blog._id)} className='btn btn-sm btn-error'>Delete</button></td>
       </tr>
    );
};

export default BlogsRow;