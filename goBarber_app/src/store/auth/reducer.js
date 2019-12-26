import AuthTypes from "./types";

const INITIAL_STATE = {
  loading: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SEND:
      return { ...state, loading: true }

    case AuthTypes.COMPLETE:
      return { ...state, loading: false }

    default:
      return state;
  }
}

export default authReducer;
