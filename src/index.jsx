import React from "react";
import ReactDOMClient from "react-dom/client";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(
    <Router>
        <App />
    </Router>
);
