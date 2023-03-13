import reducer, { increment, decrement, reset } from "./counterSlide";

describe("Pruebas del store.counter", () => {
  test("Debe retornar el estado inicial", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ value: 0 });
  });

  test("Debe poder incrementar el contador en 1", () => {
    const previousState = { value: 0 };

    expect(reducer(previousState, increment())).toEqual({ value: 1 });
  });

  test("Debe poder decrementar el contador en 1", () => {
    const previousState = { value: 0 };

    expect(reducer(previousState, decrement())).toEqual({ value: -1 });
  });

  test("Debe reiniciar al estado inicial a cero (0)", () => {
    const previousState = { value: 5 };

    expect(reducer(previousState, reset())).toEqual({ value: 0 });
  });
});
