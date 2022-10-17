import { Book } from "./components/books/index.js";

const resolvers = {
    Query: {
      ...Book.resolvers.queries,
    }
};
export default resolvers;