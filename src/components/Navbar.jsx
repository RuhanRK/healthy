import React from "react";
import { Navbar } from "react-bootstrap";
const NavBar = () => {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" className="mb-3">
                <Navbar.Brand>Healthy Project</Navbar.Brand>
            </Navbar>
        </React.Fragment>
    );
};

export default NavBar;
