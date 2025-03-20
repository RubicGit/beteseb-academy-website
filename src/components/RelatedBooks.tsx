import React from "react";
import { books } from "@/data/booksData";
import BookCard from "@/components/BookCard";
import Link from "next/link";

export default function RelatedBooks() {
  // Randomly shuffle the books array and pick the first 4 books
  const shuffledBooks = [...books].sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Related Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {shuffledBooks.map((randomBook, index) =>
          randomBook.bookURL ? (
            <Link
              key={`${randomBook.bookName}-${index}`}
              href={`/library/book/${randomBook.bookURL}`}
              className="block no-underline "
            >
              <BookCard book={randomBook} variant="tall" />
            </Link>
          ) : (
            <div
              key={`${randomBook.bookName}-${index}`}
              className="block no-underline "
            >
              <BookCard book={randomBook} variant="tall" />
            </div>
          )
        )}
      </div>
    </div>
  );
}
