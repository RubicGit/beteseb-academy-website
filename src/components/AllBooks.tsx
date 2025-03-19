"use client";

import React, { useState } from "react";
import BookCard from "@/components/BookCard";

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

export default function AllBooks({ books }: PopularBooksProps) {
  const [sortedBooks, setSortedBooks] = useState<BookData[]>(books);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="flex justify-between items-end text-2xl font-bold text-bold dark:text-bold-dark">
        All Library Books
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm font-medium">
            Sort by:
          </label>
          <select
            id="sort"
            className="ring-none border-none outline-none rounded-full font-semibold p-2 text-sm bg-primary/20 dark:bg-primary/20"
            onChange={(e) => {
              const sortOption = e.target.value;
              const sortedBooks = [...books].sort((a, b) => {
            if (sortOption === "name") {
              return a["book-name"].localeCompare(b["book-name"]);
            } else if (sortOption === "author") {
              return a.author.localeCompare(b.author);
            } else if (sortOption === "rating") {
              return b.rating - a.rating;
            } else if (sortOption === "available-books") {
              return b["available-books"] - a["available-books"];
            }
            return 0;
              });
              setSortedBooks(sortedBooks);
            }}
          >
            <option className="rounded-2xl" value="name">Name</option>
            <option className="rounded-2xl" value="author">Author</option>
            <option className="rounded-2xl" value="rating">Rating</option>
            <option className="rounded-2xl" value="available-books">Available Books</option>
          </select>
        </div>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {sortedBooks.map((book, index) => (
            <BookCard key={index} book={book} variant="tall" />
        ))}
        </div>
      </div>
  );
}
