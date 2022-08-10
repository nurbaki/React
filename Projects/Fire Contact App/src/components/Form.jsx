import React from "react";
import { BsFillTelephoneFill, BsFillPeopleFill } from "react-icons/bs";
import firebase from "../utils/firebase";
import { getDatabase, set, ref, push, update } from "firebase/database";
import Toastify from "../utils/toastify";

const Form = ({
  info,
  setInfo,
  isAdd,
  setIsAdd,
  contactArray,
  setContactArray,
}) => {
  //* ayrı stateler
  // const [name, setName] = useState();
  // const [phone, setPhone] = useState();
  // const [gender, setGender] = useState();

  const addContact = (info) => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "users/");
    const newUserRef = push(userRef);
    set(newUserRef, {
      name: info.name,
      phone: info.phone,
      gender: info.gender,
    });
    Toastify("Added Successfully");
  };

  const UpdateUser = (info) => {
    const db = getDatabase(firebase);
    const updates = {};
    updates["users/" + info.id] = info;
    return update(ref(db), updates);
  };

  const handleChange = (e) => {
    // const name=e.target.name;
    // const value=e.target.value;
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    console.log("info bilgisi:", info);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (info.id) {
      UpdateUser(info);
      setInfo({ name: "", phone: "", gender: "" });
      setIsAdd("ADD");
      Toastify("Updated Successfully");
    } else {
      addContact(info);
      setInfo({ name: "", phone: "", gender: "" });
      setIsAdd("ADD");
    }
  };

  console.log(contactArray);

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
                name="name"
                value={info.name}
                required
                // onChange={(e) => setName(e.target.value)}
                onChange={handleChange}
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
                name="phone"
                value={info.phone}
                required
                // onChange={(e) => setPhone(e.target.value)}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <select
              class="form-select"
              aria-label="Default select example"
              name="gender"
              value={info.gender}
              required
              // onChange={(e) => setGender(e.target.value)}
              onChange={handleChange}
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
            {isAdd}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
