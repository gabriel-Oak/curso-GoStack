import AuthTypes from "./types";

const INITIAL_STATE = {
  loading: false,
  token: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SEND:
      return { ...state, loading: true }

    case AuthTypes.COMPLETE:
      return { ...state, loading: false }

    case AuthTypes.SET_TOKEN:
      return { ...state, token: action.token}

    default:
      return state;
  }
}

export default authReducer;
