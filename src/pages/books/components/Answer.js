import React from "react";
import Image from "next/image";
import Carousels from "./Carousels";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import homeStyles from "../styles/Answer.module.css";
import landingStyles from "../styles/Home.module.css";


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
        const remainingWords = currentParagraph.split(" ").splice(100).join(" ");
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

  const primary_col = bookData.primary;
  const secondary_col = bookData.secondary;
  return (
    <div className={`px-52 mt-20`}>
      <div className={`grid grid-cols-1 rounded-2xl lg:grid-cols-2`}>
        <div className={``}>
          <div className={`mt-10 pl-3 text-center font-bold ml-10 lg:text-left text-4xl`}>
            {showName} says...
          </div>
          {gotResult ? (
            <div
              className={`m-10 p-5 rounded-xl bg-[white] border-2 border-black border-solid`}
            >
              {answer}
            </div>
          ) : (
            <div className={`m-10 ml-20 p-5 `}>
              <div role="status" class="max-w-sm animate-pulse">
                <div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
        <div
          className={`bg-white border-black border-8 rounded-xl m-10 w-full lg:w-auto border-solid`}
        >
          <div className={`text-3xl font-semibold p-10 pl-5`}>
            From {showName}:
          </div>
          {gotResult ? (
            <Carousels paragraphs={formatParagraphs([para1, para2, para3])} />
          ) : (
            <div className={`ml-7`}>
              <div role="status" class="max-w-sm animate-pulse">
                <div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-1"></div>
                <div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-1"></div>
                <div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-1"></div>
                <div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-1"></div>
                <div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-1"></div>
                <div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-1"></div>
                <div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-1"></div>
                <div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-1"></div>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
