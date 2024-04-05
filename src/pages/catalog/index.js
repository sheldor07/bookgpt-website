import Header from "../components/Header";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";

import { properCase } from "../../utils/proper-case";
import books from "@/utils/bookDb";
export default function Catalog() {
  return (
    <div className="text-center ">
      <Header />

      <h1 className="  mt-14 text-center text-7xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#7928CA] to-[#FF0080]">
        Explore our book catalog
      </h1>
      <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {books.map((book) => (
          <BookCard
            key={book.id}
            showName={properCase(book.book_name)}
            name={book.book_name}
          />
        ))}
      </div>
      <Footer />
      {
        <style global jsx>{`
          body {
            background-color: black;
          }
        `}</style>
      }
    </div>
  );
}
