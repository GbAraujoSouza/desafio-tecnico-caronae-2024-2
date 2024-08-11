import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RideCard from "..";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme";

describe("RideCard testing", () => {
  it("should render correct data passed as prop", () => {
    const mockProps = {
      driverName: "Hugo Freitas",
      driverProfileUrl: "https://example.com/driver-photo.jpg",
      departureTime: "10:00",
      arrivalTime: "11:30",
      departureLocation: "Leblon",
      arrivalLocation: "Fundão",
      seatsAvailable: 2,
      rideId: 1,
    };

    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <RideCard {...mockProps} />
        </ThemeProvider>
      </MemoryRouter>,
    );

    expect(screen.getByText("Hugo Freitas")).toBeInTheDocument();

    expect(screen.getByText("10:00")).toBeInTheDocument();
    expect(screen.getByText("11:30")).toBeInTheDocument();
    expect(screen.getByText("Leblon")).toBeInTheDocument();
    expect(screen.getByText("Fundão")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("Hugo Freitas")).toBeInTheDocument();
  });

  it("should render 'Lotado' when there are no seats", () => {
    const mockProps = {
      driverName: "Hugo Freitas",
      driverProfileUrl: "https://example.com/driver-photo.jpg",
      departureTime: "10:00",
      arrivalTime: "11:30",
      departureLocation: "Leblon",
      arrivalLocation: "Fundão",
      seatsAvailable: 0,
      rideId: 1,
    };

    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <RideCard {...mockProps} />
        </ThemeProvider>
      </MemoryRouter>,
    );

    expect(screen.getByText("Lotado").textContent).toMatch(/Lotado/)
  });
});

