import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPageHeader.module.scss'
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

const ArticleDetailsPageHeader = ({ className }: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation('article-details')
  const navigate = useNavigate()
  const canEdit = useSelector(getCanEditArticle)
  const article = useSelector(getArticleDetailsData)

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`)
  }, [navigate, article?.id])

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button className={cls.btnBack} onClick={onBackToList} theme={ThemeButton.OUTLINE}>
        {t('Назад к списку')}
      </Button>

      {canEdit && (
        <Button className={cls.editBtn} onClick={onEditArticle} theme={ThemeButton.OUTLINE}>
          {t('Редактировать')}
        </Button>
      )}
    </div>
  )
}

export default memo(ArticleDetailsPageHeader)