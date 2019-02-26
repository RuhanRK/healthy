import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";

const NotFoundPage = () => {
    return (
        <Row>
            <Col />
            <Col>
                <div className="text-center">
                    <Card>
                        <Card.Header
                            className="alert alert-danger"
                            role="alert"
                        >
                            {" "}
                            404
                        </Card.Header>
                        <Card.Body>Page Not Found</Card.Body>
                        <Link className="btn btn-primary" to="/">
                            Go Back To Home
                        </Link>
                    </Card>
                </div>
            </Col>
            <Col />
        </Row>
    );
};

export default NotFoundPage;
