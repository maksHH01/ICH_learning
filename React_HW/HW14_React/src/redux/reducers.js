const initialState = {
  name: "",
  status: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_INFO": {
      return {
        ...state,
        name: action.payload.name,
        status: action.payload.status,
      };
    }
    default:
      return state;
  }
}

export default reducer;
