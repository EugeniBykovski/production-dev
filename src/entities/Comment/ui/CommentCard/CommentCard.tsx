import { Comment } from '../../model/types/comment';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss'
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { memo } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border='50%' />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>

        <Skeleton className={cls.text} width={'100%'} height={50} />
      </div>
    )
  }

  if (!comment) null

  return (
    <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
      <AppLink to={`${RoutePath.profile}${comment?.user.id}`} className={cls.header}>
        {comment?.user?.avatar ? <Avatar size={30} src={comment?.user?.avatar} /> : null}
        <Text className={cls.username} title={comment?.user?.username} />
      </AppLink>

      <Text className={cls.text} title={comment?.text} />
    </div>
  )
})