import express, { json } from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import { connect } from "mongoose";

import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(json());

async function startServer() {
	const server = new ApolloServer({ typeDefs, resolvers });
	await server.start();
	app.use("/graphql", expressMiddleware(server));

	connect(process.env.MONGO_URI, { dbName: "bibliophile" })
		.then(() => {
			console.log("✅ MongoDB Connected");
			app.listen(5000, () =>
				console.log("🚀 Server running at http://localhost:5000/graphql")
			);
		})
		.catch((err) => console.error(err));
}

startServer();
