import React, { useEffect, useRef, useState } from "react";
import "./Count.css";
export const Count = ({
  count,
  countPlus,
  countMinus,
  inputCount,
  inputIsDone,
  numIsDone,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <div className="container">
        <div className="count">
          <button onClick={countMinus} className="countChangeBut">
            -
          </button>
          <h1
            className={!count.isDone ? "inp" : "inpt"}
            onClick={() => numIsDone()}
          >
            {count.count}
          </h1>
          <form onSubmit={(e) => inputIsDone(e)}>
            <input
              ref={inputRef}
              className={count.isDone ? "inp as" : "inpt"}
              value={count.count}
              onChange={(e) => inputCount(e)}
            />
          </form>
          <button onClick={countPlus} className="countChangeBut">
            +
          </button>
        </div>
      </div>
    </>
  );
};
