// src/components/features/book/BookRecommendations.tsx

"use client";

import { useAuth } from "@/hooks/useAuth";
import { useBookData } from "@/hooks/useBookData";
import { BookCard } from "./BookCard";

export function BookRecommendations() {
	const { user } = useAuth();
	const { books, loading } = useBookData(user);

	if (loading) return null;

	if (!books?.length) {
		return (
			<p className="text-center text-muted-foreground">
				No recommendations found.
			</p>
		);
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
			{books.map((book) => (
				<BookCard key={book._id} book={book} />
			))}
		</div>
	);
}
