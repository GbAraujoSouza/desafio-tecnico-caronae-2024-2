import { useEffect, useState } from "react";
import RideCard from "../RideCard";
import {
  RideGrid,
  FilterBar,
  FilterButton,
  ListContainer,
  SearchInput,
} from "./styles";
import RideService from "../../services/RideService";

interface RidesData {
  caronas: [
    {
      motorista: {
        nome: string;
        situacao: string;
        telefone: string;
        foto: string;
      };
      vagas: number;
      horario_partida: string;
      horario_chegada: string;
      local_partida: string;
      local_chegada: string;
      ponto_encontro: string;
      observacoes: string;
      trajeto: string;
      indo: true;
    },
  ];
}

const RideList: React.FC = () => {
  const [rides, setRides] = useState<RidesData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchRides = async () => {
    try {
      const response = await RideService.getAllRides();
      setRides(response.data);
      setLoading(false);
    } catch (error) {
      setError("Erro ao carregar caronas");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRides();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ListContainer>
      <FilterBar>
        <FilterButton>Segunda-feira, 22/07</FilterButton>
        <FilterButton>Chegando na UFRJ</FilterButton>
        <FilterButton>Saindo da UFRJ</FilterButton>
        <SearchInput type="text" placeholder="Buscar" />
      </FilterBar>
      <RideGrid>
        {rides?.caronas.map((carona, index) => {
          return (
            <RideCard
              key={index}
              driverName={carona.motorista.nome}
              driverProfileUrl={carona.motorista.foto}
              departureTime={carona.horario_partida}
              arrivalTime={carona.horario_chegada}
              departureLocation={carona.local_partida}
              arrivalLocation={carona.local_chegada}
              seatsAvailable={carona.vagas}
            />
          );
        })}
      </RideGrid>
    </ListContainer>
  );
};

export default RideList;
