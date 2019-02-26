import _ from "lodash";

import food from "./../database/food.json";
import * as actions from "../actions/actions";

const initialState = {
    foods: food.posts,
    selectedFood: null,
    foodNotFound: false,
    sortColumn: {
        path: "title",
        order: "asc"
    }
};

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FOOD_SELECT:
            return {
                ...state,
                selectedFood: action.payload,
                foodNotFound: false
            };
        case actions.FOOD_NOT_FOUND:
            return {
                ...state,
                foodNotFound: action.payload,
                selectedFood: null
            };
        case actions.HANDLE_SHORT:
            const sortColumn = { ...state.sortColumn };
            const sortedFoods = _.orderBy(
                state.foods,
                [sortColumn.path],
                [sortColumn.order]
            );
            if (sortColumn.path === action.payload) {
                sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
            } else {
                sortColumn.path = action.payload;
                sortColumn.order = "asc";
            }

            return {
                ...state,
                foods: sortedFoods,
                sortColumn
            };
        default:
            return state;
    }
};

export default foodReducer;
