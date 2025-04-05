// src/components/features/book/BookRecommendations.tsx

"use client";

// import { useAuth } from "@/hooks/useAuth";
// import { useBookData } from "@/hooks/useBookData";
import { BookCard } from "./BookCard";

const books = [[
	{
		_id: "1",
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		coverImageUrl: "/covers/gatsby.jpg",
	},
	{
		_id: "2",
		title: "1984",
		author: "George Orwell",
		coverImageUrl: "/covers/1984.jpg",
	},
	{
		_id: "3",
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		coverImageUrl: "/covers/mockingbird.jpg",
	},
]] as any[];

export function BookRecommendations() {
	// const { user } = useAuth();
	// const { books, loading } = useBookData(user);

	// if (loading) return null;

	// if (!books?.length) {
	// 	return (
	// 		<p className="text-center text-muted-foreground">
	// 			No recommendations found.
	// 		</p>
	// 	);
	// }

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
			{books.map((book) => (
				<BookCard key={book._id} book={book} />
			))}
		</div>
	);
}
