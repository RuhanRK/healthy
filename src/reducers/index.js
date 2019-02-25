import food from "./../api/food.json";
import * as actions from "../actions/actions";

const initialState = {
    foods: food.posts,
    selectedFood: null,
    foodNotFound: false
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
            return { ...state, foodNotFound: true, selectedFood: null };
        default:
            return state;
    }
};

export default foodReducer;
