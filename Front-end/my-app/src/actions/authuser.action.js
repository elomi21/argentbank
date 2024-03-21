import axios from "axios";

export const AUTH_USER = "AUTH_USER";

export const AuthUser = (email, password) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3001/api/v1/user/login/", { email, password })
      .then((res) => {
        const token = res.data;
        dispatch({ type: AUTH_USER, payload: token });
        console.log(res);
      })
      .catch((err) => {
        console.error("il y a un problème de requéte", err);
      });
  };
};
