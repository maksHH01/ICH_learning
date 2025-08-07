export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginAction = (userName) => ({
  type: LOGIN,
  payload: { userName },
});

export const logOutAction = () => ({
  type: LOGOUT,
});
