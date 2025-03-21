import { books } from "@/data/booksData";
import { notFound } from "next/navigation";
import BookDetails from "@/components/BookDetails";
import RelatedBooks from "@/components/RelatedBooks";
import BookAdditionalDetails from "@/components/BookAdditionalDetails";
import AnimatedBlob from "@/components/AnimatedBlob"; // Ensure this matches the updated export

export default function BookPage({ params }: { params: { bookURL: string } }) {
  const book = books.find((b) => b.bookURL === params.bookURL);

  if (!book) {
    notFound();
  }

  return (
    <div className="relative flex flex-col items-center min-h-[calc(100vh-20rem)] overflow-visible pt-8 pb-12 gap-12 bg-bg dark:bg-bg-dark text-text dark:text-text-dark">
      {/* Blob animations */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none">
        <div className="absolute top-[15rem] left-[70%] transform -translate-x-1/2 -translate-y-1/4 w-full">
          {/* Primary blob */}
          <AnimatedBlob
            size="w-[28rem] h-[24rem]"
            color="bg-accent dark:bg-accent"
            blur="blur-[85px]"
            opacity="opacity-40"
            animationDuration={10}
          />

          {/* Secondary blob (modified) */}
          <AnimatedBlob
            size="w-[36rem] h-[30rem]"
            color="bg-primary dark:bg-primary"
            blur="blur-[100px]"
            opacity="opacity-30"
            animationDuration={14}
            animationPattern={{
              borderRadius: [
                "50% 50% 60% 40%/40% 60% 50% 50%",
                "40% 60% 50% 50%/50% 40% 60% 40%",
                "50% 50% 60% 40%/40% 60% 50% 50%",
              ],
              scale: [0.9, 1.1, 1, 0.9],
              x: [-60, 80, -40, -60],
              y: [40, -50, 60, 40],
              rotate: [0, -20, 20, 0],
            }}
          />
        </div>
      </div>

      {/* Book details and additional content */}
      <BookDetails book={book} />
      <div className="flex flex-col w-full gap-4 justify-start md:flex-col md:justify-between lg:flex-row">
        <BookAdditionalDetails
          publicationDate={book.publicationDate}
          tableOfContents={book.tableOfContents}
        />
        <RelatedBooks />
      </div>
    </div>
  );
}
