import { ApiRes } from "../providers/restapi/status";
import { Request, Response } from "express";
import { BookInsert } from "../services/books/book_insert";
import { BookInfo } from "../services/books/book_info";

export const insert = async (req: Request, res: Response) => {
  const book = new BookInsert();
  const response = await book.insert(
    req.body.author,
    req.body.genre,
    req.body.title
  );
  return ApiRes(res, {
    status: response.is_success ? 200 : 500,
    data: response.data,
  });
};

export const get_all = async (req: Request, res: Response) => {
  const book = new BookInfo();
  const response = await book.getAll();
  return ApiRes(res, {
    status: response.is_success ? 200 : 500,
    data: response.data,
  });
};

export const search = async (req: Request, res: Response) => {
  const book = new BookInfo();
  const response = await book.search({
    title: req.query.title as string,
    author: req.query.author as string,
    genre: req.query.genre as string,
  });
  return ApiRes(res, {
    status: response.is_success ? 200 : 500,
    data: response.data,
  });
};
