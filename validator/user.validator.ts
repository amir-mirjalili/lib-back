import Joi from "joi";

export const UserValidator = {
  login: Joi.object({
    name: Joi.string().required(),
  }),
};
