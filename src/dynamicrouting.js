// import React from "react";
// import Home from "./Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./About";

// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/About/:id" element={<About />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default App;



// import React from "react";
// import { useParams } from "react-router-dom";

// const About = () => {
//   const paramData = useParams();
//   console.log(paramData);
//   console.log(paramData);
//   return <div>User No :{paramData.id} </div>;
// };

// export default About;



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();
//   const arr = [1, 2, 3, 4, 5, 6];
//   const handleck = (data) => {
//     console.log(data);
//     navigate(`/About/${1000}`);
//   };

//   return (
//     <div>
//       <h2>this is homepage</h2>
//       {arr.map((data) => {
//         return (
//           <div>
//              <br />
//             <button onClick={(e) => handleck(data)}>Click</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Home;



