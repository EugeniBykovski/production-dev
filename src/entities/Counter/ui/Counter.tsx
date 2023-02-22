import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from "shared/ui/Button/Button"
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from "../model/slice/counterSlice"

export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)
  const { t } = useTranslation()

  const increment = () => dispatch(counterActions.increment())
  const decrement = () => dispatch(counterActions.decrement())

  return (
    <div>
      <h1 data-testId='value-title'>{counterValue}</h1>

      <Button data-testId='increment-btn' onClick={increment}>{t('увеличение')}</Button>
      <Button data-testId='decrement-btn' onClick={decrement}>{t('уменьшение')}</Button>
    </div>
  )
}