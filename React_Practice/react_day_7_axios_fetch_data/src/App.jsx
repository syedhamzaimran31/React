import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GenerateCatFact from "./Components/GenerateCatFact";
import PredictAge from "./Components/PredictAge";
import GenerateExcuse from "./Components/GenerateExcuse";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PredictAge />} />
          <Route path="/generate-excuse" element={<GenerateExcuse />} />
          <Route path="/generate-cat-fact" element={<GenerateCatFact />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
