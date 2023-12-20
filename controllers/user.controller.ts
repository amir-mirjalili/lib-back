import { ApiRes } from "../providers/restapi/status";
import { Request, Response } from "express";
import { generateToken } from "../utility/jwt";

export const login = async (req: Request, res: Response) => {
  const response = generateToken(req.body.name);
  return ApiRes(res, {
    status: response.is_success ? 200 : 500,
    data: response.data,
  });
};
