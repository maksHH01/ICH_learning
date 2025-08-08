export const SET_USER_INFO = "SET_USER_INFO";

function actionCreator(userData) {
  return {
    type: SET_USER_INFO,
    payload: userData,
  };
}

export default actionCreator;
