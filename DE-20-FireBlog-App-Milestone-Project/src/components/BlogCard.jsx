import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toastWarnNotify } from "../helpers/ToastNotify";

const BlogCard = ({
  title,
  url,
  content,
  email,
  displayName,
  id,
  likes,
  lastUpdate,
  releaseDate,
}) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div
      className="blogCard col-sm-3"
      // style={{ height: "30 rem" }}
      onClick={() => {
        !currentUser && toastWarnNotify("please log in to see details");
        navigate("/details/" + id);
      }}
    >
      <div className="card-group">
        <div className="card">
          <img
            src={url}
            loading="lazy"
            className="card-img-top img-fluid"
            alt="Blog Card"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{displayName}</p>
            <p className="card-text">
              <small className="text-muted">{email}</small>
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{"Last update: " + lastUpdate}</small>
            <p></p>
            <small className="text-muted">{"Likes " + likes}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
