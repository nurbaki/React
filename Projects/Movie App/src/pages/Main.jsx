import React from "react";
import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import axios from "axios";
import SearchCard from "../components/SearchCard";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const [movieName, setMovieName] = useState("");

  const searchMovie = (e) => {
    e.preventDefault();
    // burda navigate ile search card sayfasina gidilecek
  };
  return (
    <div>
      <form
        onSubmit={searchMovie}
        className="row g-3 mt-2 d-flex justify-content-center"
      >
        <div className="col-auto">
          <label htmlFor="inputText" className="visually-hidden">
            Password
          </label>
          <input
            onChange={(e) => setMovieName(e.target.value)}
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
