import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SingleBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState([]);
  const fetchSingleBlogs = async () => {
    const response = await axios.get(
      "https://mern-course-kqvv.onrender.com/blog/" + id
    );
    setBlog(response.data.data);
  };
  useEffect(() => {
    fetchSingleBlogs();
  }, []);
  const deleteFunction = async () => {
    const response = await axios.delete(
      "https://mern-course-kqvv.onrender.com/blog/" + id
    );
    console.log(response.status);
    if (response.status === 200) {
      alert("Deleted successfully");
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  };
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={blog.image}
                  alt={blog.image}
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button
                    className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                    onClick={deleteFunction}
                  >
                    Delete Me
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <Link to={`/edit/${blog._id}`}>
                    <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                      Edit Me
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {blog.subtitle}
              </p>

              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {blog.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
