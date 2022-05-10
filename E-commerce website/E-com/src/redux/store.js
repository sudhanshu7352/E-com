import { applyMiddleware, combineReducers } from "redux";
import { Reducer } from "./reducer";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

const reducer =combineReducers({
    cloth :Reducer,
    electronics :Reducer
})

export const store =createStore(
    reducer,
    applyMiddleware(thunk)
)