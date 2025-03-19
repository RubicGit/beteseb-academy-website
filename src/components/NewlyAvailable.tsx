"use client";

import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";

interface BookData {
  bookName: string; // Updated to camelCase
  author: string;
  category: string[] | string;
  rating: number;
  availableBooks: number; // Updated to camelCase
  totalBooks: number; // Updated to camelCase
  coverImage: string; // Updated to camelCase
  description: string;
}

interface NewlyAvailableProps {
  book: BookData;
}

export default function NewlyAvailable({ book }: NewlyAvailableProps) {
  return (
    <div className="relative z-20 max-w-7xl px-4 mt-4">
      <div className="flex gap-8 w-full flex-col md:flex-col md:items-center md:gap-8 lg:flex-row lg:gap-4">
        <div className="flex flex-col flex-1">
          <h1 className="flex items-center gap-2 text-sm font-semibold dark:font-bold py-2 px-4 rounded-full bg-primary/20 text-primary-dark dark:text-primary w-fit">
            <StarIcon className="w-4 h-4" strokeWidth={2.5} />
            Newly Available
          </h1>
          <h1 className="text-5xl font-bold w-full py-6 text-text dark:text-text-dark">
            {book.bookName}
          </h1>
          <div className="flex flex-col gap-6 md:gap-4">
            <h2 className="text-lg text-text dark:text-text-dark">
              <div className="flex gap-2 flex-col md:flex-row md:gap-6">
                <p className="font-medium">
                  Author:{" "}
                  <span className="text-secondary dark:text-secondary font-bold px-2">
                    {book.author}
                  </span>
                </p>
                <p className="font-medium">
                  Category:{" "}
                  <span className="text-secondary dark:text-secondary font-bold px-2">
                    {Array.isArray(book.category)
                      ? book.category[0]
                      : book.category}
                  </span>
                </p>
                <p className="font-medium flex">
                  Rating:{" "}
                  <span className="flex items-center gap-2 text-secondary dark:text-secondary font-bold px-2">
                    <StarIcon className="w-4 h-4" strokeWidth={3} />
                    {book.rating}/5
                  </span>
                </p>
              </div>
            </h2>
            <h2 className="text-lg text-text dark:text-text-dark">
              <div className="flex gap-2 flex-col md:flex-row md:gap-6">
                <p className="font-medium">
                  Available Books:{" "}
                  <span className="text-secondary dark:text-secondary font-bold px-2">
                    {book.availableBooks}
                  </span>
                </p>
                <p className="font-medium">
                  Total:{" "}
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
          <motion.button
            className="bg-primary dark:bg-primary-dark text-text dark:text-text-dark font-semibold px-4 py-2 my-2 rounded-lg w-fit cursor-pointer relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            <motion.div
              className="absolute inset-0 bg-accent dark:bg-accent-dark rounded-lg opacity-0"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: [0, 0.3, 0.1],
                scale: [1, 1.1, 1.05],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-lg opacity-0"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: 1,
                boxShadow: [
                  "0px 0px 0px 0px rgba(var(--color-accent-rgb), 0)",
                  "0px 0px 20px 3px rgba(var(--color-accent-rgb), 0.6)",
                  "0px 0px 10px 1px rgba(var(--color-accent-rgb), 0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
            <span className="relative z-10">Borrow Book</span>
          </motion.button>
        </div>
        <div className="flex flex-col gap-4 h-auto justify-center items-center md:justify-start md:items-start md:min-w-[250px] lg:min-w-[300px]">
          <div className="bg-secondary dark:bg-secondary w-72 h-96 md:w-80 md:h-[28rem] lg:w-80 lg:h-[28rem] rounded-lg shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300">
            Book Cover
          </div>
        </div>
      </div>
    </div>
  );
}
