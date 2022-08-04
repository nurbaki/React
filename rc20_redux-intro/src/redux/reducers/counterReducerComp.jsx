const counterReducer = (state1 = { counterSonuc: 0 }, action1) => {
  console.log(action1);

  switch (action1.type) {
    case "RESET":
      return { counterSonuc: 0, payload1: action1.payload1 };
    case "ARTTIR":
      return { counterSonuc: state1.counterSonuc + 1 };
    case "AZALT":
      return { counterSonuc: state1.counterSonuc - 1 };

    default:
      return state1;
  }
};
export default counterReducer;
