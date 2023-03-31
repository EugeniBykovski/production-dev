import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'

const MainPage = memo(() => {
  const { t } = useTranslation('main')
  const [value, setValue] = useState('')

  const onChange = (val: string) => setValue(val)

  return (
    <Page>
      {t('Главная')}
    </Page>
  )
})

export default MainPage