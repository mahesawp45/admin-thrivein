export type Order = {
  orderId: number;
  serviceId: number;
  userId: number;
  name: string;
  invoice: string;
  address: string;
  discount: number;
  isOrderNow: number;
  paymentMethod: string;
  status: string;
  title: string;
  totalOrder: number;
  totalPay: number;
  transactionDate: string;
  createdAt: string;
  updatedAt: string;
};

export type HistoryOrderResponse = {
  history_order: Order[];
};
