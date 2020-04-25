import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "../redux/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const bindMiddleware = (middleware) => {
  return composeWithDevTools(applyMiddleware(...middleware));
};

export const initStore = createStore(
  combineReducers({ reducer }),
  bindMiddleware([thunkMiddleware])
);
