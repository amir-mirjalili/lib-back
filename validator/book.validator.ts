import Joi from "joi";

export const BookValidator = {
  create: Joi.object({
    author: Joi.string().required(),
    genre: Joi.string().required(),
    title: Joi.string().required(),
  }),
  search: Joi.object({
    title: Joi.string(),
    author: Joi.string(),
    genre: Joi.string(),
  }),
  update: Joi.object({
    title: Joi.string(),
    author: Joi.string(),
    genre: Joi.string(),
  }),
};
