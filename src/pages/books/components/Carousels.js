import React, { useState, useEffect } from "react";
import classNames from "classnames";

const Carousels = ({ paragraphs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => cycle(1), 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const cycle = (direction) => {
    setActiveIndex((prevActiveIndex) => {
      const nextIndex = prevActiveIndex + direction;

      if (nextIndex < 0) return paragraphs.length - 1;
      if (nextIndex > paragraphs.length - 1) return 0;

      return nextIndex;
    });
  };

  return (
    <div className="relative min-h-lg">
      <div className="absolute top-0 left-0 w-full h-full">
        {paragraphs &&
          paragraphs.map((paragraph, index) => (
            <div
              key={`paragraph-${index}`}
              className={classNames("w-full h-full", {
                "opacity-0": activeIndex !== index,
                "opacity-100": activeIndex === index,
              })}
            >
              {paragraph}
            </div>
          ))}
      </div>
      <button
        className="absolute left-0 z-10 p-2 transform -translate-y-1/2 top-1/2"
        onClick={() => cycle(-1)}
      >
        <div className="text-5xl font-semibold text-black">‹</div>
      </button>
      <button
        className="absolute right-0 z-10 p-2 transform -translate-y-1/2 top-1/2"
        onClick={() => cycle(1)}
      >
        <div className="text-5xl font-semibold text-black">›</div>
      </button>
    </div>
  );
};

export default Carousels;