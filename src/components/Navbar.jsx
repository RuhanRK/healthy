import React from "react";
import { Navbar } from "react-bootstrap";
const NavBar = () => {
    return (
        <React.Fragment>
            <Navbar className="mb-3 p-0 nav-bg">
                <p className="display-4 text-white py-1 pb-2 m-auto">
                    Be Healthy Be Happy
                </p>
            </Navbar>
        </React.Fragment>
    );
};

export default NavBar;
