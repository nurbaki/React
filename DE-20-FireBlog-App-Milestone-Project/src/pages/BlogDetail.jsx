import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { toastWarnNotify } from "../helpers/ToastNotify";
import { getDatabase, ref, remove } from "firebase/database";

const BlogDetail = () => {
  const [blogDetails, setBlogDetails] = useState("");
  const navigate = useNavigate();

  const { blogsArray, setBlog, setIsSubmit } = useContext(AuthContext);
  const { id } = useParams();

  const findBlog = () => {
    for (let index = 0; index < blogsArray.length; index++) {
      const element = blogsArray[index];
      if (element.id == id) {
        setBlogDetails(element);
        console.log(element);
        break;
      }
    }
  };

  useEffect(() => {
    findBlog();
  }, []);

  const { title, url, content, firstName, lastName, email } = blogDetails;

  const DeleteUser = (id) => {
    const db = getDatabase();
    remove(ref(db, "users/" + id));
    toastWarnNotify("Deleted Successfully");
    navigate("/");
  };

  const EditBlog = (id, title, url, content) => {
    setBlog({ id, title, url, content });
    setIsSubmit("UPDATE");
    navigate("/updateblog");
  };

  return (
    <div className="container py-5">
      <h1 className="text-center">{title}</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={url}
              className="img-fluid rounded-start"
              alt="Blog Image"
            />
          </div>
          <div className="col-md-8 d-flex flex-column ">
            <div className="card-body">
              <h5 className="card-title">Content</h5>
              <p className="card-text">{content}</p>
            </div>
            <ul className="list-group ">
              <li className="list-group-item">
                {"Release Date : " + firstName}
              </li>
              <li className="list-group-item">{"Rate : " + email}</li>
              <li className="list-group-item">{"Total Vote : " + lastName}</li>
              <li className="list-group-item">
                <Link to={"/"} className="card-link">
                  Go Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-danger"
        onClick={() => DeleteUser(id)}
      >
        DELETE
      </button>
      <button
        type="submit"
        className="btn btn-warning"
        onClick={() => {
          // !currentUser && toastWarnNotify("please log in to see details");

          EditBlog(id, title, url, content);
        }}
      >
        UPDATE
      </button>
    </div>
  );
};

export default BlogDetail;
