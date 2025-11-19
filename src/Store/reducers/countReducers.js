const COUNTPLUS = "countPlus";
const COUNTMINUS = "countMinus";
const INPUTISDONE = "inputIsDone";
const INPUT = "input";
const NUMISDONE = "numIsDone";

const initState = {
  count: 0,
  isDone: false,
};
export const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case COUNTPLUS:
      return {
        ...state,
        count: +state.count + 1,
      };
    case COUNTMINUS:
      if (state.count >= 1) {
        return {
          ...state,
          count: +state.count - 1,
        };
      } else {
        return {
          ...state,
        };
      }
    case INPUT:
      if (action.payload === "" || +action.payload) {
        return {
          ...state,
          count: action.payload,
        };
      } else {
        alert("write number");
      }
    case INPUTISDONE:
      return {
        ...state,
        isDone: action.payload,
      };
    case NUMISDONE:
      return {
        ...state,
        isDone: action.payload,
      };

    default:
      return state;
  }
};
export const countPlusAC = () => ({ type: COUNTPLUS });
export const countMinusAC = () => ({ type: COUNTMINUS });
export const inputIsDoneAC = () => ({ type: INPUTISDONE, payload: false });
export const inputCountAC = (e) => ({ type: INPUT, payload: e.target.value });
export const numIsDoneAC = () => ({ type: NUMISDONE, payload: true });
