import React from "react";
import {
  TravelInfoContainer,
  TravelLocationInfo,
  Location,
  TravelTimeInfo,
} from "./styles";
import TargetIcon from "../../assets/target-icon.svg";
import FlagIcon from "../../assets/flag-icon.svg";
import LongRoad from "../../assets/long-road.svg";

interface TravelInformationProps {
  departureLocation: string;
  arrivalLocation: string;
  departureTime: string;
  arrivalTime: string;
}

const TravelInformation: React.FC<TravelInformationProps> = ({
  departureLocation,
  departureTime,
  arrivalLocation,
  arrivalTime,
}) => {
  return (
    <TravelInfoContainer>
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
    </TravelInfoContainer>
  );
};

export default TravelInformation;
