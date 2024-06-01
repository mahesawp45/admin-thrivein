export interface IServiceRepository {
  getCategories(): Promise<Category>;
}
