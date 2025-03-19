import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library | Beteseb Academy",
  description: "",
};

export default function LibraryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col bg-bg dark:bg-bg-dark text-text dark:text-text-dark">
      <Navbar />
      <main className="flex-1 px-8 py-8 md:px-8 max-w-7xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
