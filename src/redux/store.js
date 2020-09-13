import {applyMiddleware, compose, createStore} from "redux";
import allReducers from "./reducers";
import ReduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(
    allReducers,
    composeEnhancers(applyMiddleware(ReduxThunk))
);

export default store;
