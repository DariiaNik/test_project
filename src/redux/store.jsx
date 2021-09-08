import {applyMiddleware, combineReducers, createStore} from "redux";
import mainReducer from "./mainReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    common: mainReducer
})


let store = createStore(reducers, applyMiddleware(thunk))

export default store;