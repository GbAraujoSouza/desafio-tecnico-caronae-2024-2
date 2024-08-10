import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL.LIGHT};
`;

export const CardTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;
