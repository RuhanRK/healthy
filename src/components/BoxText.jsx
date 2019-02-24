import React from "react";
import { Media, Badge } from "react-bootstrap";

const BoxText = () => {
    return (
        <React.Fragment>
            <img
                width={150}
                height={150}
                className="align-self-center mr-3 rounded"
                src="https://picsum.photos/200/200"
                alt="Generic placeholder"
            />
            <Media.Body>
                <span className="float-right text-muted">
                    <sup>*</sup>100gm base value
                </span>
                <h5 className="font-weight-bold">Media Heading</h5>
                <p className="lead text-capitalize">
                    <Badge variant="secondary">Calories</Badge>{" "}
                    <Badge variant="success">120</Badge>
                </p>
                <p className="lead text-capitalize">
                    <Badge variant="secondary">Fat</Badge>{" "}
                    <Badge variant="warning">12 g</Badge>
                </p>
                <p className="lead text-capitalize">
                    <Badge variant="info">Ingredients</Badge> {"  "}
                    <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </span>
                </p>
                <p className="lead text-capitalize">
                    <Badge variant="info">Description</Badge> {"  "}
                    <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </span>
                </p>
            </Media.Body>
        </React.Fragment>
    );
};

export default BoxText;
