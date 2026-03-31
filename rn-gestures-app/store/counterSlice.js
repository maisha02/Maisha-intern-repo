export const increment = () => ({
  type: "increment",
});

export const incrementAsync = () => {
  return async (dispatch) => {
    dispatch(increment());
  };
};

const initialState = {
  value: 0,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return { value: state.value + 1 };
    default:
      return state;
  }
}