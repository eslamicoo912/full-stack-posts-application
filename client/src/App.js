import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

export default function App() {
  sessionStorage.setItem("user_id", "641edf8a2ffa57f5441fb4b9");
  return (
    <div className="app">
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
