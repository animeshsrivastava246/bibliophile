import { gql } from "graphql-tag";

const typeDefs = gql`
	type Book {
		id: ID!
		title: String!
		author: String!
		genre: String!
		language: String!
		rating: Float
		description: String
		buyLink: String
	}

	type User {
		id: ID!
		username: String!
		email: String!
		favoriteBooks: [Book]
	}

	type Query {
		books: [Book]
		book(id: ID!): Book
		users: [User]
		user(id: ID!): User
	}

	type Mutation {
		addBook(
			title: String!
			author: String!
			genre: String!
			language: String!
			description: String
			buyLink: String
		): Book
		addUser(username: String!, email: String!): User
	}
`;

export default typeDefs;
