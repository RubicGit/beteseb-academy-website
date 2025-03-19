"use client";

import React from "react";
import BookCard from "@/components/BookCard";
import Link from "next/link";

interface BookData {
  "book-name": string;
  author: string;
  category: string[] | string;
  rating: number;
  "available-books": number;
  "total-books": number;
  "cover-image": string;
  description: string;
}

interface PopularBooksProps {
  books: BookData[];
}

export default function PopularBooks({ books }: PopularBooksProps) {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="flex gap-4 items-end text-2xl font-bold text-bold dark:text-bold-dark">
        Popular Books
        <Link href="/library/all" className="text-lg underline opacity-75">View All</Link>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
}
