import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import NavBar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import FoodBox from "./components/FoodBox";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Container>
                    <Row>
                        <Col />
                        <Col sm={12} md={6}>
                            <SearchBox />
                            <FoodBox />
                        </Col>
                        <Col />
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default App;
