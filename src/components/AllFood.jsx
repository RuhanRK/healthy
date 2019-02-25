import React from "react";
import { Row, Col, Table } from "react-bootstrap";

const AllFood = () => {
    return (
        <React.Fragment>
            <Row>
                <Col />
                <Col md={6}>
                    <div className="shadow p-3 mb-5 m-auto bg-white rounded">
                        <h3 className="text-center">All Food Details</h3>
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
                <Col />
            </Row>
        </React.Fragment>
    );
};

export default AllFood;
