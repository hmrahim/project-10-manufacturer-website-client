import React from "react";
import { useQuery } from "react-query";
import getToken from "../../Hooks/getToken";
import postToken from "../../Hooks/postToken";
import UserRow from "./UserRow";
import useAdmin from "../../Hooks/useAdmin";



const Users = () => {
    
    
    const {data,isError,isLoading,refetch} = useQuery("available",
    ()=> fetch("https://protected-peak-92782.herokuapp.com/users",getToken)
    .then(res=>res.json()))
    if(isLoading){
        return <div className='flex justify-center items-center mt-10'>
       <button className='btn loading'>loading...</button>
   </div>
   } 
 
   
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className='text-center'>Seriul</th>
              <th className='text-center'>Name</th>
              <th className='text-center'>Email</th>
              <th className='text-center'>Role</th>
              <th className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {
                data.map((user,index)=>  <UserRow refetch={refetch} index ={index} key={index} user={user} />)
            }
         
         
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
