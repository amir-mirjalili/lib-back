import Joi from "joi";

export const BookValidator = {
  getAll: Joi.object({
    page: Joi.number().default(1),
    pageSize: Joi.number().default(10),
  }),

  create: Joi.object({
    author: Joi.string().required(),
    genre: Joi.string().required(),
    title: Joi.string().required(),
  }),
  search: Joi.object({
    title: Joi.string(),
    author: Joi.string(),
    genre: Joi.string(),
    page: Joi.number().default(1),
    pageSize: Joi.number().default(10),
  }),
  update: Joi.object({
    title: Joi.string(),
    author: Joi.string(),
    genre: Joi.string(),
  }),
};
