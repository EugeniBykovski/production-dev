import { StateSchema } from 'app/providers/StoreProvider';
import {
  createEntityAdapter,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'
import { Article, ArticleView } from 'entities/Article';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: article => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  state => state.articlesPage || articlesAdapter.getInitialState()
)

const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.PLATE,
    page: 1,
    hasMore: true,
    _inited: false
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    initState: state => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView
      state.view = view 
      state.limit = view === ArticleView.LIST ? 4 : 9
      state._inited = true
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchArticlesList.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        articlesAdapter.addMany(state, action.payload)
        state.hasMore = action.payload.length > 0
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
})

export const { 
  reducer: articlesPageReducer,
  actions: articlesPageActions
} = articlePageSlice