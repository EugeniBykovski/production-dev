import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../types";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";
import { articleDetailsPageRecommendationsReducer } from "./articleDetailsPageRecommendationsSlice";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsPageRecommendationsReducer
})