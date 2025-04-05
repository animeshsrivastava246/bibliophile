export interface Book {
    _id: string
    title: string
    author: string
    coverImageUrl?: string
    description?: string
    genres?: string[]
    rating?: number
}