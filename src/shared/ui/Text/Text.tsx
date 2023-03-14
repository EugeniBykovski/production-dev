import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  right = 'right',
  left = 'left',
  center = 'center'
}

interface TextProps {
  className?: string;
  title?: string;
  description?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo(({ 
  className, 
  title, 
  description, 
  theme = TextTheme.PRIMARY,
  align = TextAlign.left
}: TextProps) => {

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true
  }

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <h3 className={cls.title}>{title}</h3>}
      {description && <p className={cls.description}>{description}</p>}
    </div>
  )
})