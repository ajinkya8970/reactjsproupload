import { createStore } from "redux";
import allReducers from "./CombineReducer";

export const store = createStore(allReducers);
