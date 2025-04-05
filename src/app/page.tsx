// src/app/(main)/page.tsx

import { Suspense } from "react";
// import { BookCard } from "@/components/features/book/BookCard";
import { BookGridSkeleton } from "@/components/common/LoadingSkeletons";
import { MainHeader } from "@/components/layout/MainHeader";
// import { useAuth } from "@/hooks/useAuth";
// import { useBookData } from "@/hooks/useBookData";
import { Book } from "@/types/book";
import { BookRecommendations } from "@/components/features/book/BookRecommendations";

export default function HomePage() {
	// const { user } = useAuth();
	// const { books, isLoading, fetchBooks } = useBookData(user);

	// useEffect(() => {
	// 	fetchBooks(); // Load books on mount
	// }, [fetchBooks]);

	return (
		<>
			<MainHeader />
			<main className="max-w-7xl mx-auto px-4 py-10">
				{/* <section className="mb-8 text-center">
					<h1 className="text-4xl font-bold tracking-tight">
						{user
							? `Welcome back, ${user.displayName || "Reader"}!`
							: "Discover Your Next Favorite Book"}
					</h1>
					<p className="mt-2 text-lg text-muted-foreground">
						{user
							? "Here are your personalized AI-powered recommendations:"
							: "Explore books curated with the power of AI and community wisdom."}
					</p>
				</section> */}

				{/* <section aria-label="Recommended Books">
					{isLoading ? (
						<BookGridSkeleton />
					) : (
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
							{books.map((book: Book) => (
								<BookCard key={book._id} book={book} />
							))}
						</div>
					)}
				</section> */}
				<section aria-label="Recommended Books">
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						<Suspense fallback={<BookGridSkeleton />}>
							<BookRecommendations />
						</Suspense>
					</div>
				</section>
			</main>
		</>
	);
}
