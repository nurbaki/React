import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/Form";
import Table from "./components/Table";
import { useState } from "react";

function App() {
  const [contactArray, setContactArray] = useState([]);

  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="text-primary m-3">Fire Contact App</h1>

        <div className="col">
          <Form contactArray={contactArray} setContactArray={setContactArray} />
        </div>
        <div className="col">
          <Table
            contactArray={contactArray}
            setContactArray={setContactArray}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
