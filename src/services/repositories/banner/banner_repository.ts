import { api } from '@/services/config/api';
import BannerRequest from '@/services/models/request/banner_request';
import Banner from '@/services/models/response/banner';

class BannerRepository {
  create_endpoint = 'create-banner';
  get_endpoint = 'banners';

  async createBanner(request: BannerRequest): Promise<Banner> {
    try {
      const response = await api.post(this.create_endpoint, request);

      return response.data;
    } catch (error) {
      console.log('====================================');
      console.log('ERROR CREATE BANNER ---> ', error);
      console.log('====================================');
      throw error;
    }
  }

  async getBanners(): Promise<Banner[]> {
    try {
      const response = await api.get(this.get_endpoint);

      return response.data;
    } catch (error) {
      console.log('====================================');
      console.log('ERROR GET ALL BANNER ---> ', error);
      console.log('====================================');
      throw error;
    }
  }
}

export default BannerRepository;
