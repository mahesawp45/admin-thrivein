import { api } from '@/services/config/api';
import ThriveInServiceRequest from '@/services/models/request/service_request';
import {
  Category,
  CategoryResponse,
} from '@/services/models/response/category';
import {
  ThriveInService,
  ThriveInServiceResponse,
} from '@/services/models/response/service';

class ServiceRepository {
  create_endpoint = 'create-category';
  create_service_endpoint = 'create-service';
  get_endpoint = 'services';
  get_list_endpoint = 'list-services';

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

  async createService(
    request: ThriveInServiceRequest,
  ): Promise<ThriveInService> {
    try {
      const response = await api.post(this.create_service_endpoint, request);

      return response.data;
    } catch (error) {
      console.log('====================================');
      console.log('ERROR GET ALL CATEGORY ---> ', error);
      console.log('====================================');
      throw error;
    }
  }

  async getServices(category: string): Promise<ThriveInServiceResponse> {
    try {
      const response = await api.get(`${this.get_list_endpoint}/${category}`);

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
