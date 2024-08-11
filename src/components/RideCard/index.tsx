import React, { useState } from "react";
import {
  CardContainer,
  DriverInfo,
  DriverName,
  DriverPhoto,
  SeatsInfo,
} from "./styles";
import UsersGreen from "../../assets/users-green.svg";
import UsersOrange from "../../assets/users-orange.svg";
import UsersRed from "../../assets/users-red.svg";
import DefaulDriverPhoto from "../../assets/default-user-photo.svg";
import TravelInformation from "../TravelInformation";

interface RideCardProps {
  driverName: string;
  driverProfileUrl: string;
  departureTime: string;
  arrivalTime: string;
  departureLocation: string;
  arrivalLocation: string;
  seatsAvailable: number;
  rideId: number;
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
  rideId,
}) => {
  const [driverPhoto, setDriverPhoto] = useState<string>(driverProfileUrl);

  const handleNotFoundDriverPhoto = () => {
    setDriverPhoto(DefaulDriverPhoto);
  };

  return (
    <CardContainer to={`/details/${rideId}`}>
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

      <TravelInformation
        departureTime={departureTime}
        arrivalTime={arrivalTime}
        departureLocation={departureLocation}
        arrivalLocation={arrivalLocation}
      />

    </CardContainer>
  );
};

export default RideCard;
