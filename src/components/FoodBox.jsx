import React from "react";
import { Media } from "react-bootstrap";
import { connect } from "react-redux";

import BoxText from "./BoxText";
import NotFoundText from "./NotFoundText";

const FoodBox = props => {
    if (!props.foodNotFound && !props.selectedFood) {
        return null;
    } else {
        return (
            <Media
                className="bg-info p-3 my-5 shadow  bg-white rounded"
                style={{ minHeight: "200px" }}
            >
                <React.Fragment>
                    {props.selectedFood ? (
                        <BoxText selectedFood={props.selectedFood} />
                    ) : (
                        <NotFoundText />
                    )}
                </React.Fragment>
            </Media>
        );
    }
};

// get state from store
const mapStateToProps = state => ({
    selectedFood: state.selectedFood,
    foodNotFound: state.foodNotFound
});

export default connect(mapStateToProps)(FoodBox);
