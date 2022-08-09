import React from "react";
import { useState } from "react";
import { BsFillTelephoneFill, BsFillPeopleFill } from "react-icons/bs";

const Form = ({ contactArray, setContactArray }) => {
  //* ayrı stateler
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState();

  const addContact = () => {
    const newContact = {
      name: name,
      phone: phone,
      gender: gender,
    };
    setContactArray([...contactArray, newContact]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact();
  };

  return (
    <div className="container">
      <div className="row bg-white mb-3">
        <h2>Add Contact</h2>
      </div>
      <div className="row bg-white">
        <form className="p-3">
          <div class="col-auto mb-3">
            <label class="visually-hidden" for="autoSizingInputGroup">
              Username
            </label>
            <div class="input-group">
              <div class="input-group-text">
                <BsFillPeopleFill />
              </div>
              <input
                type="text"
                class="form-control"
                id="autoSizingInputGroup"
                placeholder="Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div class="col-auto mb-3">
            <label class="visually-hidden" for="autoSizingInputGroup">
              Username
            </label>
            <div class="input-group">
              <div class="input-group-text">
                <BsFillTelephoneFill />{" "}
              </div>
              <input
                type="number"
                class="form-control"
                id="autoSizingInputGroup"
                placeholder="Phone Number"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3">
            <select
              class="form-select"
              aria-label="Default select example"
              required
              onChange={(e) => setGender(e.target.value)}
            >
              <option selected>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
