import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import ContainerSSS from "./components/styles/ContainerSSS";

function App() {
  return (
    <div className="App">
      <Header />
      <ContainerSSS>
        <Cards />
      </ContainerSSS>
    </div>
  );
}

export default App;
