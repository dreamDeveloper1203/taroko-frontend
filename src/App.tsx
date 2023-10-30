import React from "react";
import "./App.css";
import Header from "./components/Header";
import Contacts from "./pages/Contacts";
import Add from "./components/Add";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route Component={Contacts} path="/" />
        <Route Component={Add} path="/add" />
      </Routes>
    </Router>
  );
}

export default App;
