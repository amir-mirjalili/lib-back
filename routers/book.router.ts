import express from "express";
import * as BookController from "../controllers/book.controller";
import { InputValidator } from "../middlewares/input-validator";
import { BookValidator } from "../validator/book.validator";

const BookRoutes = express.Router();

const route = "/books";

BookRoutes.post(
  route,
  [InputValidator(BookValidator.create, "body")],
  BookController.insert
);

BookRoutes.get(route, BookController.get_all);

BookRoutes.get(
  `${route}/search`,
  [InputValidator(BookValidator.search, "query")],
  BookController.search
);

BookRoutes.put(
  `${route}/:id`,
  [InputValidator(BookValidator.update, "body")],
  BookController.edit
);

BookRoutes.delete(`${route}/:id`, BookController.remove);
export default BookRoutes;
