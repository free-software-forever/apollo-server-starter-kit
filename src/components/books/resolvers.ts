
import { books } from '../../dataset/index.js'

const queries = {
    books: () => books
}

export const resolvers = { queries }