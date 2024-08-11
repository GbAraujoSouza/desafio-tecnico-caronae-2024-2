import styled from "styled-components";

interface IStyledButtonProps {
  $primary?: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  padding: 0.625rem 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
  background-color: ${(props) => (props.$primary ? props.theme.COLORS.PRIMARY : props.theme.COLORS.NEUTRAL.LIGHTEST)};
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  color: ${(props) => (props.$primary ? props.theme.COLORS.NEUTRAL.LIGHTEST : props.theme.COLORS.PRIMARY)};
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover { 
     background-color: ${({ $primary, theme }) => ($primary ? theme.COLORS.NEUTRAL.LIGHTEST : theme.COLORS.PRIMARY)};
    color: ${({ $primary, theme }) => ($primary ? theme.COLORS.PRIMARY : theme.COLORS.NEUTRAL.LIGHTEST)};
  }
`;
