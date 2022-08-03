import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Cards.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchCard() {
  const movieName = "matrix";

  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const API_KEY = "844f59466ff48f03fe6b85c19b02206c";
  const [bilgiler, setBilgiler] = useState([]);

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`;

  const getBilgiler = async () => {
    const { data } = await axios.get(url);
    setBilgiler(data.results);
  };

  useEffect(() => {
    getBilgiler();
  }, []);

  return (
    <div className="container">
      {bilgiler.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img
              src={item.poster_path && IMG_API + item.poster_path}
              alt="poster"
            />
            <div className="title">
              <h1>{item.title}</h1>
            </div>
            <div className="textDesc">
              <h2>Overview</h2>
              <p>{item.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default SearchCard;
