import Joi from "joi";

export const BookValidator = {
  create: Joi.object({
    author: Joi.string().required(),
    genre: Joi.string().required(),
    title: Joi.string().required(),
  }),
};
