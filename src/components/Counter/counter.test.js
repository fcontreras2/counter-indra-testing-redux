import { screen } from "@testing-library/react";
import Counter from ".";
import { render } from "../../utils/test-utils";

beforeEach(() => {
  render(<Counter />);
});

describe("Pruebas unitarias de mi contador", () => {
  test("Verificar el título de la página", () => {
    expect(screen.getByText(/app counter/i)).toBeInTheDocument();
  });

  test("Verificar si existe el botón 'Incrementar'", () => {
    expect(
      screen.getByRole("button", { name: /incrementar/i })
    ).toBeInTheDocument();
  });

  test("Verificar si existe el botón 'Decrementar'", () => {
    expect(
      screen.getByRole("button", { name: /decrementar/i })
    ).toBeInTheDocument();
  });

  test("Verificar si existe el botón 'Reiniciar'", () => {
    expect(
      screen.getByRole("button", { name: /reiniciar/i })
    ).toBeInTheDocument();
  });

  test("Verificar que el contador se encuentre en cero (0)", () => {
    expect(screen.getByText(/contador: 0/i)).toBeInTheDocument();
  });
});
