import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss'
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg'
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props
  const { t } = useTranslation('articles')

  const types = <Text description={article.type.join(', ')} className={cls.types} />

  const views = (
    <>
      <Text description={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  )

  if (view === ArticleView.LIST) {
    let textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock

    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Avatar size={30} src={article?.user?.avatar} />
            <Text description={article.user.username} className={cls.username} />
            <Text description={article.createdAt} className={cls.date} />
          </div>

          <Text description={article.title} className={cls.title} />
          {types}
          <img className={cls.img} alt={article.title} src={article.img} />

          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
          )}

          <div className={cls.footer}>
            <AppLink target={target} to={RoutePath.article_details + article.id}>
              <Button theme={ThemeButton.OUTLINE} className={cls.btnMore}>
                {t('Читать далее...')}
              </Button>
            </AppLink>

            {views}
          </div>  
        </Card>
      </div>
    )
  }

  return (
    <AppLink 
      target={target}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      to={RoutePath.article_details + article.id}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <img alt={article.title} src={article.img} className={cls.img} />
          <Text description={article.createdAt} className={cls.date} />
        </div>

        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>

        <Text description={article.title} className={cls.title} />
      </Card>
    </AppLink>
  )
})