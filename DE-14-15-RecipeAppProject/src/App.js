import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/details/Details";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import AppRouter from "./router/AppRouter";

// function App() {
//   return (
//     <div className="App">
//       <AppRouter />
//     </div>
//   );
// }

// export default App;
