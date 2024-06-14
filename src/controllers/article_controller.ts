import ArticleRequest from '@/services/models/request/article_request';
import { Article, ArticleResponse } from '@/services/models/response/article';
import ArticleRepository from '@/services/repositories/article/article_repository';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

const article_repository = new ArticleRepository();

export const createArticle = async (
  request: ArticleRequest,
): Promise<Article> => {
  const response = await article_repository
    .createArticle(request)
    .then(async (value) => {
      return value;
    })
    .catch((error: AxiosError) => {
      console.log('====================================');
      console.log('ERROR CREATE ARTICLE ---> ', error.response);
      console.log('====================================');
      throw error.response;
    });

  return response;
};

export const getArticles = async (): Promise<ArticleResponse> => {
  const response = await article_repository
    .getArticles()
    .then(async (value) => {
      return value;
    })
    .catch((error: AxiosError) => {
      console.log('====================================');
      console.log('ERROR GET ALL ARTICLE ---> ', error.response);
      console.log('====================================');
      throw error.response;
    });

  return response;
};

export const useArticles = () => useQuery('articles', getArticles);
