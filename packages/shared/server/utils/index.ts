import crypto from "crypto";
import jwt from "jsonwebtoken";

import { join } from "path";
import { readFileSync } from "fs";
import { CookieSerializeOptions, parse, serialize } from "cookie";
import { TOKEN_NAME, PUB_KEY, PRIV_KEY, FRONTEND_URL } from "shared/constants";
import { User } from "shared/types";

// const resetPath = "./../../packages/scripts/";

// //TODO resolve path to matchg the new setup!
// export const PUB_KEY = readFileSync(
//   join(process.cwd(), resetPath, "/keys/pub-key.pem"),
//   "utf-8"
// );
// export const PRIV_KEY = readFileSync(
//   join(process.cwd(), resetPath, "/keys/priv-key.pem"),
//   "utf-8"
// );

export const utils = {
  parseCookies: (req) => {
    if (req.cookies) return req.cookies;
    const cookie = req.headers?.cookie;
    return parse(cookie || "");
  },
  getCookie: (req) => {
    const cookies = utils.parseCookies(req);
    return cookies[TOKEN_NAME];
  },
  tokenFromCookie: (req, key) => req.cookies[key].split(" ")[1],
};

export const getFavicon = (domain) =>
  `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${domain}/&size=64`;

/**
 * Generates a salt and a hash for a given password
 * @constructor
 * @param {string} password - given password
 */

export function generatePwds(password: string): Array<string> {
  const salt = crypto.randomBytes(32).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");

  return [salt, hash];
}

/**
 * Takes in a user and a given password. returns true if the user password maatches  the given password
 * @constructor
 * @param {string} user - user
 * @param {string} password - given password
 */

export function validatePwd(user: User, password): boolean {
  const hash = crypto
    .pbkdf2Sync(password, user.salt, 1000, 64, "sha512")
    .toString("hex");
  return user.hash === hash;
}

/**
 * Issue a JWT for a user
 * @constructor
 * @param {string} user - a user
 */
export function issueJWT(user: User): string {
  const payload = { sub: user.id, iat: Date.now() };
  return jwt.sign(payload, PRIV_KEY, { algorithm: "RS256" });
}
/**
 * Verify JWt and return it
 * @constructor
 * @param {string} token - the token
 * @param {string} key - a key
 */

export function verifyJWT(token: string, key: string) {
  return jwt.verify(token, key, {
    algorithm: "RS256",
  });
}

/**
 * Takes token return it into serialized cookie
 * @constructor
 * @param {string} key - cookie key/name must contain either "refresh", "access".
 * @param {string} token - JWT token..
 */
export function serializeToken(key: string, token: string): string | TypeError {
  const isRefresh: boolean = key.startsWith("refresh");
  const isAccess: boolean = key.startsWith("access");

  const config: CookieSerializeOptions = {
    httpOnly: true,
    maxAge: isAccess ? 60 * 15 : 60 * 60 * 24 * 7, // 15 min  or 7 days
    secure: true,
    path: "/",
    sameSite: "none",
  };
  if (isRefresh) {
    return serialize(key, token, config);
  } else if (isAccess) {
    return serialize(key, token, config);
  }

  throw new Error("One or both args in tokenToCookie are missing!");
}

export async function pathRevalidate(path) {
  try {
    const token = process.env.REVALIDATE_SECRET_TOKEN;
    const url = `${FRONTEND_URL}/api/revalidate?secret=${token}&path=${path}`;

    await fetch(url, { method: "POST" });
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}
