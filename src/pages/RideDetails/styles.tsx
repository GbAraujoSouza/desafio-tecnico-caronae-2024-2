import styled from "styled-components";

export const RideDetailsContent = styled.main`
  padding: 6rem 11.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const RideDateSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RideDate = styled.span`
  font-size: 1.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const DetailCardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(21.16rem, 1fr));
  gap: 1.5rem;
`;

export const DiverInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
`;

export const DriverInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.NEUTRAL.DARK};
`;

export const RideDescription = styled.p`
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: ${({ theme }) => theme.COLORS.NEUTRAL.DARK};
`;

export const PathInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const PathList = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 28px;
`;

export const RoadContainer = styled.div`
  display: flex;
  width: 20px;
  padding: 9.2px;
  justify-content: center;
  align-items: center;
  gap: 9.2px;
  border-radius: 6.9px;
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL.DARKEST};
`;

export const RoadLine = styled.div`
  width: 2.42px;
  height: 15px;
  background-color: #fff;
`;
