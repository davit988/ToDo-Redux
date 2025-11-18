const initState = {
  count: 0,
};
export const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        count: state.count + 1,
      };
  }
  return state;
};