import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({});

const middleware = [thunk];

//thunk middleware is used to intercept actions so as to make API call before dispatching result to reducer
const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
