import React from "react";
import BlogForm from "../components/BlogForm";

const UpdateBlog = () => {
  return (
    <div>
      <h1
        className="text-danger text-center m-5"
        style={{ fontFamily: "Girassol" }}
      >
        ─── Update ───
      </h1>
      <BlogForm />
    </div>
  );
};

export default UpdateBlog;
