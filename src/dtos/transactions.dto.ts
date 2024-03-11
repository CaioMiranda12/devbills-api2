import { z } from 'zod';

import { TransactionType } from '../entities/transactions.entity';

export const createTransitionSchema = {
  title: z.string(),
  amount: z.number().int().positive(),
  type: z.nativeEnum(TransactionType),
  date: z.coerce.date(),
  categoryId: z.string().length(24),
};

const createdTransactionObject = z.object(createTransitionSchema);
export type CreateTransactionDTO = z.infer<typeof createdTransactionObject>;

export const indexTransactionSchema = {
  title: z.string().optional(),
  categoryId: z.string().length(24).optional(),
  beginDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
};

const indexTransactionObject = z.object(indexTransactionSchema);
export type IndexTransactionDTO = z.infer<typeof indexTransactionObject>;

export const getDashboardSchema = {
  beginDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
};

const getDashboardObject = z.object(getDashboardSchema);
export type GetDashboardDTO = z.infer<typeof getDashboardObject>;
