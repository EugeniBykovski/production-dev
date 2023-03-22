import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import i18n from 'shared/config/i18n/i18n';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<
  Article[], 
  FetchArticlesListProps, 
  ThunkConfig<string>
>(
  'articlePage/fetchArticlesList',
  async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi
    const { page = 1 } = props
    const limit = getArticlesPageLimit(getState())

    try {
      const response = await extra.api.get<Article[]>(`/articles`, {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page
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