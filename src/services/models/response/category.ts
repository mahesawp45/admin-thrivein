export type CategoryResponse = {
  services: Category[];
};

export type Category = {
  id: number;
  title: string;
  description: string;
  category: string;
  icon_url: string;
  color: string;
  created_at: string;
  updated_at: string;
};
