import ServiceRepository from '@/services/repositories/services/service_repository';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

const service_repository = new ServiceRepository();

export const createCategory = async (
  request: CategoryRequest,
): Promise<Category> => {
  const response = await service_repository
    .createCategory(request)
    .then(async (value) => {
      return value;
    })
    .catch((error: AxiosError) => {
      console.log('====================================');
      console.log('ERROR CREATE CATEGORY ---> ', error.response);
      console.log('====================================');
      throw error.response;
    });

  return response;
};

export const getCategories = async (): Promise<Category[]> => {
  const response = await service_repository
    .getCategories()
    .then(async (value) => {
      return value;
    })
    .catch((error: AxiosError) => {
      console.log('====================================');
      console.log('ERROR GET ALL CATEGORY ---> ', error.response);
      console.log('====================================');
      throw error.response;
    });

  return response;
};

export const useCategories = () => useQuery('categories', getCategories);
