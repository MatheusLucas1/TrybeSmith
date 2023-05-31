import { NextFunction, Request, Response } from 'express';
import { insertProductSchema } from '../schemas/product.schema';

export const teste = 'qualquerCoisa';

export const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;

  if (!body.name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (!body.price) {
    return res.status(400).json({ message: '"price" is required' });
  }

  const validation = insertProductSchema.validate(body);

  if (validation.error) {
    return res.status(422).json({ message: validation.error.message });
  }

  next();
};