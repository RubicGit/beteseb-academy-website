"use client";

import React from "react";
import { motion } from "framer-motion";
import NewlyAvailable from "@/components/NewlyAvailable";
import PopularBooks from "@/components/PopularBooks";

// Dummy books data for UI development
export const books = [
    {
      "book-name": "Extreme Series - Chemistry Grade 11-12",
      author: "Mengesha Moges",
      category: ["Educational", "Science"],
      rating: 4.8,
      "available-books": 15,
      "total-books": 20,
      "cover-image": "/assets/books/chemistry.jpg",
      description:
        "The Extreme Series Chemistry Grade 11-12 book is a comprehensive guide to key chemistry concepts with practical experiments and problem-solving sessions—essential for excelling in chemistry.",
    },
    {
      "book-name": "Advanced Physics - Mechanics and Thermodynamics",
      author: "Prof. Michael Chen",
      category: ["Science", "Physics"],
      rating: 4.7,
      "available-books": 8,
      "total-books": 12,
      "cover-image": "/books/physics.jpg",
      description:
        "The Advanced Physics textbook covers essential mechanics and thermodynamics principles with detailed examples, practical applications, and challenging problem sets designed for college preparation.",
    },
    {
      "book-name": "Biology Fundamentals - Cellular to Ecosystem",
      author: "Dr. Emily Rodriguez",
      category: "Science",
      rating: 4.6,
      "available-books": 10,
      "total-books": 15,
      "cover-image": "/books/biology.jpg",
      description:
        "Biology Fundamentals takes students on a journey from microscopic cellular structures to complex ecosystems, featuring detailed illustrations, case studies, and laboratory experiments for hands-on learning.",
    },
    {
      "book-name": "Mathematics Master Series - Calculus",
      author: "Dr. James Wilson",
      category: "Mathematics",
      rating: 4.9,
      "available-books": 7,
      "total-books": 10,
      "cover-image": "/books/calculus.jpg",
      description:
        "This comprehensive calculus textbook bridges theoretical concepts with real-world applications, featuring step-by-step problem solving, visualization techniques, and practice exercises for mastering differential and integral calculus.",
    },
    {
      "book-name": "Complete Guide to World History",
      author: "Prof. Elizabeth Taylor",
      category: "History",
      rating: 4.5,
      "available-books": 12,
      "total-books": 18,
      "cover-image": "/books/history.jpg",
      description:
        "The Complete Guide to World History chronicles human civilization from ancient societies to modern times, exploring cultural developments, political transformations, and technological innovations that shaped our global narrative.",
    },
    {
      "book-name": "English Literature Anthology",
      author: "Dr. Robert Brown",
      category: "Literature",
      rating: 4.4,
      "available-books": 9,
      "total-books": 15,
      "cover-image": "/books/literature.jpg",
      description:
        "This anthology presents a curated collection of influential literary works across different periods and genres, accompanied by critical analyses, historical context, and discussion questions to develop analytical thinking skills.",
    },
    {
      "book-name": "Computer Science Principles",
      author: "Prof. Alan Thomas",
      category: "Technology",
      rating: 4.7,
      "available-books": 6,
      "total-books": 10,
      "cover-image": "/books/cs.jpg",
      description:
        "Computer Science Principles introduces fundamental computing concepts including algorithms, data structures, and programming paradigms with practical coding exercises in Python and Java to build a solid foundation for further study.",
    },
    {
      "book-name": "Geography and Environmental Studies",
      author: "Dr. Maria Garcia",
      category: "Geography",
      rating: 4.3,
      "available-books": 11,
      "total-books": 14,
      "cover-image": "/books/geography.jpg",
      description:
        "This comprehensive guide explores physical geography, human settlements, and environmental challenges, featuring case studies on climate change, resource management, and sustainable development with detailed maps and data analysis.",
    },
  ];

  export const popularBooks = [
    {
      "book-name": "Extreme Series - Chemistry Grade 11-12",
      author: "Mengesha Moges",
      category: ["Educational", "Science"],
      rating: 4.8,
      "available-books": 15,
      "total-books": 20,
      "cover-image": "/assets/books/chemistry.jpg",
      description:
        "The Extreme Series Chemistry Grade 11-12 book is a comprehensive guide to key chemistry concepts with practical experiments and problem-solving sessions—essential for excelling in chemistry.",
    },
    {
      "book-name": "Mathematics Master Series - Calculus",
      author: "Dr. James Wilson",
      category: "Mathematics",
      rating: 4.9,
      "available-books": 7,
      "total-books": 10,
      "cover-image": "/books/calculus.jpg",
      description:
        "This comprehensive calculus textbook bridges theoretical concepts with real-world applications, featuring step-by-step problem solving, visualization techniques, and practice exercises for mastering differential and integral calculus.",
    },
    {
      "book-name": "Advanced Physics - Mechanics and Thermodynamics",
      author: "Prof. Michael Chen",
      category: ["Science", "Physics"],
      rating: 4.7,
      "available-books": 8,
      "total-books": 12,
      "cover-image": "/books/physics.jpg",
      description:
        "The Advanced Physics textbook covers essential mechanics and thermodynamics principles with detailed examples, practical applications, and challenging problem sets designed for college preparation.",
    },
    {
      "book-name": "Computer Science Principles",
      author: "Prof. Alan Thomas",
      category: "Technology",
      rating: 4.7,
      "available-books": 6,
      "total-books": 10,
      "cover-image": "/books/cs.jpg",
      description:
        "Computer Science Principles introduces fundamental computing concepts including algorithms, data structures, and programming paradigms with practical coding exercises in Python and Java to build a solid foundation for further study.",
    },
  ];
  
  export default function LibraryPage() {
    return (
      <div className="relative flex flex-col items-center min-h-[calc(100vh-20rem)] overflow-visible pt-0 lg:pt-8 pb-12 gap-12 bg-bg dark:bg-bg-dark text-text dark:text-text-dark">
        <div className="fixed inset-0 w-screen h-screen pointer-events-none">
          <div className="absolute top-[20rem] left-[80%] transform -translate-x-1/2 -translate-y-1/4 w-full">
            {/* Primary blob */}
            <motion.div
              className="absolute w-96 h-80 p-24 bg-accent dark:bg-accent rounded-full blur-[85px] opacity-40"
              animate={{
                borderRadius: [
                  "60% 40% 30% 70%/60% 30% 70% 40%",
                  "30% 60% 70% 40%/50% 60% 30% 60%",
                  "60% 40% 30% 70%/60% 30% 70% 40%",
                ],
                scale: [1, 1.2, 0.9, 1],
                x: [0, 60, -60, 0],
                y: [0, -50, 50, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />

            {/* Secondary blob */}
            <motion.div
              className="absolute w-80 h-72 bg-primary dark:bg-primary rounded-full blur-[95px] opacity-30"
              animate={{
                borderRadius: [
                  "40% 60% 70% 30%/40% 50% 60% 70%",
                  "70% 30% 40% 60%/60% 40% 30% 70%",
                  "40% 60% 70% 30%/40% 50% 60% 70%",
                ],
                scale: [0.8, 1.1, 0.9, 0.8],
                x: [-50, 70, -30, -50],
                y: [30, -60, 50, 30],
                rotate: [0, -15, 15, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        <NewlyAvailable book={popularBooks[0]} />
        <PopularBooks books={popularBooks} />
      </div>
  );
}
