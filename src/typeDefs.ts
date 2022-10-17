import { Book } from "./components/books/index.js";

/**
 * Schema - Type Definitions
 * 
 * It defines the "shape" of queries that are executed against your data.
 */
const typeDefs = `
    ${Book.types}

    type Query {
        ${Book.queries}
    }
`;

export default typeDefs;