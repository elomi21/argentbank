import { USER_PROFILE } from "../actions/userprofile.action";

const initialState = {
  userId: null,
};

export default function ProfileReducer(state = initialState, action) {
  switch (action.type) {
    case USER_PROFILE:
      return {
        ...state,
        userId: action.payload.id,
      };
    default:
      return state;
  }
}
