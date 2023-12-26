import { Container } from "./HelloWorld.styles"
import { useTranslation } from "react-i18next"

import useCountStore from "remote-mfe/CountStore"

const HelloWorld = () => {
  const { t } = useTranslation()

  const { count } = useCountStore()

  return (
    <Container>
      <h1>
        {t("hello world")}
      </h1>
      <h2>{t("remote app {{appNumber}} count:", { appNumber: 1 })} {count}</h2>
    </Container>
  )
}

export default HelloWorld