import { Book } from "./components/books/index.js";

const typeDefs = `
    ${Book.types}

    type Query {
        ${Book.queries}
    }
`;

export default typeDefs;