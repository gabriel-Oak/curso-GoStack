import { combineReducers } from "redux";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from './auth/reducer';

const reducers = combineReducers({
  authReducer
});

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store;
