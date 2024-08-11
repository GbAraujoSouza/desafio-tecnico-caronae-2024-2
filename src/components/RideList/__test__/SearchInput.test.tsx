import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme";
import RideList from "..";

describe("SearchInput testing", () => {
  it("should render input element", async () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <RideList />
        </ThemeProvider>
      </MemoryRouter>,
    );

    const inputElement = await screen.findByPlaceholderText("Buscar");
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type in input", async () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <RideList />
        </ThemeProvider>
      </MemoryRouter>,
    );

    const inputElement = await screen.findByPlaceholderText<HTMLInputElement>("Buscar");
    fireEvent.change(inputElement, { target: { value: "Leblon" } });
    expect(inputElement.value).toBe("Leblon");
  });
});
