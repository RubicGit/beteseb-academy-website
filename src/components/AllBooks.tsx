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

const sortOptions = [
  { value: "name", label: "Name" },
  { value: "author", label: "Author" },
  { value: "rating", label: "Rating" },
  { value: "available-books", label: "Available Books" },
];

export default function AllBooks({ books }: PopularBooksProps) {
  const [sortedBooks, setSortedBooks] = useState<BookData[]>(books);
  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = 16; // 4 rows of 4 books each
  const totalPages = Math.ceil(sortedBooks.length / booksPerPage);

  // Calculate the books to display for the current page
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const currentBooks = sortedBooks.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(sortOptions[0]);

  const handleOptionClick = (option: typeof sortOptions[0]) => {
    setSelectedOption(option);

    // Sorting logic
    const sortedBooks = [...books].sort((a, b) => {
      if (option.value === "name") {
        return a["book-name"].localeCompare(b["book-name"]);
      } else if (option.value === "author") {
        return a.author.localeCompare(b.author);
      } else if (option.value === "rating") {
        return b.rating - a.rating;
      } else if (option.value === "available-books") {
        return b["available-books"] - a["available-books"];
      }
      return 0;
    });
  
    setSortedBooks(sortedBooks);
    setCurrentPage(1); // Reset to the first page after sorting
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="flex justify-between items-end text-2xl font-bold text-bold dark:text-bold-dark">
        All Library Books
        <div className="relative flex justify-end">
      <button
        className="flex justify-between w-fit rounded-full bg-primary/20 dark:bg-primary/20 px-4 py-2 font-semibold text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        Sort by: {selectedOption.label}
      </button>
      {isOpen && (
        <div className="absolute flex flex-col gap-2 justify-end items-end w-48 mt-2 text-sm translate-y-[20%] text-right rounded-lg p-2 z-10">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              className="flex w-full text-right px-4 py-2 rounded-full bg-primary/20 hover:bg-primary/50"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {currentBooks.map((book, index) => (
          <BookCard key={index} book={book} variant="tall" />
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-end items-center gap-4 mt-6">
  <button
    className="px-4 py-2 bg-primary/20 text-primary font-semibold rounded-lg disabled:opacity-50"
    onClick={() => {
      handlePageChange(currentPage - 1);
      setTimeout(() => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" }); // Scroll to the bottom
      }, 0);
    }}
    disabled={currentPage === 1}
  >
    Previous
  </button>
  <span className="flex gap-2 items-center text-sm font-medium text-primary">
    <input
      type="number"
      value={currentPage}
      onChange={(e) => handlePageChange(Number(e.target.value))}
      className="text-center px-2 py-2 bg-primary/20 font-semibold rounded-lg outline-none appearance-none"
      min={1}
      max={totalPages}
    />
    of
    <span className="px-4 py-2 bg-primary/20 font-semibold rounded-lg">
      {totalPages.toString()}
    </span>
  </span>
  <button
    className="px-4 py-2 bg-primary/20 text-primary font-semibold rounded-lg disabled:opacity-50"
    onClick={() => {
      handlePageChange(currentPage + 1);
      setTimeout(() => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" }); // Scroll to the bottom
      }, 0);
    }}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>
    </div>
  );
}
