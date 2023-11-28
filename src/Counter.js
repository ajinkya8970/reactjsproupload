import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./redux/action";

const Counter = () => {
  const data = useSelector((state) => state.Reducernumber.count);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increment());
  };
  return (
    <div>
      Counter:{data} <br />
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Counter;
