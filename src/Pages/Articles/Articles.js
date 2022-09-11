import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { BlogData } from './Blog';
import './articles.css';

export default function Articles() {
  const [blogs, setBlogs] = useState(BlogData);
  const navigate = useNavigate();

  const blogsNote = blogs.map((blog, index) => {

    return (
      <div className='blog--container'>
        <img src={blog.img} />
        <div className='blog--data'>
          <h3>{blog.title}</h3>
          <p>{blog.paragraph}</p>

        </div>
        <button onClick={() => navigate(blog.path)}> more... </button>
      </div>
    )
  });

  return (
    <>
      <div className='blog'>
        <h1>Tourism???</h1>
        {/* <div className='blog--container'> */}
        {blogsNote}
        {/* </div> */}
      </div>
    </>
  )
}
