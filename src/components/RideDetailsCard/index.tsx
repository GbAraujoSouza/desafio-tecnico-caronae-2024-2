import React from "react";
import { CardContainer, CardTitle } from "./styles";

interface RideDetailsCardProps {
  title: string;
  children: React.ReactElement;
}

const RideDetailsCard: React.FC<RideDetailsCardProps> = ({ title, children }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      {children}
    </CardContainer>
  );
};

export default RideDetailsCard;
