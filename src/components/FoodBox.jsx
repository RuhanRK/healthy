import React from "react";
import { Media } from "react-bootstrap";
import BoxText from "./BoxText";

const FoodBox = () => {
    return (
        <Media className="bg-info p-3 my-5 shadow  bg-white rounded">
            <React.Fragment>
                <BoxText />
            </React.Fragment>
        </Media>
    );
};

export default FoodBox;
