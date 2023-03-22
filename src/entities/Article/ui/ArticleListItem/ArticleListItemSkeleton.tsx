import { ArticleView } from '../../model/types/article';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss'
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const { className, view } = props

  if (view === ArticleView.LIST) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Skeleton border={'50%'} width={30} height={30} />
            <Skeleton width={150} height={16} className={cls.username} />
            <Skeleton width={150} height={16} className={cls.date} />
          </div>
  
          <Skeleton width={250} height={24} className={cls.title} />
          <Skeleton className={cls.img} height={200} />
  
          <div className={cls.footer}>
            <Skeleton width={200} height={36} className={cls.title} />
          </div>  
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} className={cls.img} />
        </div>

        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} className={cls.img} />
        </div>

        <Skeleton width={150} height={16} className={cls.title} />
      </Card>
    </div>
  )
})