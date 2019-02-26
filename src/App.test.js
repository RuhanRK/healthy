import * as types from "./actions/actions";
import * as actions from "./actions/";

describe("actions for search box", () => {
    it("should found a food", () => {
        const text = "coke";
        const expectedAction = {
            type: types.FOOD_SELECT,
            payload: text
        };
        expect(actions.selectFood(text)).toEqual(expectedAction);
    });
});
