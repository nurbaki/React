import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, combineReducers } from "redux";
import counterReducerComp from "./redux/reducers/counterReducerComp";
import todoReducerComp from "./redux/reducers/todoReducerComp";
// import toplu from './redux/reducers/toplu';
function App() {
  const topluReducer = combineReducers({
    counterReducer: counterReducerComp,

    todoReducer: todoReducerComp,
  });
  //! burada alan create ediyorum
  const store = createStore(topluReducer);

  return (
    <div className="app">
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
