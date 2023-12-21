import { Container } from "./Header.styles"

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement | string;
}

const Header = (props: Props) => {
  return (
    <Container>
      Header
      {props?.children}
    </Container>
  )
}

export default Header