import { StyledButton } from './styles'

type ButtonProps = {
  text: string,
  primary?: boolean,
}

export const Button = ({ text, primary }: ButtonProps) => {
  return (
      <StyledButton $primary={primary}>
        {text}
      </StyledButton>
  )
}

