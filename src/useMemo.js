import React, { useEffect, useMemo, useState } from "react";

const App = () => {
  const [countone, setcountone] = useState(0);
  const [counttwo, setcounttwo] = useState(0);

  const data = useMemo(() => {
    console.log("called");
    return countone;
  }, [countone]);

  const handleOne = () => {
    setcountone(countone + 1);
  };

  const handleTwo = () => {
    setcounttwo(counttwo + 1);
  };

  return (
    <div>
      <button onClick={handleOne}>clickOne</button>
      <button onClick={handleTwo}>clickTwo</button>
      <br />/{data}
    </div>
  );
};

export default App;
