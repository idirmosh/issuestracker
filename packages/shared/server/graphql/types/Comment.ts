import { AuthenticationError } from "apollo-server-micro";
import { extendType, nonNull, objectType, stringArg } from "nexus";
import { User } from "./User";

export const Comment = objectType({
  name: "Comment",
  definition(t) {
    t.string("id");
    t.nonNull.field("createdAt", {
      type: "DateTime",
    });
    t.string("issueId");
    t.string("content");
    t.string("userId");
    t.nonNull.field("user", {
      type: User,
      async resolve(parent, _args, { db }) {
        return await db.user.findFirst({ where: { id: parent.userId } });
      },
    });
  },
});

export const createComment = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createComment", {
      type: Comment,
      args: {
        issueId: nonNull(stringArg()),
        content: nonNull(stringArg()),
      },
      async resolve(parent, args, { db, userId }) {
        if (!userId) {
          throw new AuthenticationError("The server failed to authenticate");
        } else {
          return await db.comment.create({
            data: {
              userId,
              issueId: args.issueId,
              content: args.content,
            },
          });
        }
      },
    });
  },
});
