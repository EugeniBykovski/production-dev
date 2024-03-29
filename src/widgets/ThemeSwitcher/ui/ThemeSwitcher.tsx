import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import BlueIcon from 'shared/assets/icons/theme-blue.svg'

import cls from './ThemeSwitcher.module.scss'
import { memo } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button 
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])} 
      onClick={toggleTheme}
    >
      {
        theme === Theme.LIGHT 
          ? <BlueIcon /> 
          : theme === Theme.DARK 
            ? <LightIcon /> 
            : <DarkIcon />
      }
    </Button>
  )
})