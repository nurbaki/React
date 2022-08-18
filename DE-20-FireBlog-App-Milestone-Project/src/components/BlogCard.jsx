import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toastWarnNotify } from "../helpers/ToastNotify";
import { BsChatLeftDots, BsFillHeartFill } from "react-icons/bs";

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
    <div className="blogCard col-sm-3">
      <div className="card-group">
        <div className="card">
          <img
            src={url}
            loading="lazy"
            className="card-img-top img-fluid"
            alt="Blog Card"
            onClick={() => {
              !currentUser && toastWarnNotify("Please log in to see details");
              navigate("/details/" + id);
            }}
          />
          <div
            className="card-body dashboard"
            onClick={() => {
              !currentUser && toastWarnNotify("Please log in to see details");
              navigate("/details/" + id);
            }}
          >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              {"Last update: " + lastUpdate + "           by " + email}
            </small>
            <p></p>
            <small className="text-muted icons">
              {" "}
              <BsFillHeartFill /> {"   " + likes}{" "}
              <span className="space">a </span>
              <BsChatLeftDots />
              {" " + 0}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
