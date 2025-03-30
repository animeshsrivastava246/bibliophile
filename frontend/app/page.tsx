"use client"; // Ensure this runs on the client-side

import { gql, useQuery } from "@apollo/client";
import client from "../lib/apolloClient";

const GET_BOOKS = gql`
	query {
		books {
			id
			title
			author
		}
	}
`;

interface Book {
	id: string;
	title: string;
	author: string;
}

export default function Home() {
	const { loading, error, data } = useQuery<{ books: Book[] }>(GET_BOOKS, {
		client,
	});

	// ✅ Ensure `data` is defined and `books` is an array
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	if (!data || !Array.isArray(data.books)) return <p>No books found.</p>;

	return (
		<div>
			<h1>Book List</h1>
			<ul>
				{data.books.map((book) => (
					<li key={book.id}>
						<strong>{book.title}</strong> by {book.author}
					</li>
				))}
			</ul>
		</div>
	);
}
