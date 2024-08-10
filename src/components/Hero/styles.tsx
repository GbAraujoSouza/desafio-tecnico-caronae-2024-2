import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 4rem 0px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  color: ${({ theme }) => theme.COLORS.NEUTRAL.LIGHTEST};
`

export const HeroSubtitle = styled.p`
  font-weight: 400;
  font-size: 1.25rem;
  max-width: 32rem;
  text-align: center;
`
