import Joi from 'joi';

export const teste = 'qualquerCoisa';

export const insertProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.string().min(3).required(),
  orderId: Joi.number().integer(),
});