import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Design from "./services/Design";
import Development from "./services/Development";

function Services() {
  return (
    <div>
      <h1>Services</h1>
      <ul>
        <li><Link to="design">Design</Link></li>
        <li><Link to="development">Development</Link></li>
      </ul>

      <Routes>
        <Route path="design" element={<Design />} />
        <Route path="development" element={<Development />} />
      </Routes>
    </div>
  );
}

export default Services;