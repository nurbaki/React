import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import BlogCard from "../components/BlogCard";
import { AuthContext } from "../contexts/AuthContext";
import { useEffect, useContext } from "react";

const Main = () => {
  const { blogsArray, setBlogsArray } = useContext(AuthContext);

  useEffect(() => {
    dataRead();
  }, []);

  const dataRead = () => {
    const db = getDatabase();
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      const array = [];
      for (let id in data) {
        array.push({ id, ...data[id] });
      }

      setBlogsArray(array);
    });
  };

  console.log(blogsArray);
  return (
    <>
      <div className="text-center mt-3">
        <h1 className="pageHeader" style={{ fontFamily: "Girassol" }}>
          ─── Dashboard ───
        </h1>
        <hr />
      </div>
      <div className="row d-flex justify-content-center flex-wrap">
        {blogsArray.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </>
  );
};

export default Main;
