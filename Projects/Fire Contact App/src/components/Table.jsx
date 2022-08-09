import React from "react";
import { BsPencilSquare, BsFillXCircleFill } from "react-icons/bs";

const Table = ({ contactArray, setContactArray }) => {
  //   movies.map((movie) => <MovieCard key={movie.id} {...movie} />)

  //   <div className="d-flex text-white align-items-center ">
  //   {currentUser ? (
  //     <>
  //       <h5 className="mb-0 text-capitalize">
  //         {currentUser?.displayName}
  //       </h5>
  //       <button
  //         onClick={() => logOut()}
  //         className="ms-2 btn btn-outline-light"
  //       >
  //         Logout
  //       </button>
  //     </>
  //   ) : (
  //     <>
  //       <button
  //         onClick={() => navigate("/login")}
  //         className="ms-2 btn btn-outline-light"
  //       >
  //         Login
  //       </button>
  //       <button
  //         onClick={() => navigate("/register")}
  //         className="ms-2 btn btn-outline-light"
  //       >
  //         Register
  //       </button>
  //     </>
  //   )}
  // </div>

  return (
    <div className="container">
      <div className="row bg-white mb-3">
        <h2>Contacts</h2>
      </div>
      <div className="row bg-white mb-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Gender</th>
              <th scope="col">Delete</th>
              <th scope="col"> Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>i.name</td>
              <td>i.phone</td>
              <td>i.gender</td>
              <td className="text-danger">
                <BsFillXCircleFill />
              </td>
              <td>
                <BsPencilSquare />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
