import { books } from "@/data/booksData";
import { notFound } from "next/navigation";
import BookDetails from "@/components/BookDetails";
import RelatedBooks from "@/components/RelatedBooks";
import BookAdditionalDetails from "@/components/BookAdditionalDetails";

export default function BookPage({ params }: { params: { bookURL: string } }) {
  const book = books.find((b) => b.bookURL === params.bookURL);

  if (!book) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center p-8 gap-4">
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
