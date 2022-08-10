import React from "react";
import { BsPencilSquare, BsFillXCircleFill } from "react-icons/bs";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect } from "react";

const Table = ({ contactArray, setContactArray }) => {
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

      setContactArray(array);
    });
  };

  console.log(contactArray);

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
            {contactArray?.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.gender}</td>
                  <td className="text-danger">
                    <BsFillXCircleFill />
                  </td>
                  <td>
                    <BsPencilSquare />
                  </td>
                </tr>
              );
            })}
            ;
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
