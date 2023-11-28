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

export { App };

import { useLocation, useParams, useSearchParams } from "react-router-dom";

const About = () => {
  const [search, setSearch] = useSearchParams();

  let data = search.get("name");

  return <div>user name:{data}</div>;
};

export { About };

import { useLocation, useParams, useSearchParams } from "react-router-dom";

const About = () => {
  const [search, setSearch] = useSearchParams();

  let data = search.get("name");

  return <div>user name:{data}</div>;
};

export { About };
