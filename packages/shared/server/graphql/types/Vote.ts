import { pathRevalidate } from "shared/server/utils";
import { AuthenticationError } from "apollo-server-micro";
import { booleanArg, extendType, nonNull, objectType, stringArg } from "nexus";
import { User } from "./User";
import prisma from "../../../db";
import { Issue } from "./Issue";

export const Vote = objectType({
  name: "Vote",
  definition(t) {
    t.string("id");
    t.string("issueId");
    t.string("userId");
    t.nonNull.field("createdAt", {
      type: "DateTime",
    });
    t.nonNull.field("user", {
      type: User,
      async resolve(parent, _args, { db }) {
        return await db.user.findFirst({ where: { id: parent.userId } });
      },
    });
    t.int("count");
    t.string("comment");
    t.boolean("hasComment");
    t.boolean("hasIssue");
    t.nonNull.field("issue", {
      type: Issue,
      async resolve(parent, _args, { db }) {
        return await db.issue.findFirst({ where: { id: parent.issueId } });
      },
    });
  },
});

export const createVote = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createVote", {
      type: Vote,
      args: {
        issueId: nonNull(stringArg()),
        comment: stringArg(),
        hasComment: nonNull(booleanArg()),
        hasIssue: nonNull(booleanArg()),
      },
      async resolve(parent, args, { db, userId }) {
        if (!userId) {
          throw new AuthenticationError("The server failed to authenticate");
        } else {
          return await db.vote.create({
            data: {
              userId,
              issueId: args.issueId,
              comment: args.content || "",
              hasComment: args.hasComment,
              hasIssue: args.hasIssue,
              count: 1,
            },
          });
        }
      },
    });
  },
});

export const editVoteComment = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("editVoteComment", {
      type: Vote,
      args: {
        voteId: nonNull(stringArg()),
        newComment: nonNull(stringArg()),
      },
      async resolve(parent, args, { db, userId }) {
        const editedComment = await db.vote.update({
          where: {
            id: args.voteId,
          },
          data: {
            comment: args.newComment,
          },
        });
        return editedComment;
      },
    });
  },
});

export const getVotes = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("getVotes", {
      type: Vote,
      args: {
        issueId: nonNull(stringArg()),
      },
      async resolve(parent, args, { db, userId }) {
        const commentsRef = await db.vote.findMany({
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
