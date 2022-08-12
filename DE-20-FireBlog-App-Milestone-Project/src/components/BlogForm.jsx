import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

// import { BsFillTelephoneFill, BsFillPeopleFill } from "react-icons/bs";
import firebase from "../helpers/firebase";
import { getDatabase, set, ref, push, update } from "firebase/database";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/ToastNotify";

const BlogForm = () => {
  const { blog, isSubmit, setBlog, setIsSubmit } = useContext(AuthContext);

  const addBlog = (blog) => {
    const db = getDatabase();
    const userRef = ref(db, "users/");
    const newUserRef = push(userRef);
    set(newUserRef, {
      title: blog.title,
      url: blog.url,
      content: blog.content,
    });
    toastSuccessNotify("Added Successfully");
  };

  const UpdateBlog = (blog) => {
    const db = getDatabase();
    const updates = {};
    updates["users/" + blog.id] = blog;
    return update(ref(db), updates);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
    console.log("blog bilgisi:", blog);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (blog.id) {
      UpdateBlog(blog);
      setBlog({ title: "", url: "", content: "" });
      setIsSubmit("SUBMIT");
      toastSuccessNotify("Updated Successfully");
    } else {
      addBlog(blog);
      setBlog({ title: "", url: "", content: "" });
      setIsSubmit("SUBMIT");
    }
  };

  return (
    <div className="container">
      <div className="row bg-white mb-3">
        <h2>Add Contact</h2>
      </div>
      <div className="row bg-white">
        <form className="p-3">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Title"
              name="title"
              value={blog.title}
              required
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Title</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingPassword"
              placeholder="Image url"
              name="url"
              value={blog.url}
              required
              onChange={handleChange}
            />
            <label htmlFor="floatingPassword">Image URL</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Content"
              name="content"
              id="floatingTextarea2"
              style={{ height: "100px" }}
              value={blog.content}
              required
              onChange={handleChange}
            />
            <label htmlFor="floatingTextarea2">Content</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            {isSubmit}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
