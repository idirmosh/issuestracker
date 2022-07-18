import { scalarType } from "nexus";
import { GraphQLUpload, processRequest } from "graphql-upload";

console.log(processRequest);

export const Upload = scalarType({
  name: GraphQLUpload.name,
  asNexusMethod: "upload", // We set this to be used as a method later as `t.upload()` if needed
  description: GraphQLUpload.description,
  serialize: GraphQLUpload.serialize,
  parseValue: GraphQLUpload.parseValue,
  parseLiteral: GraphQLUpload.parseLiteral,
});
