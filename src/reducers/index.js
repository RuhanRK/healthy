import food from "./../api/food.json";
import * as actions from "../actions/actions";

const initialState = {
    foods: food.posts,
    selectedFood: null
};

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FOOD_SELECT:
            return { ...state, selectedFood: action.payload };
        default:
            return state;
    }
};

export default foodReducer;
