import React from 'react';
import Footer from '../Footer/Footer';
import { useQuery } from "react-query";
import getToken from "../../Hooks/getToken";
import Loading from "../Dashboard/Loading";
import BlogCard from './BlogCard';


const Blog = () => {
    const { data, isLoading, refetch } = useQuery("blog", () =>
    fetch("http://localhost:5000/blogs", getToken).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
    return (
        <div className='w-full md:w-11/12 mx-auto px-6 md:px-0  '>
            <div className='p-5 border-2 my-5 w-full  mx-auto'>
                {
                    data.map((blog,index)=> <BlogCard key={index} index={index} blog={blog} refetch={refetch} />)
                }
                
              

            </div>


            <Footer/>
            
        </div>
    );
};

export default Blog;