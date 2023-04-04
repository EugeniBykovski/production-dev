import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import i18n from 'shared/config/i18n/i18n';

export const fetchArticleRecommendations = createAsyncThunk<
  Article[], 
  void, 
  ThunkConfig<string>
>(
  'articleDetailsPage/fetchArticleRecommendations',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
      const response = await extra.api.get<Article[]>(`/articles`, {
        params: {
          _limit: 4
        }
      });

      if (!response.data) throw new Error()
      return response.data
    } catch (error) {
      console.log(error);
      return rejectWithValue(i18n.t('error'))
    }
  }
)