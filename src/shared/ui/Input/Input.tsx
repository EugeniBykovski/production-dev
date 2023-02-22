import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...otherProps
  } = props

  const ref = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)

  const onBlur = () => setIsFocused(false)
  const onFocus = () => setIsFocused(true)
  const onSelect = (e: any) => setCaretPosition(e?.target?.selectionStart || 0) 

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true)
      ref.current?.focus()
    } 
  }, [autoFocus])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={classNames(cls.placeholder)}>
          {`${placeholder}`}
        </div>
      )}

      <div className={classNames(cls.caretWrapper)}>
        <input 
          ref={ref}
          type={type} 
          value={value} 
          onChange={onChangeHandler} 
          className={classNames(cls.input)} 
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          {...otherProps}
        />

        {isFocused && (
          <span 
            className={classNames(cls.caret)}
            style={{ left: `${caretPosition * 8}px` }}
          ></span>
        )}
      </div>
    </div>
  )
})