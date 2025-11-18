import React from "react";
import "./Count.css"

export const Count = ({ count, countPlus, countMinus }) => {
  return (
    <>
      <div className="container">
        <div className="count">
          <button onClick={countMinus} className="countChangeBut">-</button>
          <h1>{count}</h1>
          <button onClick={countPlus} className="countChangeBut">+</button>
        </div>
      </div>
    </>
  );
};
