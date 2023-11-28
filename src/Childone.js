import React, { useContext } from "react";
import { Context } from "./App";

const Childone = () => {
  let data = useContext(Context);
  console.log(data);

  return (
    <div>
      Childone:
      {data.names}
    </div>
  );
};

export default Childone;
