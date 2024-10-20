import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";

export default function Home() {
  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:3000/blog/");
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
