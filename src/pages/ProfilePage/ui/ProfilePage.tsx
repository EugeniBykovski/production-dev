import { profileReducer } from 'entities/Profile';
import { memo } from 'react';
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile')

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
          {t('Страница профиля')}
        </div>
    </DynamicModuleLoader>
  )
})

export default ProfilePage