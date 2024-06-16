import { HistoryOrderResponse } from '@/services/models/response/history_order';
import OrderRepository from '@/services/repositories/order/banner_repository';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

const order_repository = new OrderRepository();

export const getHistoryOrder = async (): Promise<HistoryOrderResponse> => {
  const response = await order_repository
    .getHistories()
    .then(async (value) => {
      return value;
    })
    .catch((error: AxiosError) => {
      console.log('====================================');
      console.log('ERROR GET ALL HISTORY ---> ', error.response);
      console.log('====================================');
      throw error.response;
    });

  return response;
};

export const useHistoryOrder = () => useQuery('histories', getHistoryOrder);
