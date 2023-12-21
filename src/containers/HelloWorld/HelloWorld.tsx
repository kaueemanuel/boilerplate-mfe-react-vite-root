import { Container } from "./HelloWorld.styles"
import { useTranslation } from "react-i18next"

const HelloWorld = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <h1>
        {t("hello world")}
      </h1>
    </Container>
  )
}

export default HelloWorld