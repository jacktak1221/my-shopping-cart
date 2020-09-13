import {CHANGE_SORTING_SEQ, FETCH_PRODUCT_LIST, FILTER_ITEM_BY_NAMES, RESET_FILTER} from "../actions/actionType";

import {isEmptyArray} from "../../utilities";

const initialState = {
    fullProductList: [],
    filteredProductList: [],
    sortingDirection: 'asc'
}

export const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_PRODUCT_LIST:
            return {
                ...state,
                filteredProductList: action.payload,
                fullProductList: action.payload
            }

        case FILTER_ITEM_BY_NAMES:

            const selectedItems = action.payload;
            let filterData = state.filteredProductList;

            if (!isEmptyArray(selectedItems)) {
                filterData = state.filteredProductList.filter((item) => {
                    return selectedItems.some(selectedItem => {
                        return selectedItem.author === item.author;
                    })
                });
            }

            return {
                ...state,
                filteredProductList: filterData
            };

        case CHANGE_SORTING_SEQ:
            const event = action.payload;
            const sorting = event.target.value;

            let sortedProductList = state.filteredProductList;

            console.log(`direction: ${sorting}`)
            if (sorting === 'asc') {
                sortedProductList.sort((a, b) => (a.author > b.author) ? 1 : -1)
            } else {
                sortedProductList.sort((a, b) => (a.author < b.author) ? 1 : -1)
            }

            return {
                filteredProductList: sortedProductList,
                sortingDirection: sorting
            };

        case RESET_FILTER:
            return {
                ...state,
                filteredProductList: state.fullProductList,
                sortingDirection: 'asc'
            };

        default:
            return state;
    }
}
