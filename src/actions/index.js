import * as actions from "./actions";

// Action Creator

// get food action creator
export const getFoods = () => {
    return {
        type: actions.GET_FOOD
    };
};

// Select food action creator
export const selectFood = food => {
    return {
        type: actions.FOOD_SELECT,
        payload: song
    };
};
