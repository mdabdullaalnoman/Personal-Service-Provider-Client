import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import serviceReducer from "./Reducer/serviceReducer";

const rootReducer = combineReducers({
    services: serviceReducer
})

const store = createStore(rootReducer , composeWithDevTools());

export default store;