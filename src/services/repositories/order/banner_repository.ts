import { api } from '@/services/config/api';
import { HistoryOrderResponse } from '@/services/models/response/history_order';

class OrderRepository {
  get_endpoint = 'history-order';

  async getHistories(): Promise<HistoryOrderResponse> {
    try {
      const response = await api.get(this.get_endpoint);

      return response.data;
    } catch (error) {
      console.log('====================================');
      console.log('ERROR GET ALL HISTORY ---> ', error);
      console.log('====================================');
      throw error;
    }
  }
}

export default OrderRepository;
