import React from "react";
import BlogForm from "../components/BlogForm";
import BlogLogo from "../assets/blok.png";

const UpdateBlog = () => {
  return (
    <div className="container w-50 mt-2">
      <div className="text-center">
        <img src={BlogLogo} alt="Blog Logo" />
      </div>
      <h1
        className="text-center m-5 pageHeader"
        style={{ fontFamily: "Girassol" }}
      >
        ─── Update ───
      </h1>
      <BlogForm />
    </div>
  );
};

export default UpdateBlog;
