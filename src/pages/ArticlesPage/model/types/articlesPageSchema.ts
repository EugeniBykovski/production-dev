import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article";

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleView;

  // page
  page: number;
  limit?: number;
  hasMore: boolean;

  _inited: boolean;
}