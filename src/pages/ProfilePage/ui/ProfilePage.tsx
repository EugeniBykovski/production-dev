import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileActions, ProfileCard, profileReducer, ValidateProfileErrors } from 'entities/Profile';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)
  const { id } = useParams<{ id: string }>()

  const validateErrorTranslates = {
    [ValidateProfileErrors.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
    [ValidateProfileErrors.INCORRECT_COUNTRY]: t('Некорректный регион'),
    [ValidateProfileErrors.NO_DATA]: t('Данные не были указаны'),
    [ValidateProfileErrors.INCORRECT_USER_DATA]: t('Имя и фамилия обязательные поля'),
    [ValidateProfileErrors.INCORRECT_AGE]: t('Некорректный возраст')
  }

  useInitialEffect(() => {
    if (id) dispatch(fetchProfileData(id))
  })

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstname: value || '' }))
  }, [dispatch])

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }))
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value?.replace(/\D/gi, '') || 0) }))
  }, [dispatch])
  
  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }))
  }, [dispatch])
  
  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency?: Currency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }, [dispatch])

  const onChangeCountry = useCallback((country?: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />

        {validateErrors?.length && validateErrors.map(err => (
          <Text theme={TextTheme.ERROR} description={validateErrorTranslates[err]} key={err} />
        ))}
        
        <ProfileCard 
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeCity={onChangeCity}
          onChangeAge={onChangeAge}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  )
})

export default ProfilePage