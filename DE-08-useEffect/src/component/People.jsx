import { useState, useEffect } from "react";

const People = () => {
  const [insanlar, setInsan] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setInsan(data));
  }, []);

  console.log(insanlar);

  return (
    <div className="container text-center">
      <div className="row">
        {insanlar.map((insan) => {
          const { id, name, phone, website } = insan;

          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
              <img
                src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
                alt=""
              />
              <h5>{name}</h5>
              <h6>{phone}</h6>
              <h6>{website}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;
