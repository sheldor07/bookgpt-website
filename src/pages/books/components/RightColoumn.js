import { useState, useEffect } from "react";

export default function RightColumn() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([
    "https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/atomic-habits/notion-mockup-1.png",
    "https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/atomic-habits/notion-mockup-2.png",
    "https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/atomic-habits/notion-mockup-3.png",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, slides]);

  return (
    <div className="w-full lg:w-1/2">
      <div
        className="relative flex items-center justify-center flex-grow lg:mt-8"
        style={{ minHeight: "420px" }}>
        {slides.map((slide, index) => (
          <div
            className={`carousel-image ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            key={index}
          >
            <img
              src={slide}
              alt={`Image ${index + 1}`}
              className="object-cover rounded-lg w-12/12 lg:w-11/12"
            />
          </div>
        ))}
      </div>
      <div className="ml-8 mr-8 text-center">
        <button className="px-4 py-2 text-white bg-black rounded-lg lg:mt-4">
          Get the Ultimate Notion Template
        </button>
        <p className="text-[15px] mt-4">
          Experience Chapter Summaries, Stellar Quotes, Real-Life Scenarios &
          More.
        </p>
      </div>
    </div>
  );
}