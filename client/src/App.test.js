import { render, screen } from '@testing-library/react';
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("renders analyze button", () => {
  render(<App />);
  const analyzeButton = screen.getByText(/analyze/i);
  expect(analyzeButton).toBeInTheDocument();
});
