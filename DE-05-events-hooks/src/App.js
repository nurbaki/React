import React from "react";
import Event from "./1-events-hooks_intro/Event";
import "bootstrap/dist/css/bootstrap.min.css";
import Hooks from "./2-hooks/Hooks";
import Form from "./3-form/Form";
import MouseKeyBoard from "./4-mouse_keyBoard/MouseKeyBoard";
const App = () => {
  return (
    <div>
      <Event />
      <Hooks />
      <Form />
      <MouseKeyBoard />
    </div>
  );
};

export default App;
