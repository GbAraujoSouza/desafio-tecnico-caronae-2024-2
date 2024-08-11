import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 1.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL.LIGHT};
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.NEUTRAL.DARKEST};
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  text-decoration: none;
`;

export const DriverInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  align-self: stretch;
`;

export const DriverPhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL.LIGHT};
`;

export const DriverName = styled.p`
  font-weight: 600;
  flex: 1 0 0;
`;

interface SeatsInfoProps {
  $seats: number;
}

export const SeatsInfo = styled.div<SeatsInfoProps>`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  color: ${({$seats, theme}) => {
    if ($seats > 2) return theme.COLORS.ACTION.GREEN;
    if ($seats > 0) return theme.COLORS.ACTION.ORANGE;
    return theme.COLORS.ACTION.RED;
  }};
`;

export const TravelInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TravelLocationInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const TravelTimeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  font-size: 1.5rem;
  font-weight: 600;
`
