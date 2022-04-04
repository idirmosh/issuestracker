import { GraphQLSchema } from "graphql";
import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./types";

// TODO? Not the best approache revisite
const resetPath = "../../packages/shared/server/";

export const schema = makeSchema({
  types: [types],
  outputs: {
    schema: join(process.cwd(), resetPath, "graphql", "schema.graphql"),
    typegen: join(process.cwd(), "node_modules", "nexus-typegen", "index.d.ts"),
  },
  contextType: {
    export: "Context",
    module: join(process.cwd(), resetPath, "graphql", "context.ts"),
  },
});
