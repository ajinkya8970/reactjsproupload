import React, { useEffect, useRef, useState } from "react";

function App() {
  const refElement = useRef();
  const [name, setName] = useState("");
  // const [count, setcount] = useState(0);
  const count = useRef(10);
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <div>learn useref</div>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {count.current}

      <div ref={refElement}>one</div>
    </div>
  );
}

export default App;
