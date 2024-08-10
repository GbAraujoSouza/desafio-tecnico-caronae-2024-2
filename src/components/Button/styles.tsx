import styled from "styled-components";

interface IStyledButtonProps {
  $primary?: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
  background-color: ${(props) => (props.$primary ? props.theme.COLORS.PRIMARY : props.theme.COLORS.NEUTRAL.LIGHTEST)};
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  color: ${(props) => (props.$primary ? props.theme.COLORS.NEUTRAL.LIGHTEST : props.theme.COLORS.PRIMARY)};
  font-weight: 600;
  font-size: 0.875rem;
`;
