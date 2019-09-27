import React from "react";
import Navbar from "./Navbar";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes />
        </BrowserRouter>
    );
};

export default App;
