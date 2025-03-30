const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const app = express();
app.use(cors());
app.use(express.json());

async function startServer() {
	const server = new ApolloServer({ typeDefs, resolvers });
	await server.start();
	app.use("/graphql", expressMiddleware(server));

	mongoose
		.connect(process.env.MONGO_URI, { dbName: "bibliophile" })
		.then(() => {
			console.log("✅ MongoDB Connected");
			app.listen(5000, () =>
				console.log("🚀 Server running at http://localhost:5000/graphql")
			);
		})
		.catch((err) => console.error(err));
}

startServer();
