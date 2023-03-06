import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      onClick={toggleLang}
      theme={ThemeButton.CLEAR}  
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {t(short ? 'Язык' : 'Длинная версия')}
    </Button>
  )
})