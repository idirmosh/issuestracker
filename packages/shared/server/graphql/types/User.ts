import { extendType, nonNull, objectType, stringArg } from "nexus";
import { CookieSerializeOptions, serialize } from "cookie";
import gravatar from "gravatar";
import { AuthenticationError, UserInputError } from "apollo-server-micro";
import {
  generatePwds,
  issueJWT,
  serializeToken,
  validatePwd,
} from "shared/server/utils";
import { Comment } from "./Comment";
import { Project } from "./Project";
import { Issue } from "./Issue";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.nonNull.field("createdAt", {
      type: "DateTime",
    });
    t.string("username");
    t.string("email");
    t.string("image");
    t.list.field("projects", {
      type: Project,
      async resolve(parent, _args, { db }) {
        return await db.project.findMany({
          where: {
            userId: parent.id,
          },
        });
      },
    });
    t.list.field("comments", {
      type: Comment,
      async resolve(parent, _args, { db }) {
        return await db.comment.findMany({
          where: {
            userId: parent.id,
          },
        });
      },
    });
    t.list.field("issues", {
      type: Issue,
      async resolve(parent, _args, { db }) {
        return await db.issue.findMany({
          where: {
            userId: parent.id,
          },
        });
      },
    });
  },
});

export const getMe = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("getMe", {
      type: User,
      async resolve(parent, args, { db, userId, req }) {
        if (!userId) {
          throw new AuthenticationError("The server failed to authenticate");
        }
        const user = await db.user.findFirst({ where: { id: userId } });
        if (!user) {
          throw new UserInputError("The server failed to authenticate");
        } else {
          return user;
        }
      },
    });
  },
});

export const login = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("login", {
      type: User,
      args: {
        username: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(_parent, args, { db, res }, _info) {
        try {
          const { username, password } = args;

          const user = await db.user.findFirst({
            where: { username: username },
          });
          const isValid = validatePwd(user, password);

          if (isValid) {
            const refresh = issueJWT(user);

            const access = issueJWT(user);
            const refreshCookie = serializeToken("refresh-token", refresh);
            const accessCookie = serializeToken("access-token", access);

            res.setHeader("Set-Cookie", [accessCookie, refreshCookie]);

            return user;
          } else {
            throw new UserInputError("Password is not valid!");
          }
        } catch (e) {
          throw new UserInputError("Incorrect username or password!");
        }
      },
    });
  },
});

export const signUp = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("signUp", {
      type: User,
      args: {
        username: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(_parent, args, { db }, _info) {
        try {
          const { username, email, password } = args;
          const [salt, hash] = generatePwds(password);
          const user = await db.user.create({
            data: {
              username,
              email,
              image: gravatar.url(email, { protocol: "https", s: "100" }),
              salt,
              hash,
            },
          });
          return user;
        } catch (e: any) {
          throw new UserInputError(`${e.meta?.target[0]} already exists!`);
        }
      },
    });
  },
});

export const logOut = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("logOut", {
      type: User,
      async resolve(_parent, _args, { res }, _info) {
        const cookieConf: CookieSerializeOptions = {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          expires: new Date(0),
          path: "/",
          sameSite: "strict",
        };
        const temp = [
          serialize("refresh-token", "", cookieConf),
          serialize("access-token", "", cookieConf),
        ];
        res.setHeader("Set-Cookie", temp);

        return true;
      },
    });
  },
});
