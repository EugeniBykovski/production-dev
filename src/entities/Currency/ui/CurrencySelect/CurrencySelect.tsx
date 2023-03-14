import { Currency } from '../../model/types/currency';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import cls from './CurrencySelect.module.scss'

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.RUB, content: Currency.RUB }
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readonly } = props
  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: String) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
    <Select
      className={classNames(cls.CurrencySelect, {}, [className])} 
      label={t('Укажите валюту')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  )
})