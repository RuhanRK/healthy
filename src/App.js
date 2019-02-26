import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import NavBar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import AllFood from "./components/Details/AllFood";
import NotFoundPage from "./components/NotFoundPage";

class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={MainContainer} />
                        <Route path="/details" component={AllFood} />
                        <Route path="/not-found" component={NotFoundPage} />
                        <Redirect to="/not-found" />
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
