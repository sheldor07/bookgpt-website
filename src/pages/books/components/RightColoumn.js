import { useState, useEffect } from "react";

export default function RightColumn({bookName, gradientFrom,gradientTo, gumroadUrl }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([
    `https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/${bookName}/notion-mockup-1.png`,
    `https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/${bookName}/notion-mockup-2.png`,
    `https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/${bookName}/notion-mockup-3.png`,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, slides]);

  return (
    <div className="w-full mt-10 lg:mt-24 lg:w-1/2">
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
            <a href={gumroadUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={slide}
                alt={`Image ${index + 1}`}
                className="rounded-lg object-fit w-12/12 "
                style={{ width: '700px', height:'auto' }}
              />
            </a>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <button className="px-4 py-2 text-xl font-bold text-black rounded-lg lg:mt-4" style={{ backgroundImage: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`}}>
          Get the Ultimate Notion Template
        </button>
        <p className="mt-4 text-lg">
          Experience Chapter Summaries, Stellar Quotes, Real-Life Scenarios &
          More.
        </p>
      </div>
    </div>
  );
}