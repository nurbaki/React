import "./App.css";
import People from "./component/People";
import PeopleAxios from "./component/PeopleAxios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <People />
      <PeopleAxios />
    </div>
  );
}

export default App;
