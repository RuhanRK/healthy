import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import AllFood from "./components/Details/AllFood";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={MainContainer} />
                    <Route path="/details" component={AllFood} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
