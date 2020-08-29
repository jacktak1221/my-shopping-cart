import {
    ADD_ITEM_TO_CART, CHANGE_SORTING_SEQ,
    DECREMENT_ITEM,
    FETCH_PRODUCTS,
    FILTER_ITEM_BY_NAMES,
    INCREMENT_ITEM,
    REMOVE_ITEM_FROM_CART, RESET_FILTER
} from "./actionType";


export const addItemToCart = (item) => {
    return ({
        type: ADD_ITEM_TO_CART,
        payload: item
    })
}

export const removeItemFromCart = (item) => {
    return ({
        type: REMOVE_ITEM_FROM_CART,
        payload: item
    })
}

export const incrementItem = (item) => {
    return ({
        type: INCREMENT_ITEM,
        payload: item
    })
}

export const decrementItem = (item) => {
    return ({
        type: DECREMENT_ITEM,
        payload: item
    })
}

export const resetFilter = () => {
    return ({
        type: RESET_FILTER
    })
}

export const filterItemByNames = (event, value) => {
    return ({
        type: FILTER_ITEM_BY_NAMES,
        payload: value
    })
}

export const changeSortingSeq = (event) => {
    return ({
        type: CHANGE_SORTING_SEQ,
        payload: event
    })
}
