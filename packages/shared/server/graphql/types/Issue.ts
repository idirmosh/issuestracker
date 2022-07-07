import { enumType, extendType, nonNull, objectType, stringArg } from "nexus";
import { User } from "./User";
import { Comment } from "./Comment";
import { Project } from "./Project";
import {
  AuthenticationError,
  UserInputError,
  ApolloError,
  ValidationError,
} from "apollo-server-micro";
import { seoSlugify } from "shared/libs/helpers";
import { pathRevalidate } from "shared/server/utils";

export const Issue = objectType({
  name: "Issue",
  definition(t) {
    t.string("id");
    t.nonNull.field("createdAt", {
      type: "DateTime",
    });
    t.nonNull.field("updatedAt", {
      type: "DateTime",
    });
    t.string("userId");
    t.string("project");
    t.string("projectName");
    t.string("title");
    t.string("slug");
    t.string("description");
    t.field("status", { type: Status });
    t.field("severity", { type: Severity });
    t.int("votes");
    t.list.field("comments", {
      type: Comment,
      async resolve(parent, _args, { db }) {
        return await db.comment.findMany({
          where: {
            issueId: parent.id,
          },
        });
      },
    });
    t.field("user", {
      type: User,
      async resolve(parent, _args, { db }) {
        return await db.user.findFirst({
          where: {
            id: parent.userId,
          },
        });
      },
    });
    t.field("project", {
      type: Project,
      async resolve(parent, _args, { db }) {
        return await db.project.findFirst({
          where: {
            id: parent.projectId,
          },
        });
      },
    });
  },
});

export const updateVote = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("updateVote", {
      type: Issue,
      args: { issueId: nonNull(stringArg()) },
      async resolve(parent, args, { db, userId }) {
        if (!userId) {
          throw new AuthenticationError("The server failed to authenticate");
        } else if (!args.issueId) {
          throw new UserInputError("Issue id is undifined");
        }
        const votes = await db.vote.findMany({
          where: {
            issueId: args.issueId,
          },
        });
        const alreadyVoted = votes.find(
          (vote: { userId: any }) => vote.userId === userId
        );

        if (alreadyVoted) {
          const issue = await db.issue.findFirst({
            where: {
              id: args.issueId,
            },
          });
          return issue;
        } else {
          const [updatedIssue, createdVote] = await db.$transaction([
            db.issue.update({
              where: {
                id: args.issueId,
              },
              data: { votes: { increment: 1 } },
            }),
            db.vote.create({ data: { issueId: args.issueId, userId } }),
          ]);

          return updatedIssue;
        }
      },
    });
  },
});

export const getIssue = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("getIssue", {
      type: Issue,
      args: {
        slug: nonNull(stringArg()),
      },
      async resolve(parent, args, { db }) {
        return await db.issue.findFirst({
          where: { slug: args.slug },
        });
      },
    });
  },
});

export const getLatestIssues = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("getLatestIssues", {
      type: Issue,
      async resolve(parent, args, { db }) {
        try {
          const latestIssues = await db.issue.findMany({ take: 6 });
          return latestIssues;
        } catch (error) {
          console.log(error.message);
          // throw new ValidationError("Invalid Query");
        }
        return Issue;
      },
    });
  },
});

export const getTrendingIssues = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("getTrendingIssues", {
      type: Issue,
      async resolve(parent, args, { db }) {
        const latestIssues = await db.issue.findMany({ take: 6 });
        return latestIssues;
      },
    });
  },
});
export const createIssue = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createIssue", {
      type: Issue,
      args: {
        projectId: nonNull(stringArg()),
        projectSlug: nonNull(stringArg()),
        title: nonNull(stringArg()),
        description: nonNull(stringArg()),
        severity: nonNull(stringArg()),
      },
      async resolve(parent, args, { db, userId, res }) {
        if (!userId) {
          throw new AuthenticationError("The server failed to authenticate");
        }
        try {
          const newIssueRef = await db.issue.create({
            data: {
              projectId: args.projectId,
              userId,
              title: args.title,
              slug: seoSlugify(args.title),
              description: args.description,
              votes: 1,
              severity: args.severity,
            },
          });
          await pathRevalidate(`/${args.projectSlug}`);
          return newIssueRef;
        } catch (e) {
          throw new ApolloError(e.message);
        }
      },
    });
  },
});

export const Status = enumType({
  name: "Status",
  members: ["OPEN", "DUBLICATE", "REVIEWING", "CLOSED"],
});

export const Severity = enumType({
  name: "Severity",
  members: ["LOW", "MEDIUM", "HIGH", "CRITICAL"],
});
