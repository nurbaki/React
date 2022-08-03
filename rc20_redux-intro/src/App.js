import './App.css';
import Counter from './components/counter/Counter';
import Todo from './components/todo/Todo';

import  {Provider}  from 'react-redux';

  import { legacy_createStore as createStore, combineReducers } from 'redux';
  import counterReducerComp from "./redux/reducers/counterReducerComp"
  import todoReducerComp from './redux/reducers/todoReducerComp';
function App() {

const topluReducer=combineReducers(
  {
counterReducer:counterReducerComp,
todoReducer:todoReducerComp

  },
)

 

  const store1 = createStore(topluReducer);
  return (
    <div className="app">
      <Provider store1={store1}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
