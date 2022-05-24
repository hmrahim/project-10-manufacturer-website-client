import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import getToken from '../../Hooks/getToken';
import BlogsRow from './BlogsRow';
import Loading from './Loading';

const AllBlogs = () => {
    const {data,isLoading,refetch} = useQuery("blog",()=> fetch("http://localhost:5000/blogs",getToken).then(res=>res.json()))
   if(isLoading){
       return <Loading/>
   }
    return (
        <div className="mt-5 bg-base-300 rounded-lg w-full mx-auto">
        <h1 className="text-4xl text-center capitalize my-3 p-2">All Blogs</h1>
        
      <div className="overflow-x-auto w-full">
          <Link to="/dashboard/addblog" className='btn btn-secondery ml-4 mb-4 btn-sm '>add blog</Link>
          
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className="text-center">Seriul</th>
              <th className="text-center">Title</th>
              <th className="text-center">Blog Description</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {
                data.map((blog,index)=> <BlogsRow key={index} index={index} blog={blog} refetch={refetch} />)
            }
          
          </tbody>
        </table>
     
      </div>
    </div>
    );
};

export default AllBlogs;