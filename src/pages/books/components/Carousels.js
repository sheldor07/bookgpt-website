import React, { useState, useEffect } from "react";
import classNames from "classnames";

const Carousels = ({ paragraphs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => cycle(1), 10000);
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
    <div className="relative m-10 min-h-xl">
      <div className="w-full h-full">
        {paragraphs &&
          paragraphs.map((paragraph, index) => (
            <div
              key={`paragraph-${index}`}
              className={classNames("w-full h-full carousel-image", {
                "opacity-0": activeIndex !== index,
                "opacity-100": activeIndex === index,
              })}
            >
              "&hellip; {paragraph} &hellip;"
            </div>
          ))}
      </div>
      <div className="relative flex justify-between w-full">
        <button className="z-10 inline-block h-full -m-10 transform translate-y-20" onClick={() => cycle(-1)}>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="35"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            ></path>
          </svg>
        </button>
        <button className="z-10 inline-block h-full -m-10 transform translate-y-20" onClick={() => cycle(1)}>
          <svg
            fill="none"
            stroke="currentColor"
            width="35"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousels;