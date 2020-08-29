import {
    ADD_ITEM_TO_CART,
    DECREMENT_ITEM,
    INCREMENT_ITEM,
    REMOVE_ITEM_FROM_CART
} from "../actions/actionType";


let initialState = {
    cartItemList: []
};

export const cartReducer = (state = initialState, action) => {
    let cartItemList;
    let targetItem;

    switch (action.type) {

        case ADD_ITEM_TO_CART:
            cartItemList = state.cartItemList

            let alreadyInCart = false;

            cartItemList.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.count++;
                    alreadyInCart = true;
                }
            });

            if (!alreadyInCart) {
                cartItemList.push({...action.payload, count: 1});
            }
            return {
                ...state,
                cartItemList: cartItemList
            };

        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItemList: state.cartItemList.filter(item => item.id !== action.payload.id)
            };

        case INCREMENT_ITEM:
            cartItemList = state.cartItemList;
            targetItem = action.payload;

            return {
                ...state,
                cartItemList: cartItemList.map(item =>
                        item.id === targetItem.id ? {...item, count: item.count + 1}: item
                )
            };

        case DECREMENT_ITEM:
            cartItemList = state.cartItemList;
            targetItem = action.payload;

            if (targetItem.count === 1) {
                return {
                    ...state,
                    cartItemList: state.cartItemList.filter(item => item.id !== action.payload.id)
                };
            } else {
                return {
                    ...state,
                    cartItemList: cartItemList.map(item =>
                        item.id === targetItem.id ? {...item, count: item.count - 1}: item
                    )
                };
            }

        default:
            return state;
    }
}
