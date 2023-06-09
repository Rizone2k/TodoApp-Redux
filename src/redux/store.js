import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancers = composeWithDevTools();

const store = configureStore({ reducer: rootReducer }, composedEnhancers);
export default store;
