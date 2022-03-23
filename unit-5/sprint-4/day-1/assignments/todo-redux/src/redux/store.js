import { combineReducers, createStore } from "redux";
 import { reducer } from "./reducer";


const rootReducer =combineReducers({
    todo : reducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );