const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        username: String
        email: String
        password: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    input savedBook {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Query {
        me: User
    }
    
    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input:savedBook!): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;