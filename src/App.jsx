import { useDispatch, useSelector } from "react-redux";
import "./App.css";
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
import { countPlusAC, countMinusAC } from "./Store/reducers/countReducers";

function App() {
  const { count } = useSelector((state) => state.counterState);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.toDoState);

  const countPlus = () => {
    dispatch(countPlusAC());
  };

  const countMinus = () => {
    dispatch(countMinusAC());
  };
  console.log(state);

  const toDoText = (e) => {
    dispatch(changeTextAC(e.target.value));
  };

  const add = () => {
    dispatch(addAC());
  };

  const deleteToDo = (id) => {
    dispatch(deleteAC(id));
  };

  const checked = (id) => {
    dispatch(checkedAC(id));
  };

  useEffect(() => {
    API.getTodos(dispatch);
  }, []);

  return (
    <>
      <Count count={count} countPlus={countPlus} countMinus={countMinus} />
      <ToDo state={state} toDoText={toDoText} add={add} />
      <AddToDo deleteToDo={deleteToDo} toDo={state.todos} checked={checked} />
    </>
  );
}

export default App;
