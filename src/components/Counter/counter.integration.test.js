import { fireEvent, screen } from "@testing-library/react";
import Counter from ".";
import { renderWithProviders } from "../../utils/test-utils";

let buttonAdd;
let buttonSubtract;
let buttonReset;

beforeEach(() => {
  renderWithProviders(<Counter />);
  buttonAdd = screen.getByRole("button", { name: /incrementar/i });
  buttonSubtract = screen.getByRole("button", { name: /decrementar/i });
  buttonReset = screen.getByRole("button", { name: /reiniciar/i });
});

describe("Probar el correcto funcionamiento del contador", () => {
  test("Debe aumentar el contador a 1, luego de hacer click en 'Incrementar'", () => {
    fireEvent.click(buttonAdd);
    expect(screen.getByText(/contador: 1/i)).toBeInTheDocument();
  });

  test("El contador debe decrementar en 1, luego de hacer click en 'Decrementar'", () => {
    fireEvent.click(buttonSubtract);
    expect(screen.getByText(/contador: -1/i)).toBeInTheDocument();
  });

  test("El contador debe reiniciar a 0, luego de hacer click en 'Reiniciar'", () => {
    fireEvent.click(buttonAdd);
    fireEvent.click(buttonReset);

    expect(screen.getByText(/contador: 0/i)).toBeInTheDocument();

    fireEvent.click(buttonSubtract);
    fireEvent.click(buttonReset);

    expect(screen.getByText(/contador: 0/i)).toBeInTheDocument();
  });
});
