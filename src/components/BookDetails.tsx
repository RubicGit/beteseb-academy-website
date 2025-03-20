import { StarIcon } from "lucide-react";
import React from "react";

interface Book {
  bookName: string;
  description: string;
  author: string;
  category: string | string[];
  rating: number;
  availableBooks: number;
  totalBooks: number;
  publicationDate: string; // New property
  tableOfContents: string[]; // New property
}

export default function BookDetails({ book }: { book: Book }) {
  return (
    <>
    <div className="relative z-20 max-w-7xl px-4 mt-4">
      <div className="flex gap-16 w-full flex-col items-center md:flex-col md:items-center md:gap-8 lg:flex-row lg:gap-4">
        <div className="flex flex-col">
          <h1 className="flex items-center gap-2 text-sm font-semibold  dark:font-bold py-2 px-4 rounded-full bg-primary/20 text-primary-dark dark:text-primary w-fit">
            <StarIcon className="w-4 h-4" strokeWidth={2.5} />
            Newly Available
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:w-[24ch] xl:w-[28ch] font-bold py-6 text-text dark:text-text-dark">
            {book.bookName}
          </h1>
          <div className="flex flex-col gap-6 md:gap-4">
            <h2 className="text-lg text-text dark:text-text-dark">
              <div className="flex gap-2 flex-col md:flex-row md:gap-6 w-full lg:w-[36rem]">
                <p className="font-medium flex">
                  Author:{" "}
                  <span className="text-secondary dark:text-secondary font-bold px-2">
                    {book.author}
                  </span>
                </p>
                <p className="font-medium flex">
                  Category:{" "}
                  <span className="text-secondary dark:text-secondary font-bold px-2">
                    {Array.isArray(book.category)
                      ? book.category.join(", ")
                      : book.category}
                  </span>
                </p>
                <p className="font-medium flex">
                  Rating:{" "}
                  <span className="flex items-center gap-2 text-secondary dark:text-secondary font-bold px-2">
                    {book.rating}/5
                  </span>
                </p>
              </div>
            </h2>
            <h2 className="text-lg text-text dark:text-text-dark">
              <div className="flex gap-2 flex-col md:flex-row md:gap-6 w-full">
                <p className="font-medium flex">
                  Available Books:{" "}
                  <span className="text-secondary dark:text-secondary font-bold px-2">
                    {book.availableBooks}
                  </span>
                </p>
                <p className="font-medium flex">
                  Total Books:{" "}
                  <span className="text-secondary dark:text-secondary font-bold px-2">
                    {book.totalBooks}
                  </span>
                </p>
              </div>
            </h2>
            <p className="text-md py-6 w-full max-w-[40rem] font-medium text-text dark:text-text-dark">
              {book.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[20rem] h-auto justify-center items-center">
          <div className="bg-secondary dark:bg-secondary w-full sm:w-3/4 md:w-2/3 lg:w-full h-96 md:h-[28rem] lg:h-[28rem] rounded-lg shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300">
            Book Cover
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
