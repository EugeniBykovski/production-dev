import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss'
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {error && <Text theme={TextTheme.ERROR} description={error} />}

        <Input 
          onChange={onChangeUsername} 
          autoFocus 
          type="text" 
          className={classNames(cls.input)} 
          placeholder={t('Введите имя')} 
          value={username}
        />
        <Input 
          onChange={onChangePassword} 
          type="text" 
          className={classNames(cls.input)} 
          placeholder={t('Введите пароль')} 
          value={password}
        />

        <Button 
          className={classNames(cls.loginBtn)} 
          theme={ThemeButton.OUTLINE} 
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm