
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
// import {
//   createStateSyncMiddleware,
//   initStateWithPrevTab,
// } from "redux-state-sync";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(compose(applyMiddleware(...middlewares)))
);
export default store;
