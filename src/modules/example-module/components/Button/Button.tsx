import React from "react"
import { Button as StyledButton } from "./Button.styles"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactElement | string;
}

const Button = (props: Props) => {
  const { children } = props
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}

export default Button