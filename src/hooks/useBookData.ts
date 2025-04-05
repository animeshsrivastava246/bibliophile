// // src/hooks/useBookData.ts

// "use client";

// import { useState, useCallback } from "react";
// import { Book } from "@/types/book";
// import { getRecommendedBooks } from "@/lib/mock";

// export const useBookData = (user?: { uid: string }) => {
//     const [books, setBooks] = useState<Book[]>([]);
//     const [isLoading, setIsLoading] = useState<boolean>(false);

//     const fetchBooks = useCallback(async () => {
//         setIsLoading(true);
//         try {
//             const recommended = await getRecommendedBooks(user?.uid ?? "");

//             setBooks(recommended);
//         } catch (err) {
//             console.error("Failed to fetch books:", err);
//         } finally {
//             setIsLoading(false);
//         }
//     }, [user]);

//     return { books, isLoading, fetchBooks };
// };
