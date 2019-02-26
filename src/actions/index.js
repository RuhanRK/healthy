import * as actions from "./actions";

// Action Creator

// Select food action creator
export const selectFood = food => {
    return {
        type: actions.FOOD_SELECT,
        payload: food
    };
};

// SET FOOD NOT FOUND
export const foodNotFound = value => {
    return {
        type: actions.FOOD_NOT_FOUND,
        payload: value
    };
};

// HANDLE SHORT METHOD
export const handleSort = path => {
    return {
        type: actions.HANDLE_SHORT,
        payload: path
    };
};
