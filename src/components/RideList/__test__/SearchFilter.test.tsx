import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom"
import theme from "../../../theme";
import RideList from "..";

vi.mock("../../services/RideService", () => ({
  getAllRides: vi.fn().mockResolvedValue({
    data: {
      caronas: [
        {
          motorista: {
            nome: "Hugo Freitas",
            situacao: "Graduando",
            telefone: "21983897830",
            foto: "url",
          },
          vagas: 2,
          horario_partida: "10:00",
          horario_chegada: "11:30",
          local_partida: "Leblon",
          local_chegada: "Fundão",
          ponto_encontro: "Próximo do ponto do 485",
          observacoes: "Nenhuma",
          trajeto: "Leblon, Linha Vermelha, Fundão",
          indo: true,
        },
        {
          motorista: {
            nome: "Gabriel Martins",
            situacao: "Graduação",
            telefone: "21993592526",
            foto: "url",
          },
          vagas: 4,
          horario_partida: "07:00",
          horario_chegada: "09:00",
          local_partida: "Freguesia",
          local_chegada: "Fundão",
          ponto_encontro: "Posto da Petrobrás",
          observacoes: "Nenhuma",
          trajeto: "Freguesia, Linha Amarela, Fundão",
          indo: true,
        },
      ],
    },
  }),
}));

describe("SearchFilter testing", () => {
  it("should filter rides on search", async () => {
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

    expect(screen.getByText("Hugo Freitas")).toBeInTheDocument();
    expect(screen.queryByText("Gabriel Martins")).not.toBeInTheDocument();
  });
});
