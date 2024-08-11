import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import Header from "../../components/Header";
import RideDetailsCard from "../../components/RideDetailsCard";
import RideService from "../../services/RideService";
import {
  DetailCardsContainer,
  DiverInfoContainer,
  DriverInfo,
  PathInfoContainer,
  PathList,
  RideDate,
  RideDateSection,
  RideDescription,
  RideDetailsContent,
  RoadContainer,
  RoadLine,
} from "./styles";
import { useParams } from "react-router-dom";
import TravelInformation from "../../components/TravelInformation";
import UsersGreen from "../../assets/users-green.svg";
import UsersOrange from "../../assets/users-orange.svg";
import UsersRed from "../../assets/users-red.svg";
import { DriverPhoto, SeatsInfo } from "../../components/RideCard/styles";
import { getCurrentDateFormated } from "../../utils/currentDate";
import { brPhoneFormater } from "../../utils/brPhoneFormater";

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

const getSeatsIcon = (seatsAvailable: number) => {
  if (seatsAvailable > 2) return UsersGreen;
  if (seatsAvailable > 0) return UsersOrange;
  return UsersRed;
};

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

  if (!ride) return null;

  return (
    <>
      <Header />
      <RideDetailsContent>
        <RideDateSection>
          <RideDate>{getCurrentDateFormated()}</RideDate>
          <Button primary text="Pedir Carona" />
        </RideDateSection>

        <DetailCardsContainer>
          <RideDetailsCard title="Carona para a UFRJ">
            <TravelInformation
              departureTime={ride.horario_partida}
              departureLocation={ride.local_partida}
              arrivalTime={ride.horario_chegada}
              arrivalLocation={ride.local_chegada}
            />
          </RideDetailsCard>
          <RideDetailsCard title="Vagas Disponíveis">
            <SeatsInfo $seats={ride.vagas}>
              <img src={getSeatsIcon(ride.vagas)} alt="People icon" />
              {ride.vagas > 0 ? `${ride.vagas} vagas` : "Lotado"}
            </SeatsInfo>
          </RideDetailsCard>
          <RideDetailsCard title={ride.motorista.nome}>
            <DiverInfoContainer>
              <DriverPhoto
                src={ride.motorista.foto}
                alt={`${ride.motorista.foto}'s photo'`}
                // onError={handleNotFoundDriverPhoto}
              />
              <DriverInfo>
                <span>{ride.motorista.situacao}</span>
                <span>{brPhoneFormater(ride.motorista.telefone)}</span>
              </DriverInfo>
            </DiverInfoContainer>
          </RideDetailsCard>
          <RideDetailsCard title="Ponto de Encontro">
            <RideDescription>{ride.ponto_encontro}</RideDescription>
          </RideDetailsCard>
          <RideDetailsCard title="Informações Adicionais">
            <RideDescription>{ride.observacoes}</RideDescription>
          </RideDetailsCard>
          <RideDetailsCard title="Trajeto">
            <PathInfoContainer>
              <RoadContainer>
                {ride.trajeto.split(", ").map(() => (
                  <RoadLine />
                ))}
              </RoadContainer>
              <PathList>
                {ride.trajeto.split(", ").map((path) => (
                  <li key={path}>{path}</li>
                ))}
              </PathList>
            </PathInfoContainer>
          </RideDetailsCard>
        </DetailCardsContainer>
      </RideDetailsContent>
    </>
  );
};

export default RideDetails;
