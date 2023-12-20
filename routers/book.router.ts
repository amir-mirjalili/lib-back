import express from "express";
import * as BookController from "../controllers/book.controller";
import { InputValidator } from "../middlewares/input-validator";
import { BookValidator } from "../validator/book.validator";

const BookRoutes = express.Router();

const route = "/books";

BookRoutes.post(
  route,
  [InputValidator(BookValidator.create, "body")],
  BookController.book_insert
);

export default BookRoutes;
