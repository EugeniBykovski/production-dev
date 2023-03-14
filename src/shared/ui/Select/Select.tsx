import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss'

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: String) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const { 
    className, 
    label, 
    options,
    value,
    onChange,
    readonly
  } = props

  const optionList = useMemo(() => {
    return options?.map(opt => (
      <option
        className={cls.options}
        value={opt.value}
        key={opt.value}
      >
        {opt.content}
      </option>
    ))
  }, [options])

  const mods: Mods = {}

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => onChange?.(e.target.value)

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && (
        <span className={cls.label}>{`${label}`}</span>
      )}

      <select 
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  )
})