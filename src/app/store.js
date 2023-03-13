/* istanbul ignore file */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlide";

const rootReducer = combineReducers({
  counter: counterReducer
})
export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}