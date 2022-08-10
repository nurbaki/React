import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/Form";
import Table from "./components/Table";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const initialValues = { name: "", phone: "", gender: "" };

function App() {
  const [info, setInfo] = useState(initialValues);
  const [isAdd, setIsAdd] = useState("ADD");
  const [contactArray, setContactArray] = useState([]);

  const EditUser = (id, name, phone, gender) => {
    setInfo({ id, name, phone, gender });
    setIsAdd("UPDATE");
  };

  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="text-primary m-3">Fire Contact App</h1>

        <div className="col">
          <Form
            info={info}
            setInfo={setInfo}
            isAdd={isAdd}
            setIsAdd={setIsAdd}
            contactArray={contactArray}
            setContactArray={setContactArray}
          />
        </div>
        <div className="col">
          <Table
            EditUser={EditUser}
            contactArray={contactArray}
            setContactArray={setContactArray}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
