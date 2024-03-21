import { AUTH_USER } from "../actions/authuser.action";

const initialState = {
  userLogInSucess: false,
  userToken: null,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        userLogInSucess: true,
        userToken: action.payload.token,
      };
    default:
      return state;
  }
}
