import "./App.css";
import FormComponent from "./components/form/FormComponent";
import Contacts from "./components/contacts/Contacts";
import { useState } from "react";

const initialValues = { username: "", phoneNumber: "", gender: "" };

function App() {
  const [info, setInfo] = useState(initialValues);
  const handleSubmit = (e) => {
    console.log("app js deki:", info);
  };
  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit}
      />
      <Contacts />
    </div>
  );
}

export default App;
