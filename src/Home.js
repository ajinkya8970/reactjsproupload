// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, selectCount } from "./reduxtoolkit/counterSlice";

// const Home = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector(selectCount);

//   const handleClik = () => {
//     dispatch(increment("hellow"));
//   };
//   return (
//     <div>
//       {counter}
//       Home
//       <button onClick={handleClik}>click</button>
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from "react";

// const useCounter = (data) => {
//   const [count, setCount] = useState(data);

//   const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     setCount(count - 1);
//   };
//   return [count, increment, decrement];
// };

// export default useCounter;
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <Link to="/About">About</Link>
    </div>
  );
};

export default Home;
