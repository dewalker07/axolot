import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Page from "react-page-loading";

//Package CSS
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "animate.css/animate.min.css";

//Component Import
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ScrollUpBtn from "./components/common/ScrollUpBtn";

import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Page loader={"bar"} color={"#506CEA"} size={9}>
                        <Route
                            render={({ location }) => (
                                <TransitionGroup className="transition-group">
                                    <CSSTransition
                                        key={location.key}
                                        timeout={{ enter: 900, exit: 900 }}
                                        classNames="fade"
                                    >
                                        <section className="route-section">
                                            <Switch location={location}>
                                                <Route
                                                    path="/contact"
                                                    component={Contact}
                                                />
                                                {/* <Route
                                                    path="/home-three"
                                                    component={HomeThree}
                                                />
                                                <Route
                                                    path="/home-two"
                                                    component={HomeTwo}
                                                /> */}
                                                <Route
                                                    path="/"
                                                    exact
                                                    component={Home}
                                                />
                                                <Redirect to="/not-found" />
                                            </Switch>
                                        </section>
                                    </CSSTransition>
                                </TransitionGroup>
                            )}
                        />
                        <ScrollUpBtn />
                    </Page>
                </div>
            </div>
        );
    }
}

export default App;
