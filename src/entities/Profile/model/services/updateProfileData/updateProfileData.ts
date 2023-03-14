import { Profile } from './../../types/profile';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n/i18n';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi

    const formData = getProfileForm(getState())
    
    try {
      const response = await extra.api.put<Profile>(`/profile`, formData);
      return response.data
    } catch (error) {
      console.log(error);
      return rejectWithValue(i18n.t('Вы ввели некорректный логин или пароль'))
    }
  }
)