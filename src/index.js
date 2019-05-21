import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <HashRouter basename={"/tf-jsx-demo/axolot/"}>
        <Route path="/" component={App} />
    </HashRouter>,
    document.getElementById("root")
);
serviceWorker.unregister();
