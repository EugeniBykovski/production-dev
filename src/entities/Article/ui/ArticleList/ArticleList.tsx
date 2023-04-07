import { Article, ArticleView } from '../../model/types/article';
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss'
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.LIST ? 6 : 8)
    .fill(0)
    .map((_, idx) => <ArticleListItemSkeleton className={cls.card} key={idx} view={view} />
  )
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.PLATE, target } = props
  const { t } = useTranslation('/articles')

  const isPlate = view === ArticleView.PLATE
  const itemsPerRow = isPlate ? articles.length : 1
  const rowCount = isPlate ? articles.length : Math.ceil(articles.length / itemsPerRow)

  const rowRender = ({ index, key, style }: ListRowProps) => {    
    const items = []
    const fromIndex = index * itemsPerRow
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length)

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem 
          target={target} 
          article={articles[i]} 
          view={view} 
          className={cls.card} 
          key={'str' + i}
        />
      )
    }

    return <div className={cls.row} key={key} style={style}>{items}</div>
  }

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены!')} />
      </div>
    )
  }

  return (
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({ height, width, registerChild, isScrolling, onChildScroll }) => (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])} ref={registerChild}>
          <List
            width={width ? width - 140 : 750}
            height={height ?? isPlate ? 335 : 750}
            rowCount={rowCount}
            rowHeight={isPlate ? 335 : 730}
            rowRenderer={rowRender}
            autoHeight
            onScroll={onChildScroll}
            isScrolling={isScrolling}
          />
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  )
})