import {combineReducers} from "redux";
import {cartReducer} from "./cartReducer";
import {productReducer} from "./productReducer";

const allReducers = combineReducers({
    cart: cartReducer,
    productsInfo: productReducer
});

export default allReducers;
