import React from "react";
import { Media, Badge, Row, Col } from "react-bootstrap";

const BoxText = ({ selectedFood }) => {
    const { body, calroie, fat, img, ingredients, title, link } = selectedFood;
    return (
        <React.Fragment>
            <Row>
                <Col
                    sm={12}
                    md={4}
                    className="align-self-center text-center own-mb"
                >
                    <img
                        width={150}
                        height={150}
                        className="mr-3 rounded"
                        src={`./${img}`}
                        alt="Generic placeholder"
                    />
                </Col>
                <Col>
                    <Media.Body>
                        <span className="float-right text-muted">
                            <sup>*</sup>100gm base value
                        </span>
                        <h5 className="font-weight-bold">{title}</h5>
                        <p className="text-dark font-weight-bold text-capitalize">
                            <Badge variant="secondary">Calories</Badge>{" "}
                            <Badge variant="success">{calroie}</Badge>
                        </p>
                        <p className="text-dark font-weight-bold text-capitalize">
                            <Badge variant="secondary">Fat</Badge>{" "}
                            <Badge variant="warning">{fat} g</Badge>
                        </p>
                        <p className="text-dark font-weight-bold text-capitalize">
                            <Badge variant="info">Ingredients</Badge> {"  "}
                            <span>{ingredients}</span>
                        </p>
                        <p className="text-dark font-weight-bold text-capitalize">
                            <Badge variant="info">Description</Badge> {"  "}
                            <span>{body}</span>
                        </p>
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="badge float-right badge-primary"
                        >
                            Source
                        </a>
                    </Media.Body>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default BoxText;
