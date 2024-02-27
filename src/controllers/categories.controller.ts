import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';

import { CategoriesRepository } from '../database/repositories/categories.repository';
import { CreateCategoryDTO } from '../dtos/categories.dto';
import { CategoryModel } from '../schemas/category.schema';
import { CategoriesServices } from '../services/categories.services';

export class CategoriesController {
  async create(
    req: Request<unknown, unknown, CreateCategoryDTO>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { title, color } = req.body;

      const repository = new CategoriesRepository(CategoryModel);
      const service = new CategoriesServices(repository);

      const result = await service.create({ title, color });

      return res.status(StatusCodes.CREATED).json(result);
    } catch (err) {
      next(err);
    }
  }

  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const repository = new CategoriesRepository(CategoryModel);
      const service = new CategoriesServices(repository);

      const result = await service.index();

      return res.status(StatusCodes.OK).json(result);
    } catch (err) {
      next(err);
    }
  }
}
