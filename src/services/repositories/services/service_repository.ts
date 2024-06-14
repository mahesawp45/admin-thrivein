import { api } from '@/services/config/api';
import {
  Category,
  CategoryResponse,
} from '@/services/models/response/category';

class ServiceRepository {
  create_endpoint = 'create-category';
  get_endpoint = 'services';

  async createCategory(request: CategoryRequest): Promise<Category> {
    try {
      const response = await api.post(this.create_endpoint, request);

      return response.data;
    } catch (error) {
      console.log('====================================');
      console.log('ERROR CREATE CATEGORY ---> ', error);
      console.log('====================================');
      throw error;
    }
  }

  async getCategories(): Promise<CategoryResponse> {
    try {
      const response = await api.get(this.get_endpoint);

      return response.data;
    } catch (error) {
      console.log('====================================');
      console.log('ERROR GET ALL CATEGORY ---> ', error);
      console.log('====================================');
      throw error;
    }
  }
}

export default ServiceRepository;
