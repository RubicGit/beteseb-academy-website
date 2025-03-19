"use client";

import React from "react";
import { motion } from "framer-motion";
import AllBooksComponent from "@/components/AllBooks";
import { books } from "@/app/library/page";

export default function AllBooks() {
  return (
    <>
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
        <AllBooksComponent books={books} />
      </div>
    </>
  );
}
