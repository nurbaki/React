import "./App.css";
import Cards from "./cards/Cards";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Cards />
    </div>
  );
}

export default App;
