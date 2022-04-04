// Hooks and Function
import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

// Main Components
import Home from "./pages/Home";
import Repo from "./pages/Repo";

function App() {
  return (
        <BrowserRouter>
          <Fragment>
            <Routes>
              <Route path="/" element={ <Navigate replace to="/users/facebook/repos" /> } />
              <Route
                path="/users/:username/repos"
                element={<Home />}
              />
              <Route
                path="/users/:username/repos/:reponame"
                element={<Repo />}
              />
            </Routes>
          </Fragment>
        </BrowserRouter>
  );
}

export default App;
