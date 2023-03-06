import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string;
  title?: string;
  description?: string;
  theme?: TextTheme;
}

export const Text = memo(({ 
  className, 
  title, 
  description, 
  theme = TextTheme.PRIMARY 
}: TextProps) => {
  return (
    <div className={classNames(cls.Text, {[cls[theme]]: true}, [className])}>
      {title && <h3 className={cls.title}>{title}</h3>}
      {description && <p className={cls.description}>{description}</p>}
    </div>
  )
})