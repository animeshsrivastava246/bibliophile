import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "http://localhost:5000/graphql", // Change this to your deployed backend URL later
	cache: new InMemoryCache(),
});

export default client;
