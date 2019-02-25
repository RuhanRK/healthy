import React from "react";
import { Media } from "react-bootstrap";
import { connect } from "react-redux";

import BoxText from "./BoxText";
import NotFoundText from "./NotFoundText";

const FoodBox = props => {
    console.log(props);
    return (
        <Media
            className="bg-info p-3 my-5 shadow  bg-white rounded"
            style={{ minHeight: "200px" }}
        >
            <React.Fragment>
                {/*<BoxText /> */}
                <NotFoundText />
            </React.Fragment>
        </Media>
    );
};

// get state from store
const mapStateToProps = state => ({
    selectedFood: state.selectedFood,
    foodNotFound: state.foodNotFound
});

export default connect(mapStateToProps)(FoodBox);
