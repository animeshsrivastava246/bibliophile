import Book from "../models/Book.js";
import User from "../models/User.js";

const resolvers = {
	Query: {
		books: async () => await Book.find(),
		book: async (_, { id }) => await Book.findById(id),
		users: async () => await User.find(),
		user: async (_, { id }) => await User.findById(id),
	},
	Mutation: {
		addBook: async (
			_,
			{ title, author, genre, language, description, buyLink }
		) => {
			const newBook = new Book({
				title,
				author,
				genre,
				language,
				description,
				buyLink,
			});
			return await newBook.save();
		},
		addUser: async (_, { username, email }) => {
			const newUser = new User({ username, email });
			return await newUser.save();
		},
	},
};

export default resolvers;
