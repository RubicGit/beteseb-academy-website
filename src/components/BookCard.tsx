"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

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

interface BookCardProps {
  book: BookData;
  variant?: "short" | "tall"; // Add a variant prop
}

export default function BookCard({ book, variant = "short" }: BookCardProps) {
  const heightClass = variant === "short" ? "h-48" : "h-64"; // Determine height based on variant
  const lineClampClass = variant === "short" ? "line-clamp-1" : "line-clamp-2"; // Determine line clamp based on variant

  return (
    <div
      className="bg-background-secondary dark:bg-background-secondary rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden relative
      border border-gray-100 dark:border-gray-800
      dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
    >
      <div className="absolute inset-0 bg-secondary/5 dark:bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      <div className={`${heightClass} bg-secondary dark:bg-secondary flex items-center justify-center relative`}>
        {book["cover-image"] ? (
          <Image
            src={book["cover-image"]}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover"
            priority={false}
          />
        ) : (
          <div className="text-center text-text dark:text-text-dark">
            No Cover
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className={`font-bold text-lg mb-1 ${lineClampClass} text-text dark:text-text-dark`}>
          {book["book-name"]}
        </h3>
        <p className="text-sm text-text dark:text-text-dark mb-2">
          {book.author}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-1">
            {Array.isArray(book.category) ? (
              book.category.map((cat, idx) => (
                <span
                  key={idx}
                  className="bg-primary/20 text-primary-dark dark:text-primary text-xs px-2 py-1 rounded-full"
                >
                  {cat}
                </span>
              ))
            ) : (
              <span className="bg-primary/20 text-primary-dark dark:text-primary text-xs px-2 py-1 rounded-full">
                {book.category}
              </span>
            )}
          </div>
          <span className="flex items-center gap-2 text-sm font-semibold text-secondary dark:text-secondary">
            <Star size={16} className="inline-block mr-1" />
            {book.rating}/5
          </span>
        </div>
      </div>
    </div>
  );
}
