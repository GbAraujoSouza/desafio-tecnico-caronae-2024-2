import React from "react";
import { HeaderContainer, NavBarItems, StyledNavLink } from "./styles";
import { Button } from "../Button";
import CaronaeLogo from '../../assets/Caronae-logo.svg'
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  const isRidesPage = location.pathname === "/";
  return (
    <HeaderContainer>
      <img src={CaronaeLogo}/>
      <NavBarItems>
        <StyledNavLink to="/" $isActive={isRidesPage}>{isRidesPage ? "Caronas": "Tela Inicial"}</StyledNavLink>
        <li>Historico de Caronas</li>
        <li>Configurações</li>
      </NavBarItems>
      <Button primary text="Baixe o App"/>
    </HeaderContainer>
  );
};

export default Header;
