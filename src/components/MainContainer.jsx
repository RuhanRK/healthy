import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SearchBox from "./SearchBox";
import FoodBox from "./FoodBox";

const MainContainer = () => {
    return (
        <Container>
            <Row>
                <Col />
                <Col sm={12} md={10} lg={8} xl={6}>
                    <SearchBox />
                    <FoodBox />
                </Col>
                <Col />
            </Row>
        </Container>
    );
};

export default MainContainer;
