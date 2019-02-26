import React from "react";
import { shallow } from "enzyme";
import App from "./App";

import * as types from "./actions/actions";
import * as actions from "./actions/";
import NavBar from "./components/Navbar";
import MainContainer from "./components/MainContainer";

let wrapper = shallow(<App />);

describe("See components inside of App", () => {
    it("shows a NavBar component", () => {
        expect(wrapper.find(NavBar).length).toEqual(1);
    });
});

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
