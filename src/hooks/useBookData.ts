import { useEffect, useState } from "react"
import { Book } from "@/types/book"
import { getRecommendedBooks } from "@/lib/mock"
import { User } from "firebase/auth"

export function useBookData(user: User | null) {
    const [books, setBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchBooks() {
            const data = await getRecommendedBooks(user)
            setBooks(data)
            setLoading(false)
        }
        fetchBooks()
    }, [user])

    return { books, loading }
}