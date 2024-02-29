import { z } from 'zod';

import { TransactionType } from '../entities/transactions.entity';

export const createTransitionSchema = {
  title: z.string(),
  amount: z.number().int().positive(),
  type: z.nativeEnum(TransactionType),
  date: z.coerce.date(),
  categoryId: z.string(),
};

const createdTransactionObject = z.object(createTransitionSchema);

export type CreateTransactionDTO = z.infer<typeof createdTransactionObject>;
