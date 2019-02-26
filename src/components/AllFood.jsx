import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Table } from "react-bootstrap";

import { handleShort } from "./../actions";

const AllFood = ({ foods, handleShort }) => {
    // initialy sort data with name asc order
    useEffect(() => {
        handleShort("title");
    }, []);

    // handle click for table header
    const handleClick = value => {
        handleShort(value);
    };
    return (
        <React.Fragment>
            <Row>
                <Col />
                <Col sm={12} md={6} className="mb-5">
                    <div className="shadow p-3  m-auto bg-white rounded">
                        <h3 className="text-center">All Food Details</h3>
                        <span className="float-right text-muted">
                            <sup>*</sup>100gm base value
                        </span>
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th onClick={() => handleClick("title")}>
                                        Name
                                    </th>
                                    <th onClick={() => handleClick("calorie")}>
                                        Calories
                                    </th>
                                    <th onClick={() => handleClick("fat")}>
                                        Fat
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {foods.map(food => (
                                    <tr key={food.id}>
                                        <td>{food.title}</td>
                                        <td>{food.calorie}</td>
                                        <td>{food.fat} g</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Col>
                <Col />
            </Row>
        </React.Fragment>
    );
};

// Get ALl foods
const mapStateToProps = state => ({
    foods: state.foods
});

export default connect(
    mapStateToProps,
    { handleShort }
)(AllFood);
