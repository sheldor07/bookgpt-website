import { Carousel } from "react-responsive-carousel";
import BookCard from "./BookCard";
import { properCase } from "./../../utils/proper-case";
import Link from "next/link";
import Signup from "./EmailSignup";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export default function HeroText({ books }) {
  return (
    <div className="grid grid-cols-1 md:mx-24 lg:grid-cols-2">
      <div className="p-12 lg:p-20 ">
        {/* ... existing code ... */}
        <div className="text-3xl font-extrabold text-transparent animate-in bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple ">
          Welcome to <br></br> <p className="text-5xl">GPT Book Club</p>
        </div>
        <div className="mt-12 font-normal text-gray-600 text-md md:text-lg ">
          GPT Book Club is the ultimate solution for book lovers who want to
          keep up with the latest literary trends but don't have the time to
          read every book.
        </div>
        <div>
          <button className="p-2 mt-10 text-white transition ease-in-out delay-150 bg-teal-500 rounded-lg text-md hover:-translate-y-1 hover:scale-110 md:text-lg font-base">
            <Link href="/knowledge-hub">Get a guide</Link>
          </button>
          <button className="p-2 my-2 transition ease-in-out delay-150 bg-white rounded-lg sm:mx-4 text-md text-black-500 hover:-translate-y-1 hover:scale-110 md:text-lg font-base">
            <Link href="/skin-in-the-game">Talk to our books for FREE </Link>
          </button>
        </div>
        <Signup />
      </div>
      {books ? (
        <div className="flex flex-col items-center justify-center collapse md:visible">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
          >
            {books.map((book) => (
              <div key={book.id}>
                <BookCard
                  book_description={book.catalog_description}
                  showName={properCase(book.book_name)}
                  name={book.book_name}
                />
              </div>
            ))}
          </Carousel>
        </div>
      ) : null}
    </div>
  );
}
