import { IServiceRepository } from './IServiceRepository';

class ServiceRepository implements IServiceRepository {
  async getCategories(): Promise<Category> {
      try {
        
          const response = await 
          
    } catch (error) {
      console.log('====================================');
      console.log('ERROR SERVICE ---> ', error);
      console.log('====================================');
      throw error;
    }
  }
}
