import { CategoriesRepository } from '../database/repositories/categories.repository';
import { CategoryModel } from '../schemas/category.schema';
import { CategoriesServices } from '../services/categories.service';

export class CategoriesFactory {
  private static categoriesService: CategoriesServices;

  static getServiceInstance() {
    if (this.categoriesService) {
      return this.categoriesService;
    }

    const repository = new CategoriesRepository(CategoryModel);
    const service = new CategoriesServices(repository);

    this.categoriesService = service;

    return service;
  }
}
