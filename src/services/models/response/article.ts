export type Article = {
  articleId: number;
  title: string;
  bannerUrl: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type Meta = {
  total_data: number;
  total_page: number;
  current_page: number;
  data_per_page: number;
};

export type ArticleResponse = {
  articles: Article[];
  meta: Meta;
};
