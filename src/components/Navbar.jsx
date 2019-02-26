import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
const NavBar = () => {
    return (
        <React.Fragment>
            <Navbar className="mb-3 p-0 nav-bg justify-content-around flex-column flex-md-row ">
                <p className="home">
                    <Link to="/">
                        <i className="fas fa-home fa-2x" />
                    </Link>
                </p>
                <p className="display-4 text-white py-1 pb-2">
                    Be Healthy Be Happy
                </p>
                <p className="details">
                    <Link to="/details">
                        All Foods <i className="fas fa-utensils fa-2x" />
                    </Link>
                </p>
            </Navbar>
        </React.Fragment>
    );
};

export default NavBar;
