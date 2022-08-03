import './Counter.css';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   decrement,
//   increment,
//   reset,
// } from '../../redux/actions/counterActions';



const Counter = () => {
  
 return (
   <div className="app">
     <h2 className="counter-header">Counter With Redux</h2>
     <h1>counter</h1>
     <h2>not</h2>
     <div>
       <button
         className="counter-button positive"
         //  onClick={arttır}
       >
         ARTTIR
       </button>
       <button
         className="counter-button zero"
         //  onClick={reset}
       >
         reset
       </button>
       <button
         className="counter-button negative"
         //  onClick={azalt}
       >
         AZALT
       </button>
     </div>
   </div>
 );
};

export default Counter;
