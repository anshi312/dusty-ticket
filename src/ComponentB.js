import React from "react";
import { useDispatch } from "react-redux";

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch({ type: "SET_VALUE", payload: event.target.value });
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter your input"
      />
    </div>
  );
};

export default ComponentB;
