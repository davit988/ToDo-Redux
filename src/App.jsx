import { useDispatch, useSelector } from "react-redux";
import {
  addAC,
  changeTextAC,
  checkedAC,
  deleteAC,
} from "./Store/reducers/toDoReducer";
import { ToDo } from "./Components/ToDo/ToDo";
import { AddToDo } from "./Components/AddToDo/AddToDo";
import { useEffect } from "react";
import { API } from "./api/api";
import { Count } from "./Components/Count/Count";
import {
  countPlusAC,
  countMinusAC,
  inputIsDoneAC,
  inputCountAC,
  numIsDoneAC,
} from "./Store/reducers/countReducers";

import "./App.css";

function App() {
  const count = useSelector((state) => state.counterState);

  const dispatch = useDispatch();

  const state = useSelector((state) => state.toDoState);

  const countPlus = () => dispatch(countPlusAC());

  const countMinus = () => dispatch(countMinusAC());

  const toDoText = (e) => dispatch(changeTextAC(e.target.value));

  const add = () => dispatch(addAC());

  const deleteToDo = (id) => dispatch(deleteAC(id));

  const checked = (id) => dispatch(checkedAC(id));

  const inputCount = (e) => dispatch(inputCountAC(e));

  const inputIsDone = (e) => {
    e.preventDefault();
    dispatch(inputIsDoneAC());
  };
  const numIsDone = () => dispatch(numIsDoneAC());

  useEffect(() => {
    API.getTodos(dispatch);
  }, []);

  return (
    <>
      <Count
        count={count}
        countPlus={countPlus}
        countMinus={countMinus}
        inputCount={inputCount}
        numIsDone={numIsDone}
        inputIsDone={inputIsDone}
      />
      <ToDo state={state} toDoText={toDoText} add={add} />
      <AddToDo deleteToDo={deleteToDo} toDo={state.todos} checked={checked} />
    </>
  );
}

export default App;
