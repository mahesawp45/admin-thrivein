import { api } from '@/services/config/api';
import ArticleRequest from '@/services/models/request/article_request';
import { Article, ArticleResponse } from '@/services/models/response/article';

class ArticleRepository {
  create_endpoint = 'create-article';
  get_endpoint = 'articles';

  async createArticle(request: ArticleRequest): Promise<Article> {
    try {
      const response = await api.post(this.create_endpoint, request);

      return response.data;
    } catch (error) {
      console.log('====================================');
      console.log('ERROR CREATE ARTICLE ---> ', error);
      console.log('====================================');
      throw error;
    }
  }

  async getArticles(): Promise<ArticleResponse> {
    try {
      const response = await api.get(this.get_endpoint);

      return response.data;
    } catch (error) {
      console.log('====================================');
      console.log('ERROR GET ALL ARTICLE ---> ', error);
      console.log('====================================');
      throw error;
    }
  }
}

export default ArticleRepository;
