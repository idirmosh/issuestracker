import db from "shared/db";
import { seoSlugify } from "shared/libs/helpers";
import { AuthenticationError } from "apollo-server-micro";
import { objectType, extendType, nonNull, stringArg } from "nexus";
import { Issue } from "./Issue";
import { User } from "./User";
import { pathRevalidate } from "shared/server/utils";

export const Project = objectType({
  name: "Project",
  definition(t) {
    t.string("id");
    t.string("userId");
    t.nonNull.field("createdAt", {
      type: "DateTime",
    });
    t.string("image");
    t.string("email");
    t.string("name");
    t.string("slug");
    t.string("url");
    t.string("description");
    t.list.field("issues", {
      type: Issue,
      async resolve(parent, _args, { db }) {
        return await db.issue.findMany({
          where: {
            projectId: parent.id,
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
  },
});

export const getDashboard = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("getDashboard", {
      type: Project,
      async resolve(parent, args, { db, userId }) {
        if (!userId) {
          throw new AuthenticationError("The server failed to authenticate");
        } else {
          return await db.project.findMany({
            where: {
              userId,
            },
          });
        }
      },
    });
  },
});
export const getAllProjects = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("getAllProjects", {
      type: Project,
      async resolve(parent, args, { db }) {
        return await db.project.findMany();
      },
    });
  },
});

export const getProject = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("getProject", {
      type: Project,
      args: { slug: nonNull(stringArg()) },
      async resolve(parent, args, { db, _userId }) {
        console.log("projectRef");
        try {
          const projectRef = await db.project.findFirst({
            where: { slug: args.slug },
          });

          return projectRef;
        } catch (error) {
          console.log(error.message);
        }
        return Project;
      },
    });
  },
});

export const getProjects = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("getProjects", {
      type: Project,
      async resolve(parent, args, { db, userId }) {
        if (!userId) {
          throw new AuthenticationError("The server failed to authenticate");
        } else {
          const projectsRef = await db.project.findMany({
            where: {
              userId,
            },
          });
          return projectsRef;
        }
      },
    });
  },
});

export const createProject = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createProject", {
      type: Project,
      args: {
        name: nonNull(stringArg()),
        url: nonNull(stringArg()),
        email: nonNull(stringArg()),
        description: nonNull(stringArg()),
      },
      async resolve(parent, args, { db, userId }) {
        if (!userId) {
          throw new AuthenticationError("The server failed to authenticate");
        } else {
          const newProjecRef = await db.project.create({
            data: {
              userId,
              name: args.name,
              url: args.url,
              email: args.url,
              slug: seoSlugify(args.name),
              description: args.description,
            },
          });
          await pathRevalidate(`/${newProjecRef.slug}`);

          return newProjecRef;
        }
      },
    });
  },
});
