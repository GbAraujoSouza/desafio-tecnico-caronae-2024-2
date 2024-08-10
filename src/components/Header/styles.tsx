import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL.LIGHTEST};
  color: ${({ theme }) => theme.COLORS.NEUTRAL.DARK};
  padding: 19px 112px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const NavBarItems = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`

