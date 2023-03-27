import React from "react";
import Image from "next/image";
import Carousels from "./Carousels";

export default function Answer({
  showName,
  bookData,
  answer,
  para1,
  para2,
  para3,
  gotResult,
}) {
  const formatParagraphs = (paragraphs) => {
    const formattedParagraphs = [];
    let currentParagraph = "";

    paragraphs.forEach((paragraph) => {
      const wordCount = paragraph.split(" ").length;

      if (wordCount < 50 && currentParagraph) {
        currentParagraph += " " + paragraph;
      } else {
        if (currentParagraph) {
          formattedParagraphs.push(currentParagraph);
        }
        currentParagraph = paragraph;
      }

      while (currentParagraph.split(" ").length > 100) {
        const firstWords = currentParagraph.split(" ", 100).join(" ");
        const remainingWords = currentParagraph
          .split(" ")
          .splice(100)
          .join(" ");
        formattedParagraphs.push(firstWords);
        currentParagraph = remainingWords;
      }
    });

    if (currentParagraph) {
      formattedParagraphs.push(currentParagraph);
    }

    return formattedParagraphs;
  };
  console.log("got result", gotResult);
  const primary_col = bookData===undefined?'#ffff':bookData.primary;
  return (
    <div className={`xl:px-52 px-10 mt-20`}>
      <div className={`grid grid-cols-1 rounded-2xl lg:grid-cols-2`}>
        <div className={`flex flex-col `}>
          <div
            className={`mt-10 pl-3 text-center font-bold ml-10 lg:text-left text-4xl`}
          >
            {showName} says...
          </div>
          <div
            className={`m-10 p-5 rounded-xl bg-[white] border-2 border-black border-solid`}
          >
            {gotResult ? (
              { answer }
            ) : (
              <div className="p-5 m-10 mx-0 space-y-2">
                <div className="w-full h-5 bg-gray-300 rounded pulse"></div>
                <div className="w-full h-5 bg-gray-300 rounded pulse"></div>
                <div className="w-full h-5 bg-gray-300 rounded pulse"></div>
                <div className="w-full h-5 bg-gray-300 rounded pulse"></div>
                <div className="w-full h-5 bg-gray-300 rounded pulse"></div>
                <div className="w-full h-5 bg-gray-300 rounded pulse"></div>
                <div className="w-full h-5 bg-gray-300 rounded pulse"></div>
              </div>
            )}
          </div>
        </div>
        <div
          className={`bg-white border-black border-8 rounded-xl min-h-[400px] m-10 w-full lg:w-auto border-solid`}
        >
          <div className={`text-3xl font-semibold p-10 pl-5`}>
            From {showName}:
          </div>

          {gotResult ? (
            <Carousels paragraphs={formatParagraphs([para1, para2, para3])} />
          ) : (
            <div className="mr-4 space-y-2 ml-7">
              <div className="w-full h-5 bg-gray-300 rounded pulse"></div>
              <div className="w-full h-5 bg-gray-300 rounded pulse"></div>
              <div className="w-full h-5 bg-gray-300 rounded pulse"></div>
              <div className="w-full h-5 bg-gray-300 rounded pulse"></div>
              <div className="w-full h-5 bg-gray-300 rounded pulse"></div>
              <div className="w-full h-5 bg-gray-300 rounded pulse"></div>
              <div className="w-full h-5 bg-gray-300 rounded pulse"></div>
              <div className="w-full h-5 bg-gray-300 rounded pulse"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
