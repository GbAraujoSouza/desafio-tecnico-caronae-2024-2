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
`
