import express from "express";
import * as UserController from "../controllers/user.controller";
import { InputValidator } from "../middlewares/input-validator";
import { UserValidator } from "../validator/user.validator";

const UserRoots = express.Router();

const route = "/users";

UserRoots.post(
  `${route}/login`,
  [InputValidator(UserValidator.login, "body")],
  UserController.login
);
export default UserRoots;
