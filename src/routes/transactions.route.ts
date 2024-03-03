import { Router } from 'express';

import { TransactionsController } from '../controllers/transactions.controller';
import { createTransitionSchema } from '../dtos/transactions.dto';
import { TransactionsFactory } from '../factories/transactions.factory';
import { ParamsType, validator } from '../middlewares/validator.middleware';

export const transactionsRoutes = Router();

const controller = new TransactionsController(
  TransactionsFactory.getServiceInstance(),
);

transactionsRoutes.post(
  '/',
  validator({
    schema: createTransitionSchema,
    type: ParamsType.BODY,
  }),
  controller.create,
);
