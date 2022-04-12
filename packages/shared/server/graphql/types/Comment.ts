import { pathRevalidate } from "shared/server/utils";
import { AuthenticationError } from "apollo-server-micro";
import { extendType, nonNull, objectType, stringArg } from "nexus";
import { User } from "./User";
import prisma from "../../../db";

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
export const deleteComment = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("deleteComment", {
      type: Comment,
      args: {
        commentId: nonNull(stringArg()),
      },
      async resolve(parent, args, { db, userId }) {
        await prisma.comment.delete({
          where: {
            id: args.commentId,
          },
        });

        return Comment;
      },
    });
  },
});
export const editComment = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("editComment", {
      type: Comment,
      args: {
        commentId: nonNull(stringArg()),
        commentData: nonNull(stringArg()),
      },
      async resolve(parent, args, { db, userId }) {
        const editedComment = await db.comment.update({
          where: {
            id: args.commentId,
          },
          data: {
            content: args.commentData,
          },
        });

        return editedComment;
      },
    });
  },
});
export const getComments = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("getComments", {
      type: Comment,
      args: {
        issueId: nonNull(stringArg()),
      },
      async resolve(parent, args, { db, userId }) {
        const commentsRef = await db.comment.findMany({
          where: {
            issueId: args.issueId,
          },
        });
        // await pathRevalidate(`/${args.projectSlug}`);

        return commentsRef;
      },
    });
  },
});
