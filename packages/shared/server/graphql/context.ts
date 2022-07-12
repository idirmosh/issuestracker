import { PrismaClient } from ".prisma/client";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import db from "shared/db";
import { PUB_KEY } from "shared/constants";

type UserID = string | (() => string) | undefined;

interface ExtendedNextApiRequest extends NextApiRequest {
  userId: UserID;
}

interface IProps {
  res: NextApiResponse;
  req: ExtendedNextApiRequest;
}

interface IContext {
  db: PrismaClient | any;
  res: NextApiResponse;
  req: ExtendedNextApiRequest;
  userId: UserID;
}

export async function graphQlContext({ req, res }: IProps): Promise<IContext> {
  let userId;
  const accessToken = req.cookies["access-token"];

  if (accessToken !== undefined) {
    if (accessToken.match(/\S+\.\S+.\S+/) !== null) {
      const payload = jwt.verify(accessToken, PUB_KEY, {
        algorithms: ["RS256"],
      });
      req.userId = payload.sub;
      userId = payload.sub;
    }
  }

  //const refreshToken = req.cookies["refresh-token"];

  //req.userId = payload.sub;

  return {
    db,
    req,
    res,
    userId,
  };
}
