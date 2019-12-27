import UserTypes from "./types";

const INITIAL_STATE = {
  user: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.SET_USER:
      return { ...state, user: action.user };

    default:
      return state;
  }
}

export default userReducer;
