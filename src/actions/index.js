import * as actions from "./actions";

// Action Creator

// Select food action creator
export const selectFood = food => {
    return {
        type: actions.FOOD_SELECT,
        payload: food
    };
};
