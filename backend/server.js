require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// Define GraphQL Schema
const typeDefs = `
  type Query {
    hello: String
  }
`;

// Define Resolvers
const resolvers = {
	Query: {
		hello: () => "Welcome to Bibliophile GraphQL API!",
	},
};

// Initialize Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("✅ MongoDB Connected"))
	.catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Start Apollo Server
async function startServer() {
	const server = new ApolloServer({ typeDefs, resolvers });
	await server.start();

	app.use("/graphql", expressMiddleware(server));

	app.listen(process.env.PORT || 5000, () => {
		console.log(
			`🚀 Server running at http://localhost:${
				process.env.PORT || 5000
			}/graphql`
		);
	});
}

startServer();
