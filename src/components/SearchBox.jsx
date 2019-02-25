import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";

import AutoCompleteBox from "./AutoCompleteBox";
import { selectFood, foodNotFound } from "./../actions";

const SearchBox = props => {
    const [text, setText] = useState("");

    const [suggestions, setSuggestions] = useState([]);

    const handleChange = e => {
        // get input value
        const value = e.target.value;

        let suggestion = [];

        // get all food name from foods database
        const foodName = props.foods.map(food => food.title);

        // set suggestions
        if (value) {
            const food = new RegExp(`^${value}`, "i");
            suggestion = foodName.sort().filter(val => food.test(val));
        }
        // set input value and suggestion to state
        setText(value);
        setSuggestions(suggestion);
    };

    // get selected food details
    const getFoodDetails = value =>
        props.foods.filter(
            food => food.title.toLowerCase() === value.toLowerCase()
        );

    const handleSubmit = e => {
        e.preventDefault();

        // check text input value
        if (text) {
            const selectedFood = getFoodDetails(text);

            // check selectedFood is available
            if (selectedFood[0]) {
                props.selectFood(selectedFood[0]);
            } else {
                props.foodNotFound();
            }
        }

        // clear suggetion box
        setSuggestions([]);
    };

    const suggestionSelected = value => {
        // set select value to state
        setText(value);

        // get whole selected food details by targeted food name
        const selectedFood = getFoodDetails(value);
        // set to store
        props.selectFood(selectedFood[0]);

        // clear suggetion box
        setSuggestions([]);
    };

    return (
        <React.Fragment>
            <Form className="mt-5 " onSubmit={handleSubmit}>
                <Form.Group controlId="search ">
                    <Form.Control
                        type="text"
                        placeholder="Search about Junk Food"
                        className="shadow p-3 bg-white rounded"
                        value={text}
                        onChange={handleChange}
                        autoComplete={"off"}
                    />
                </Form.Group>
                <AutoCompleteBox
                    suggestions={suggestions}
                    suggestionSelected={suggestionSelected}
                />
            </Form>
        </React.Fragment>
    );
};

// get foods from store state
const mapStateToProps = state => ({
    foods: state.foods
});

export default connect(
    mapStateToProps,
    { selectFood, foodNotFound }
)(SearchBox);
