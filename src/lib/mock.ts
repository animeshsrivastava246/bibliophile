import { Book } from "@/types/book"
import { User } from "firebase/auth"

export async function getRecommendedBooks(user: User | null): Promise<Book[]> {
    await new Promise((res) => setTimeout(res, 1000))
    return [
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
    ]
}
