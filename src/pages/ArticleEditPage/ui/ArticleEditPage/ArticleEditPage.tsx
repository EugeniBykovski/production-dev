import { memo } from 'react';
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';

import cls from './ArticleEditPage.module.scss'
import { useParams } from 'react-router-dom';

interface Props {
  className?: string;
}

const ArticleEditPage = ({ className }: Props) => {
  const { t } = useTranslation('article-edit')
  const { id } = useParams<{id: string}>()
  const isEdit = Boolean(id)

  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit 
        ? t('Редактирование статьи с ID = ') + id 
        : t('Создание новой статьи')
      }
    </Page>
  )
}

export default memo(ArticleEditPage)