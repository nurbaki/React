import TodoItem from './TodoItem';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { clearTodo } from '../../redux/actions/todoActions';

const TodoList = () => {


  const clearList = () => {
  };

  return (
    <div>
      <div>
        {[].map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={clearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
