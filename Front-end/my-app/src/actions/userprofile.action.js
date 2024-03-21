import axios from "axios";

export const USER_PROFILE = "USER_PROFILE";

export const UserProfile = (id) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3001/api/v1/user/profile/", { id })
      .then((res) => {
        const id = res.data;
        dispatch({ type: USER_PROFILE, payload: id });
        console.log(res);
      })
      .catch((err) => {
        console.error("il y a un problème de requéte", err);
      });
  };
};
