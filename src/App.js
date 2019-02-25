import React, { Component } from "react";
import { Switch, Link } from "react-router-dom";

import NavBar from "./components/Navbar";
import MainContainer from "./components/MainContainer";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <MainContainer />
            </React.Fragment>
        );
    }
}

export default App;
