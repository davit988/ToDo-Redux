const CHANGE_TEXT = "changeText";
const ADD = "add";
const DELETE = "delete";
const CHECKED = "checked";
const ASYNC_TODO = "async-todo";

const initialState = {
  text: "",
  todos: [],
};

export const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case ADD:
      if (state.text.trim()) {
        return {
          todos: [
            { id: Date.now(), title: state.text, completed: false },
            ...state.todos,
          ],
          text: "",
        };
      }
    case DELETE:
      return {
        ...state,
        todos: [...state.todos.filter((elm) => elm.id !== action.id)],
      };

    case ASYNC_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case CHECKED:
      return {
        ...state,
        todos: [
          ...state.todos.map((elm) => {
            if (elm.id === action.id) {
              return {
                ...elm,
                completed: !elm.completed,
              };
            } else {
              return {
                ...elm,
              };
            }
          }),
        ],
      };
    default:
      return state;
  }
};
export const asyncToDosAC = (data) => ({ type: ASYNC_TODO, payload: data });

export const changeTextAC = (text) => ({ type: CHANGE_TEXT, payload: text });
export const addAC = () => ({ type: ADD });
export const deleteAC = (id) => ({ type: DELETE, id: id });
export const checkedAC = (id) => ({ type: CHECKED, id: id });
