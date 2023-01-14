import billReducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default createStore(billReducer, applyMiddleware(thunk));
