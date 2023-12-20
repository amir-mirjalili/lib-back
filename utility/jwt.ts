import * as jwt from "jsonwebtoken";
import { config } from "dotenv";

config();
/**
 * Verification of JWT
 * @param req Http Request
 * @returns boolean
 */

/***
 * Create New JWT by saved user token info
 * @return ObjectResInterface
 */
export const generateToken = (name: string) => {
  try {
    return {
      is_success: true,
      data: jwt.sign(
        {
          name,
        },
        process.env.SECRET_KEY ? process.env.SECRET_KEY : "library",
        { algorithm: "HS512", expiresIn: "90d" }
      ),
    };
  } catch (err) {
    console.log(err);
    return {
      is_success: false,
      msg: "internal error",
    };
  }
};
