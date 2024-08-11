import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import Header from "../../components/Header";
import RideDetailsCard from "../../components/RideDetailsCard";
import RideService from "../../services/RideService";
import {
  DetailCardsContainer,
  RideDate,
  RideDateSection,
  RideDetailsContent,
} from "./styles";
import { useParams } from "react-router-dom";

interface Ride {
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
}

const RideDetails: React.FC = () => {
  const [ride, setRide] = useState<Ride>();
  const { rideId } = useParams();

  const fetchRideById = async (id: number) => {
    try {
      const response = await RideService.getAllRides();
      const detailedRide = response.data.caronas[id];
      setRide(detailedRide);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRideById(Number(rideId));
  }, []);

  return (
    <>
      <Header />
      <RideDetailsContent>
        <RideDateSection>
          <RideDate>Segunda-feira, 22/07</RideDate>
          <Button primary text="Pedir Carona" />
        </RideDateSection>

        <DetailCardsContainer>
          <RideDetailsCard title="Carona para a UFRJ">
            <div>{ride?.motorista.nome}</div>
          </RideDetailsCard>
          <RideDetailsCard title="Carona para a UFRJ">
            <div>parabens</div>
          </RideDetailsCard>
          <RideDetailsCard title="Carona para a UFRJ">
            <div>parabens</div>
          </RideDetailsCard>
          <RideDetailsCard title="Carona para a UFRJ">
            <div>parabens</div>
          </RideDetailsCard>
          <RideDetailsCard title="Carona para a UFRJ">
            <div>parabens</div>
          </RideDetailsCard>
          <RideDetailsCard title="Carona para a UFRJ">
            <div>parabens</div>
          </RideDetailsCard>
        </DetailCardsContainer>
      </RideDetailsContent>
    </>
  );
};

export default RideDetails;
