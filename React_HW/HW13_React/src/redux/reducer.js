const initState = {
  users: [
    { id: 1, name: "Astemir" },
    { id: 2, name: "Max" },
    { id: 3, name: "John" },
  ],
  filter: "",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
