import {CHANGE_SORTING_SEQ, FILTER_ITEM_BY_NAMES, RESET_FILTER} from "../actions/actionType";
import productList from "../../data/imageData";
import {isEmptyArray} from "../../utilities";

const initialState = {
    filteredProductList: productList,
    sortingDirection: 'asc'

}

export const filterReducer = (state = initialState, action) => {

    switch (action.type) {

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
            return initialState;

        default:
            return state;
    }
}
