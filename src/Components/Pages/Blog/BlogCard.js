import React from "react";


const BlogCard = ({index,blog,refetch}) => {
 
    refetch()
  return (
    <article className="shadow-lg p-4 rounded-md">
      <h1 className="text-3xl font-semibold ">
       {blog.title}
      </h1>{" "}
      <hr className="mb-5 mt-3" />
      <p className="text-justify">
    {blog.blog}
      </p>
      <div className="flex gap-5 mt-5">
        <button className="btn btn-info btn-sm px-5">Like</button>
        <button className="btn btn-info btn-sm px-5 ">Comment</button>
      </div>
    </article>
  );
};

export default BlogCard;
