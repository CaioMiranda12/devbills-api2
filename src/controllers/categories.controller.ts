import { Request, Response } from 'express';

import { CategoriesRepository } from '../database/repositories/categories.repository';
import { CategoryModel } from '../schemas/category.schema';
import { CategoriesServices } from '../services/categories.services';

export class CategoriesController {
  async create(_: Request, res: Response) {
    const repository = new CategoriesRepository(CategoryModel);
    const service = new CategoriesServices(repository);

    const result = await service.create();

    return res.status(201).json(result);
  }
}
