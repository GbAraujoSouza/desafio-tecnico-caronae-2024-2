import React, { useState } from "react";
import {
  CardContainer,
  DriverInfo,
  DriverName,
  DriverPhoto,
  Location,
  SeatsInfo,
  TravelInfo,
  TravelLocationInfo,
  TravelTimeInfo,
} from "./styles";
import UsersGreen from "../../assets/users-green.svg";
import UsersOrange from "../../assets/users-orange.svg";
import UsersRed from "../../assets/users-red.svg";
import TargetIcon from "../../assets/target-icon.svg";
import FlagIcon from "../../assets/flag-icon.svg";
import LongRoad from "../../assets/long-road.svg";
import DefaulDriverPhoto from "../../assets/default-user-photo.svg";

interface RideCardProps {
  driverName: string;
  driverProfileUrl: string;
  departureTime: string;
  arrivalTime: string;
  departureLocation: string;
  arrivalLocation: string;
  seatsAvailable: number;
}

const getSeatsIcon = (seatsAvailable: number) => {
  if (seatsAvailable > 2) return UsersGreen;
  if (seatsAvailable > 0) return UsersOrange;
  return UsersRed;
};

const RideCard: React.FC<RideCardProps> = ({
  driverName,
  driverProfileUrl,
  departureTime,
  arrivalTime,
  departureLocation,
  arrivalLocation,
  seatsAvailable,
}) => {
  const [driverPhoto, setDriverPhoto] = useState<string>(driverProfileUrl);

  const handleNotFoundDriverPhoto = () => {
    setDriverPhoto(DefaulDriverPhoto)
  }

  return (
    <CardContainer>
      <DriverInfo>
        <DriverPhoto
          src={driverPhoto}
          alt={`${driverName}'s photo'`}
          onError={handleNotFoundDriverPhoto}
        />
        <DriverName>{driverName}</DriverName>
        <SeatsInfo $seats={seatsAvailable}>
          <img src={getSeatsIcon(seatsAvailable)} alt="People icon" />
          {seatsAvailable > 0 ? seatsAvailable : "Lotado"}
        </SeatsInfo>
      </DriverInfo>

      <TravelInfo>
        <TravelLocationInfo>
          <Location>
            <span>{departureLocation}</span>
            <img src={TargetIcon} alt="Target icon" />
          </Location>

          <img src={LongRoad} alt="Road image" />

          <Location>
            <img src={FlagIcon} alt="Flag icon" />
            <span>{arrivalLocation}</span>
          </Location>
        </TravelLocationInfo>
        <TravelTimeInfo>
          <span>{departureTime}</span>
          <span>{arrivalTime}</span>
        </TravelTimeInfo>
      </TravelInfo>
    </CardContainer>
  );
};

export default RideCard;
