import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Other Page link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Other Page/i);
  expect(linkElement).toBeInTheDocument();
});
