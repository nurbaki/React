import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { getDatabase, ref, update } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { toastWarnNotify } from "../helpers/ToastNotify";
import { BsFillHeartFill } from "react-icons/bs";

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
  const { currentUser, blog, setBlog } = useContext(AuthContext);
  const navigate = useNavigate();

  //   const updateLikes = (blog) => {
  //     const db = getDatabase();
  //     const updates = {};
  //     updates["users/" + blog.id] = blog;
  //     return update(ref(db), updates);
  //   };

  //   const likesFunction = () => {
  //     !currentUser && toastWarnNotify("Please log in to add Like");

  // for (let index = 0; index <= likes.length; index++) {
  //     if (likes[index] === currentUser.email) {
  //       likes = likes.filter(!currentUser.email);
  //       console.log(likes);
  //     } else {
  //       likes = [...likes, currentUser.email];
  //     }

  // }

  //   setBlog({
  //     id: id,
  //     title: title,
  //     url: url,
  //     content: content,
  //     displayName: displayName,
  //     email: email,
  //     releaseDate: releaseDate,
  //     likes: likes,
  //     lastUpdate: lastUpdate,
  //   });

  //   console.log(likes);

  //   // updateLikes(blog);
  // };

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
            className="card-body"
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
            <small className="text-muted">
              {" "}
              <BsFillHeartFill />
              {"   " + likes}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
