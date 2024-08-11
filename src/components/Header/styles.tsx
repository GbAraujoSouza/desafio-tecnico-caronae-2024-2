import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL.LIGHTEST};
  color: ${({ theme }) => theme.COLORS.NEUTRAL.DARK};
  padding: 1.188rem 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 2px 4px 0px rgba(51, 51, 51, 0.20);
`;

export const NavBarItems = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
	margin-left: 0;
	padding-left: 0;
`;

interface StyledNavLinkProps {
  $isActive: boolean;
}

export const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
  color: ${({ $isActive, theme }) => ($isActive ? theme.COLORS.PRIMARY : "inherit")};
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};
  text-decoration: none;
  &.active {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  &:hover {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;

