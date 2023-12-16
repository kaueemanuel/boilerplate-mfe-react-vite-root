import { Button } from "../../components/Button/Button.styles"
import { Container } from "./CountContainer.styles"
import { useTranslation } from 'react-i18next'

import useCountStore from "../../stores/countStore";

const CountContainer = () => {
  const { t } = useTranslation()
  const { add, count } = useCountStore()

  console.log('renderizou')
  return (
    <Container>
      <h1>
        {t('counter')}: {count}
      </h1>
      <Button onClick={add}>
        {t('count')}
      </Button>
    </Container>
  )
}

export default CountContainer