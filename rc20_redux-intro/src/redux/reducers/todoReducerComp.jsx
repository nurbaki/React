const todoReducer = (
  state = { gorevler: [{ id: 0, text: "Work on Redux" }] },
  action
) => {
  switch (action.type) {
    case "EKLETODO":
      return {
        gorevler: [
          ...state.gorevler,
          { id: state.gorevler.length, text: action.payload },
        ],
      };

    default:
      break;
  }
};

export default todoReducer;
