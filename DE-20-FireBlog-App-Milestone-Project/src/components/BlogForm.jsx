import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

// import { BsFillTelephoneFill, BsFillPeopleFill } from "react-icons/bs";
import { getDatabase, set, ref, push, update } from "firebase/database";
import { toastSuccessNotify } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

const BlogForm = () => {
  const { currentUser, blog, isSubmit, setBlog, setIsSubmit } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  console.log(date);

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
      releaseDate: date,
      likes: 0,
      lastUpdate: date,
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
    setBlog({ ...blog, lastUpdate: date, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlog({ ...blog, lastUpdate: date });

    if (blog.id) {
      UpdateBlog(blog);
      setBlog({ ...blog, title: "", url: "", content: "" });
      setIsSubmit("SUBMIT");
      toastSuccessNotify("Updated Successfully");
      navigate("/details/" + blog.id);
    } else {
      addBlog(blog);
      setBlog({ ...blog, title: "", url: "", content: "" });
      setIsSubmit("SUBMIT");
      navigate("/");
    }
  };

  const cleanForm = () => {
    setBlog({ ...blog, title: "", url: "", content: "" });
    setIsSubmit("SUBMIT");
    navigate("/");
  };

  return (
    <div className="container">
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
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary m-2"
              onClick={handleSubmit}
            >
              {isSubmit}
            </button>
            <button onClick={cleanForm} className="btn btn-success">
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
