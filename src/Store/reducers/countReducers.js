const COUNTPLUS = "countPlus";
const COUNTMINUS = "countMinus";

const initState = {
  count: 0,
};
export const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case COUNTPLUS:
      return {
        ...state,
        count: state.count + 1,
      };
    case COUNTMINUS:
      if (state.count >= 1) {
        return {
          ...state,
          count: state.count - 1,
        };
      } else {
        return {
          ...state,
        };
      }

    default:
      return state;
  }
};

export const countPlusAC = () => ({ type: COUNTPLUS });
export const countMinusAC = () => ({ type: COUNTMINUS });
