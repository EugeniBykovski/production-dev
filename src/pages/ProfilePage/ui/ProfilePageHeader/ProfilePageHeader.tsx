import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = memo(({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile')
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {readonly 
        ? (
          <Button theme={ThemeButton.OUTLINE} className={cls.editBtn} onClick={onEdit}>
            {t('Редактировать')}
          </Button>
        ) 
        : (
          <div className={cls.btnContainer}>
            <Button theme={ThemeButton.OUTLINE_RED} className={cls.cancelBtn} onClick={onCancelEdit}>
              {t('Отменить')}
            </Button>

            <Button theme={ThemeButton.OUTLINE} className={cls.saveBtn} onClick={onSave}>
              {t('Сохранить')}
            </Button>
          </div>
        )
      }

    </div>
  )
})