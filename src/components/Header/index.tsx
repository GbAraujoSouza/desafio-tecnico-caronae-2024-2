import React from "react";
import { HeaderContainer, NavBarItems } from "./styles";
import { Button } from "../Button";
import CaronaeLogo from '../../assets/Caronae-logo.svg'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={CaronaeLogo}/>
      <NavBarItems>
        <li>Caronas</li>
        <li>Historico de Caronas</li>
        <li>Configurações</li>
      </NavBarItems>
      <Button primary text="Baixe o App"/>
    </HeaderContainer>
  );
};

export default Header;
