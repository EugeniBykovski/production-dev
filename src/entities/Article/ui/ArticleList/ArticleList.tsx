import { Article, ArticleView } from '../../model/types/article';
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss'
import { memo } from 'react';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.LIST ? 6 : 8)
    .fill(0)
    .map((_, idx) => <ArticleListItemSkeleton className={cls.card} key={idx} view={view} />
  )
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.PLATE } = props
  const { t } = useTranslation('/articles')

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem article={article} view={view} className={cls.card} key={article.id} />
    )
  }

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены!')} />
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0 
        ? articles.map(renderArticle)
        : null
      }

      {isLoading && getSkeletons(view)}
    </div>
  )
})