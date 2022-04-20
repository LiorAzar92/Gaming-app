import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Register from "./pages/Register";
import Results from "./pages/Results";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Game />
              {/* <Route path="/results" element={<Results />}></Route> */}
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/landing" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
