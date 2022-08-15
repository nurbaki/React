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
import { useNavigate } from "react-router-dom";

const BlogForm = () => {
  const { currentUser, blog, isSubmit, setBlog, setIsSubmit } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const addBlog = (blog) => {
    const db = getDatabase();
    const userRef = ref(db, "users/");
    const newUserRef = push(userRef);
    set(newUserRef, {
      title: blog.title,
      url: blog.url,
      content: blog.content,
      displayName: currentUser.displayName,
      email: currentUser.email,
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
      navigate("/details/" + blog.id);
    } else {
      addBlog(blog);
      setBlog({ title: "", url: "", content: "" });
      setIsSubmit("SUBMIT");
    }
  };

  return (
    <div className="container">
      <div className="row bg-white">{/* <h2>Add New Blog</h2> */}</div>
      <div className="row bg-white">
        <form>
          <div>
            <div className="form-floating">
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
              <label htmlFor="floatingInput" className="ps-4">
                Title
              </label>
            </div>
          </div>
          <div>
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
              <label htmlFor="floatingPassword" className="ps-4">
                Image URL
              </label>
            </div>
          </div>

          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Content"
              name="content"
              id="floatingTextarea2"
              style={{ height: "200px" }}
              value={blog.content}
              required
              onChange={handleChange}
            />
            <label htmlFor="floatingTextarea2" className="ps-4">
              Content
            </label>
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
