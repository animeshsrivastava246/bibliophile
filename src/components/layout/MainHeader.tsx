import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MainHeader() {
  return (
    <header className="border-b py-4">
      <div className="container flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Bibliophile
        </Link>
        <nav className="space-x-4">
          <Link href="/books" className="text-sm font-medium hover:underline">
            Books
          </Link>
          <Link href="/forums" className="text-sm font-medium hover:underline">
            Forums
          </Link>
          <Link href="/login">
            <Button size="sm">Login</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}