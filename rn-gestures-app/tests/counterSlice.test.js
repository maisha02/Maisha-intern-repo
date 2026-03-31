import reducer, { increment, incrementAsync } from "../store/counterSlice";

test("should return initial state", () => {
  expect(reducer(undefined, {})).toEqual({ value: 0 });
});

test("should increment value", () => {
  const newState = reducer({ value: 0 }, increment());
  expect(newState.value).toBe(1);
});

test("should dispatch incrementAsync", async () => {
  const dispatch = jest.fn();

  await incrementAsync()(dispatch);

  expect(dispatch).toHaveBeenCalledWith(increment());
});