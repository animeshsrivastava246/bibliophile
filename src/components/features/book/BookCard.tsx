import { Book } from "@/types/book"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book._id}`}>
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <Image
          src={book.coverImageUrl || "/placeholder.jpg"}
          alt={book.title}
          width={300}
          height={400}
          className="w-full h-64 object-cover rounded-t"
        />
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold truncate">{book.title}</h3>
          <p className="text-sm text-muted-foreground truncate">{book.author}</p>
        </CardContent>
      </Card>
    </Link>
  )
}