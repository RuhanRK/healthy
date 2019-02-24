import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import NavBar from "./components/Navbar";
import SearchBox from "./components/SearchBox";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Container>
                    <Row>
                        <Col />
                        <Col xs={6}>
                            <SearchBox />
                        </Col>
                        <Col />
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default App;
