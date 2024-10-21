import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:3000/blog/");
    setBlogs(response.data.data);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        {blogs.map((blog) => {
          return <Card blog={blog} key={blog._id} />;
        })}
      </div>
    </>
  );
}
