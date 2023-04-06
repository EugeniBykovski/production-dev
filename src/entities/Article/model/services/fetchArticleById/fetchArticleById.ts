import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';
import i18n from 'shared/config/i18n/i18n';

export const fetchArticleById = createAsyncThunk<
  Article, 
  string, 
  ThunkConfig<string>
>(
  'articleDetails/fetchArticleById',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi
    
    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`,{
        params: {
          _expand: 'user'
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