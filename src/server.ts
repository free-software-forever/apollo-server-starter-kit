import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import resolvers from './resolvers.js';
import typeDefs from './typeDefs.js';

/**
 * GraphQL Server Class
 * 
 * This class has a async function that creates a Apollo GraphQL Server.
 */
export class GraphQLServer {
    async create() {
        const server = new ApolloServer({
            typeDefs,
            resolvers,
        });

        const { url } = await startStandaloneServer(server, {
            listen: { port: 4000 },
        });
        
        console.log(`🚀  Server ready at: ${url}`);
    }
}

