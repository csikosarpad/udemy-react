import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducers from "./reducers";


export const store = createStore(reducers, {}, applyMiddleware(thunk));

/*import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
export const store = configureStore({ reducers })*/