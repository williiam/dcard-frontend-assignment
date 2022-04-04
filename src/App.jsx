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
              <Route path="/dcard-frontend-assignment/" element={ <Navigate replace to="/dcard-frontend-assignment/users/facebook/repos" /> } />
              <Route
                path="/dcard-frontend-assignment/users/:username/repos"
                element={<Home />}
              />
              <Route
                path="/dcard-frontend-assignment/users/:username/repos/:reponame"
                element={<Repo />}
              />
            </Routes>
          </Fragment>
        </BrowserRouter>
  );
}

export default App;
