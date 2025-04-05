// src/app/(main)/page.tsx

import { Suspense } from "react"
import { Metadata } from "next"
import { getRecommendedBooks } from "@/lib/mock" // Replace with actual hook/api later
import { BookGridSkeleton } from "@/components/common/LoadingSkeletons"
import { BookRecommendations } from "@/components/features/book/BookRecommendations"
import { MainHeader } from "@/components/layout/MainHeader"

// Dynamic metadata
export const metadata: Metadata = {
  title: "Bibliophile — Discover, Discuss, and Dive into Books",
  description:
    "AI-powered book recommendations tailored to your taste. Explore adaptations, join discussions, and track your literary journey.",
  openGraph: {
    title: "Bibliophile",
    description: "Your personalized AI-powered reading hub.",
    url: "https://yourdomain.com",
    siteName: "Bibliophile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bibliophile Open Graph Image",
      },
    ],
    type: "website",
  },
}

// Home page
export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <MainHeader />

      <section className="container py-10 space-y-8">
        <h1 className="text-4xl font-bold tracking-tight text-center">
          📚 Welcome to Bibliophile
        </h1>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          AI-powered book recommendations, community-driven reviews, and media adaptation connections — all in one place.
        </p>

        {/* Book Recommendations Section */}
        <Suspense fallback={<BookGridSkeleton count={6} />}>
          <BookRecommendations />
        </Suspense>
      </section>
    </main>
  )
}
