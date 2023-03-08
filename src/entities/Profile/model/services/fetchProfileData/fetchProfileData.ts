import { Profile } from './../../types/profile';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n/i18n';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi
    
    try {
      const response = await extra.api.get<Profile>(`/profile`);

      return response.data
    } catch (error) {
      console.log(error);
      return rejectWithValue(i18n.t('Вы ввели некорректный логин или пароль'))
    }
  }
)