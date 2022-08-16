import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="container py-5">
      <h1 className="text-center">PROFILE</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="#"
              className="img-fluid rounded-start"
              alt="Profile Image"
            />
          </div>
          <div className="col-md-8 d-flex flex-column ">
            <div className="card-body">
              <h5 className="card-title"> {currentUser?.displayName}</h5>
              <p className="card-text">{currentUser?.displayName}</p>
            </div>
            <ul className="list-group ">
              <li className="list-group-item">hallo</li>

              <li className="list-group-item">
                <Link to={"/"} className="card-link">
                  Go Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="d-flex text-white align-items-center ">

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
    </div> */}
    </div>
  );
};

export default Profile;
