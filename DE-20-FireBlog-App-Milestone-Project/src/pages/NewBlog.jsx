import React from "react";
import BlogForm from "../components/BlogForm";

const NewBlog = () => {
  return (
    <div>
      <h1
        className="text-danger text-center m-5"
        style={{ fontFamily: "Girassol" }}
      >
        ─── New Blog ───
      </h1>
      <BlogForm />
    </div>
  );
};

export default NewBlog;
