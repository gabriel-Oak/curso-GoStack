import AsyncStorage from '@react-native-community/async-storage';

import { combineReducers } from "redux";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'

import authReducer from './auth/reducer';
import userReducer from './user/reducer';

const reducers = combineReducers({
  authReducer,
  userReducer
});

const persistConfig = {
  key: 'gobarber',
  storage: AsyncStorage,
  whitelist: ['authReducer', 'userReducer']
}

export const store = createStore(
  persistReducer(persistConfig, reducers),
  applyMiddleware(thunk)
);

export const persistor = persistStore(store)
