import { ApiRes } from "../providers/restapi/status";
import { Request, Response } from "express";
import { BookInsert } from "../services/books/book_insert";

export const book_insert = async (req: Request, res: Response) => {
  const book = new BookInsert();
  const response = await book.insert(
    req.body.author,
    req.body.genre,
    req.body.title
  );
  return ApiRes(res, {
    status: response.is_success ? 200 : 500,
  });
};
