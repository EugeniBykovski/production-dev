import { memo } from 'react';
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
  className?: string;
}

export const ArticleTextBlockComponent = memo(({ className }: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>

    </div>
  )
})