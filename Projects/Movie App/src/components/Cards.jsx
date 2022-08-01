import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Cards.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Cards() {
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const API_KEY = "844f59466ff48f03fe6b85c19b02206c";
  const [bilgiler, setBilgiler] = useState([]);

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const getBilgiler = async () => {
    const { data } = await axios.get(url);
    setBilgiler(data.results);
  };

  useEffect(() => {
    getBilgiler();
  }, []);

  console.log(bilgiler);

  return (
    <div className="container">
      {bilgiler.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="title">
              <h1>{item.title}</h1>
            </div>
            <img
              src={item.poster_path && IMG_API + item.poster_path}
              alt="poster"
            />
            <div className="textDesc">
              <p>{item.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Cards;
