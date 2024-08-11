import { useEffect, useState } from "react";
import RideCard from "../RideCard";
import {
  RideGrid,
  FilterBar,
  FilterButton,
  ListContainer,
  SearchInput,
  FilterButtonsSection,
  Divider,
  SearchFilter,
} from "./styles";
import RideService from "../../services/RideService";
import CalendarIcon from "../../assets/calendar.svg";
import SearchIcon from "../../assets/search-icon.svg";
import { getCurrentDateFormated } from "../../utils/currentDate";

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

  const [onGoingFilter, setOnGoingFilter] = useState<boolean>(true);

  const [searchString, setSearchString] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

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
        <FilterButtonsSection>
          <FilterButton $selected>
            <img src={CalendarIcon} alt="Calendar icon" />
            {getCurrentDateFormated()}
          </FilterButton>
          <Divider />
          <FilterButton
            $selected={onGoingFilter}
            onClick={() => setOnGoingFilter(true)}
          >
            Chegando na UFRJ
          </FilterButton>
          <FilterButton
            $selected={!onGoingFilter}
            onClick={() => setOnGoingFilter(false)}
          >
            Saindo da UFRJ
          </FilterButton>
        </FilterButtonsSection>
        <SearchFilter>
          <img src={SearchIcon} />
          <SearchInput
            type="text"
            placeholder="Buscar"
            onChange={handleSearch}
          />
        </SearchFilter>
      </FilterBar>
      <RideGrid>
        {rides?.caronas
          .filter((ride) => {
            return onGoingFilter
              ? ride.local_chegada === "Fundão"
              : ride.local_chegada !== "Fundão";
          })
          .filter((ride) => {
            return (
              ride.local_chegada.includes(searchString) ||
              ride.local_partida.includes(searchString)
            );
          })
          .map((carona, index) => {
            return (
              <RideCard
                key={index}
                rideId={index}
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
