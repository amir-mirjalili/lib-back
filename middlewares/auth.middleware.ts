import * as dotenv from "dotenv";
import * as jwt from "jsonwebtoken";
import { ApiRes } from "../providers/restapi/status";

export const AuthMiddleware = async (req: any, res: any, next: () => void) => {
  /*
    This MiddleWare Handle Authentication Via JWT
  */
  dotenv.config();
  // no bearer token in header
  if (!req.headers.authorization) {
    console.log("No authorization-token");
    return ApiRes(res, { status: 401 });
  }

  const token = req.headers.authorization.replace("Bearer ", "");
  try {
    const jwtData = jwt.verify(token, process.env.SECRET_KEY ?? "library");
    // user token not found
    if (!jwtData) {
      return ApiRes(res, { status: 401, msg: "user not found" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return ApiRes(res, { status: 401 });
  }
};
