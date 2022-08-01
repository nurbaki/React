import React from "react";
import Cards from "../components/Cards";

const Main = () => {
  return (
    <div>
      <form className="row g-3 mt-2 d-flex justify-content-center">
        <div className="col-auto">
          <label htmlFor="inputText" className="visually-hidden">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="inputText"
            placeholder="Search a movie..."
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Search
          </button>
        </div>
      </form>
      <Cards />
    </div>
  );
};

export default Main;
