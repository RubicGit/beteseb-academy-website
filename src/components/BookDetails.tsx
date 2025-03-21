import { StarIcon, X } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
            {book.availableBooks >= 1 ? (
              <h1 className="flex items-center gap-2 text-sm font-semibold dark:font-bold py-2 px-4 rounded-full bg-primary/20 text-primary-dark dark:text-primary w-fit">
                <StarIcon className="w-4 h-4" strokeWidth={2.5} />
                Newly Available
              </h1>
            ) : (
              <h1 className="flex items-center gap-2 text-sm font-semibold dark:font-bold py-2 px-4 rounded-full bg-red-400/20 text-red-600 dark:text-red-400 w-fit">
                <X className="w-4 h-4" strokeWidth={2.5} />
                Out of Stock
              </h1>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:w-[24ch] xl:w-[28ch] font-bold py-6 text-text dark:text-text-dark">
              {book.bookName}
            </h1>

            <TooltipProvider>
              <div className="flex flex-col gap-6 md:gap-4">
                <h2 className="text-lg text-text dark:text-text-dark">
                  <div className="flex gap-2 flex-col md:flex-row md:gap-6 w-full lg:w-[36rem]">
                    <p className="font-medium flex">
                      Author:{" "}
                      <Tooltip>
                        <TooltipTrigger>
                          <span className="text-secondary dark:text-secondary font-bold px-2 line-clamp-1">
                            {book.author}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent className="bg-gray-800 text-text dark:bg-gray-900 dark:text-text-dark rounded-md px-2 py-1">
                          <span>{book.author}</span>
                        </TooltipContent>
                      </Tooltip>
                    </p>

                    <p className="font-medium flex">
                      Category:{" "}
                      <Tooltip>
                        <TooltipTrigger>
                          <span className="text-secondary dark:text-secondary font-bold px-2 line-clamp-1">
                            {Array.isArray(book.category)
                              ? book.category.join(", ")
                              : book.category}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent className="bg-gray-800 text-text dark:bg-gray-900 dark:text-text-dark rounded-md px-2 py-1 tooltip-animate-in">
                          {Array.isArray(book.category) ? (
                            <ul className="list-disc pl-4">
                              {book.category.map((cat, index) => (
                                <li
                                  key={index}
                                  className="text-gray-800 dark:text-text-dark"
                                >
                                  {cat}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <span>{book.category}</span>
                          )}
                        </TooltipContent>
                      </Tooltip>
                    </p>

                    <p className="font-medium flex">
                      Rating:{" "}
                      <span className="flex items-center gap-2 text-secondary dark:text-secondary font-bold px-2 line-clamp-1 relative group">
                        {book.rating}/5
                        <span className="absolute bottom-full left-0 hidden group-hover:block bg-gray-800 text-white text-xs rounded-md px-2 py-1">
                          {book.rating}/5
                        </span>
                      </span>
                    </p>
                  </div>
                </h2>
                <h2 className="text-lg text-text dark:text-text-dark">
                  <div className="flex gap-2 flex-col md:flex-row md:gap-6 w-full">
                    <p className="font-medium flex">
                      Available Books:{" "}
                      <span className="text-secondary dark:text-secondary font-bold px-2 line-clamp-1 relative group">
                        {book.availableBooks}
                        <span className="absolute bottom-full left-0 hidden group-hover:block bg-gray-800 text-white text-xs rounded-md px-2 py-1">
                          {book.availableBooks}
                        </span>
                      </span>
                    </p>
                    <p className="font-medium flex">
                      Total Books:{" "}
                      <span className="text-secondary dark:text-secondary font-bold px-2 line-clamp-1 relative group">
                        {book.totalBooks}
                        <span className="absolute bottom-full left-0 hidden group-hover:block bg-gray-800 text-white text-xs rounded-md px-2 py-1">
                          {book.totalBooks}
                        </span>
                      </span>
                    </p>
                  </div>
                </h2>
                <p className="text-md py-6 w-full max-w-[40rem] font-medium text-text dark:text-text-dark">
                  {book.description}
                </p>
              </div>
            </TooltipProvider>
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
