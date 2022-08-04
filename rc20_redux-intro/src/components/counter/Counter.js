import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { reset, arttir, azalt } from "../../redux/actions/counterActions";

const Counter = () => {
  //!App.js den buraya geldik, burada Action file ında yazılan  fonk.veya state i kullanabilmek için, useDispatch (sevk), ekrana bastırmak için useSelector. önce action a git
  const dispatch = useDispatch();

  const counter1 = useSelector((state) => state.counterReducer.counterSonuc);
  const bilgi = useSelector((state) => state.counterReducer.payload1);

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter1}</h1>
      <h2>{bilgi}</h2>
      <div>
        <button
          className="counter-button positive"
          onClick={() => dispatch(arttir())}
        >
          ARTTIR
        </button>
        <button
          className="counter-button zero"
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          onClick={() => dispatch(azalt())}
        >
          AZALT
        </button>
      </div>
    </div>
  );
};

export default Counter;
