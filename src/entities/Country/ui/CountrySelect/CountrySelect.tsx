import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import cls from './CountrySelect.module.scss'
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.America, content: Country.America },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Russia, content: Country.Russia }
]

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readonly } = props
  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: String) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
    <Select
      className={classNames(cls.CountrySelect, {}, [className])} 
      label={t('Выберете страну')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  )
})