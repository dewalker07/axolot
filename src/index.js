import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <BrowserRouter basename={"/tf-jsx-demo/axolot/"}>
        <Route path="/" component={App} />
    </BrowserRouter>,
    document.getElementById("root")
);
serviceWorker.unregister();
