import { Book } from "./components/books/index.js";

/**
 * Resolvers
 * 
 * Resolvers define how to fetch the types defined in your schema.
 */
const resolvers = {
    Query: {
      ...Book.resolvers.queries,
    }
};
export default resolvers;