import { Category } from '../entities/category.entity';

export class CategoriesServices {
  async create(): Promise<Category> {
    const category = new Category({
      title: 'Example Category Title',
      color: '#ff33bb',
    });

    return category;
  }
}
