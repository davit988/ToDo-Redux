import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/countReducers";
import { toDoReducer } from "./reducers/toDoReducer";

const rootReducer = combineReducers({
  counterState: counterReducer,
  toDoState: toDoReducer,
});

export const store = createStore(rootReducer);
