import React from "react";
import BlogItem from "./blogItem";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function Blog() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_PUBLIC_URL}/main/blogs/`
      );
      console.log(res.data);
      setEvents(
        res.data.map((blog) => ({
          id: blog.id,
          imgUrl: blog.blog_image,
          title: blog.blog_title,
          body: blog.blog_body,
          like: blog.blog_likes_count,
          comment: blog.blog_comments_count
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-y-hidden">
      <Navbar />
      {
            events.map((blog)=>
            <BlogItem
              title={blog.title}
              desc={blog.desc}
              imgUrl={blog.imgUrl}
              like={blog.like}
              comment={blog.comment}
              id = {blog.id}
            />
      )}
    </div>
  )
}

export default Blog;