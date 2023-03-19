import { ArticleTextBlock } from '../../model/types/article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss'
import { Text } from 'shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && (
        <Text title={block.title} className={cls.title} />
      )}

      {block.paragraphs.map(paragraph => (
        <Text key={paragraph} description={paragraph} className={cls.paragraph} />
      ))}
    </div>
  )
})