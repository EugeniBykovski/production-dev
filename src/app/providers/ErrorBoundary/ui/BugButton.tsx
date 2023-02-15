import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

// Component for testing errors
export const BugButton = () => {
  const { t } = useTranslation()
  const [error, setError] = useState(false)
  const throwErr = () => setError(true)

  useEffect(() => {
    if (error) throw new Error()
  }, [error])
  
  return (
    <Button 
      onClick={throwErr}
    >
      {t('Вызвать ошибку')}
    </Button>
  )
}