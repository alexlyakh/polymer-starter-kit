import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import App from "../App";

function renderApp() {
  return render(
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
}

it("renders header title", () => {
  renderApp();
  expect(screen.getByText("My App")).toBeInTheDocument();
});

it("renders View One by default", () => {
  renderApp();
  expect(screen.getByRole("heading", { name: /view one/i })).toBeInTheDocument();
});
