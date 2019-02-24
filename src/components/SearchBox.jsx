import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class SearchBox extends Component {
    render() {
        return (
            <React.Fragment>
                <Form className="mt-5 mb-5 ">
                    <Form.Group controlId="search ">
                        <Form.Control
                            type="text"
                            placeholder="Search about Junk Food"
                            className="shadow p-3 mb-3 bg-white rounded"
                        />
                    </Form.Group>
                </Form>
            </React.Fragment>
        );
    }
}

export default SearchBox;
