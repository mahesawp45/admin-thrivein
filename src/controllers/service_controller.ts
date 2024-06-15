import ThriveInServiceRequest from '@/services/models/request/service_request';
import {
  Category,
  CategoryResponse,
} from '@/services/models/response/category';
import {
  ThriveInService,
  ThriveInServiceResponse,
} from '@/services/models/response/service';
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

export const getCategories = async (): Promise<CategoryResponse> => {
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

export const createService = async (
  request: ThriveInServiceRequest,
): Promise<ThriveInService> => {
  const response = await service_repository
    .createService(request)
    .then(async (value) => {
      return value;
    })
    .catch((error: AxiosError) => {
      console.log('====================================');
      console.log('ERROR CREATE SERVICE ---> ', error.response);
      console.log('====================================');
      throw error.response;
    });

  return response;
};

export const getServices = async (
  category: string,
): Promise<ThriveInServiceResponse> => {
  const response = await service_repository
    .getServices(category)
    .then(async (value) => {
      return value;
    })
    .catch((error: AxiosError) => {
      console.log('====================================');
      console.log('ERROR GET ALL SERVICE ---> ', error.response);
      console.log('====================================');
      throw error.response;
    });

  return response;
};

export const useServices = (category: string) => {
  return useQuery(['services', category], () => getServices(category));
};
