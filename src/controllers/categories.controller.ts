import { Request, Response } from 'express';

import { CategoriesRepository } from '../database/repositories/categories.repository';
import { CreateCategoryDTO } from '../dtos/categories.dto';
import { CategoryModel } from '../schemas/category.schema';
import { CategoriesServices } from '../services/categories.services';

export class CategoriesController {
  async create(
    req: Request<unknown, unknown, CreateCategoryDTO>,
    res: Response,
  ) {
    const { title, color } = req.body;

    const repository = new CategoriesRepository(CategoryModel);
    const service = new CategoriesServices(repository);

    const result = await service.create({ title, color });

    return res.status(201).json(result);
  }
}
