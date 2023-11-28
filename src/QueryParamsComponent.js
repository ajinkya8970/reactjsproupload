import { BrowserRouter as Router, useSearchParams } from "react-router-dom";
// Create a component that displays query parameters
const QueryParamsComponent = () => {
  const [search] = useSearchParams();
  const name = search.get("name") || "Guest";

  const handleClick = () => {};

  return (
    <div>
      <h2>Hello, {name}!</h2>
      <button onClick={handleClick}>click</button>
    </div>
  );
};
export default QueryParamsComponent;


import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
