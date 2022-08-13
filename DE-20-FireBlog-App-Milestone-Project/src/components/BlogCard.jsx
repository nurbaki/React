import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toastWarnNotify } from "../helpers/ToastNotify";

const BlogCard = ({ title, url, content, email, firstName, lastName, id }) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div
      className="movie"
      onClick={() => {
        !currentUser && toastWarnNotify("please log in to see details");
        navigate("/details/" + id);
      }}
    >
      <img loading="lazy" src={url} alt="movie-card" />
      <div className="d-flex align-items-baseline justify-content-between p-1 text-white">
        <h5>{title}</h5>
      </div>
      <div className="movie-over">
        <h2>Blogger</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default BlogCard;
