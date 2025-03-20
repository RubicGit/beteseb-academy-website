import React from "react";

interface BookAdditionalDetailsProps {
  publicationDate: string;
  tableOfContents: string[];
}

export default function BookAdditionalDetails({
  publicationDate,
  tableOfContents,
}: BookAdditionalDetailsProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-text dark:text-text-dark">
        Additional Details
      </h2>
      <p className="mt-2 text-lg text-text dark:text-text-dark">
        <strong>Publication Date:</strong> {publicationDate}
      </p>
      <h2 className="mt-6 text-2xl font-bold text-text dark:text-text-dark">
        Table of Contents
      </h2>
      <ul className="list-disc list-inside mt-2 text-lg text-text dark:text-text-dark">
        {tableOfContents.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
