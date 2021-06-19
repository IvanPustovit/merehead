import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./sliceReducer";

const rootReducer = combineReducers({ store: sliceReducer });

export const store = configureStore({
  reducer: rootReducer,
});
