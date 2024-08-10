import React from "react";
import { CardContainer } from "./styles";

interface RideCardProps {
  driverName: string;
  driverProfileUrl: string;
  departureTime: string;
  arrivalTime: string;
  departureLocation: string;
  arrivalLocation: string;
  seatsAvailable: number;
}

const RideCard: React.FC<RideCardProps> = ({
  driverName,
  driverProfileUrl,
  departureTime,
  arrivalTime,
  departureLocation,
  arrivalLocation,
  seatsAvailable,
}) => {
  return (
    <CardContainer>
      <img src={driverProfileUrl} width={50} height={50} />
      <p>{driverName}</p>
      <p>{departureTime}</p>
      <p>{departureLocation}</p>
      <p>{arrivalTime}</p>
      <p>{arrivalLocation}</p>
      <p>{seatsAvailable}</p>
    </CardContainer>
  );
};

export default RideCard;
