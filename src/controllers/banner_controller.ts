import BannerRequest from '@/services/models/request/banner_request';
import Banner from '@/services/models/response/banner';
import BannerRepository from '@/services/repositories/banner/banner_repository';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

const banner_repository = new BannerRepository();

export const createBanner = async (request: BannerRequest): Promise<Banner> => {
  const response = await banner_repository
    .createBanner(request)
    .then(async (value) => {
      return value;
    })
    .catch((error: AxiosError) => {
      console.log('====================================');
      console.log('ERROR CREATE BANNER ---> ', error.response);
      console.log('====================================');
      throw error.response;
    });

  return response;
};

export const getBanners = async (): Promise<Banner[]> => {
  const response = await banner_repository
    .getBanners()
    .then(async (value) => {
      return value;
    })
    .catch((error: AxiosError) => {
      console.log('====================================');
      console.log('ERROR GET ALL BANNER ---> ', error.response);
      console.log('====================================');
      throw error.response;
    });

  return response;
};

export const useBanners = () => useQuery('banners', getBanners);
