export type BannerResponse = {
  banners: Banner[];
};

export type Banner = {
  id: number;
  title: string;
  bannerUrl: string;
  bannerTxt: string;
  createdAt: string;
  updatedAt: string;
};
