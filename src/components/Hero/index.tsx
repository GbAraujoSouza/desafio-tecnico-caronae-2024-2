import React from "react";
import CaronaeLogoHero from "../../assets/caronae-logo-hero.svg"
import { HeroSection, HeroSubtitle } from "./styles";

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <img src={CaronaeLogoHero} />
      <HeroSubtitle>
        Filtre por data, chegando ou saindo ou, se preferir, busque por uma carona ou motorista específico.
      </HeroSubtitle>
    </HeroSection>
  );
};

export default Hero;

