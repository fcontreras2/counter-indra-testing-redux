import reducer, { increment, decrement, reset } from "./counterSlide";

test("Debe retornar el estado inicial", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({ value: 0 });
});

test("Debe poder incrementar el counter en 1", () => {
  const previousState = { value: 0 };

  expect(reducer(previousState, increment())).toEqual({ value: 1 });
});

test("Debe poder decrementar el counter en 1", () => {
  const previousState = { value: 0 };

  expect(reducer(previousState, decrement())).toEqual({ value: -1 });
});

test("Debe poder decrementar el counter en 1", () => {
  const previousState = { value: 5 };

  expect(reducer(previousState, reset())).toEqual({ value: 0 });
});
