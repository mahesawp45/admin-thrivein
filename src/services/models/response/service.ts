export type ThriveInServiceResponse = {
  'list-services': ThriveInService[];
};

export type ThriveInService = {
  service_id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  icon_url: string;
  created_at: string;
  updated_at: string;
};
