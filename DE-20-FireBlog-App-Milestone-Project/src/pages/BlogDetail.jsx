import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { toastWarnNotify } from "../helpers/ToastNotify";
import { getDatabase, ref, remove } from "firebase/database";

const BlogDetail = () => {
  const [blogDetails, setBlogDetails] = useState("");
  const navigate = useNavigate();

  const { currentUser, blogsArray, setBlog, setIsSubmit } =
    useContext(AuthContext);
  const { id } = useParams();

  const findBlog = () => {
    for (let index = 0; index < blogsArray.length; index++) {
      const element = blogsArray[index];
      if (element.id === id) {
        setBlogDetails(element);
        console.log(element);
        break;
      }
    }
  };

  useEffect(() => {
    findBlog();
  }, []);

  const {
    title,
    url,
    content,
    displayName,
    email,
    releaseDate,
    lastUpdate,
    likes,
  } = blogDetails;

  console.log(blogDetails);

  const DeleteUser = (id) => {
    const db = getDatabase();
    remove(ref(db, "users/" + id));
    setBlog({ title: "", url: "", content: "" });
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
      <h1 className="text-center">---DETAILS---</h1>
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
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{content}</p>
            </div>
            <ul className="list-group ">
              <li className="list-group-item">
                {"Release Date : " + releaseDate}
              </li>
              <li className="list-group-item">
                {"Blogger : " + displayName + "-" + email}
              </li>
              <li className="list-group-item">{"Likes : " + likes}</li>
              <li className="list-group-item">
                {"Last update : " + lastUpdate}
              </li>
              <li className="list-group-item">
                <Link to={"/"} className="card-link">
                  Go Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex text-white align-items-center ">
        {/* //!! currentUser.email == email &&
        
         */}
        {currentUser.email === email ? (
          <>
            {" "}
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
                EditBlog(id, title, url, content);
              }}
            >
              UPDATE
            </button>
          </>
        ) : (
          <>
            <h1>Burayi yalnizca yazar degistirebilir</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
