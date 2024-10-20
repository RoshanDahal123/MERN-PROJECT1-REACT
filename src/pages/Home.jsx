import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
