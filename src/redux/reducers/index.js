import {combineReducers} from "redux";
import {cartReducer} from "./cartReducer";
import {filterReducer} from "./filterReducer";

const allReducers = combineReducers({
    cart: cartReducer,
    filterInfo: filterReducer
});

export default allReducers;
