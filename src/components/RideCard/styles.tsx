import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL.LIGHT};
  border-radius: 8px;
`;
