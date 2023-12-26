import { NavLink } from "react-router-dom"
import { Container } from "./Header.styles"
import { useTranslation } from "react-i18next"

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement | string;
}

const Header = (props: Props) => {
  const { t } = useTranslation()
  return (
    <Container>
      <header className="navbar">
        <NavLink to={"/"}>{t("home")}</NavLink>
        <NavLink to={"/remote"}>{t("remote")} 1</NavLink>
      </header>
      {props?.children}
    </Container>
  )
}

export default Header