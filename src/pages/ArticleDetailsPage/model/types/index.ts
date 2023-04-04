import { ArticleDetailsRecommendationsSchema } from "./ArticlDetailsRecommendationsSchema";
import { ArticleDetailsCommentSchema } from "./ArticleDetailsCommentSchema";

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentSchema,
  recommendations: ArticleDetailsRecommendationsSchema
}