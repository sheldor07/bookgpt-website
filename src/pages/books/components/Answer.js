import React from "react";
import Image from "next/image";
import Carousels from "./Carousels";
import { formatParagraphs } from "@/utils/formatParagraph";
export default function Answer({
  showName,
  bookData,
  answer,
  para1,
  para2,
  para3,
  gotResult,
  gradientFrom,
  gradientTo,
}) {
  // console.log("got result", gotResult);

  return (
    <div className={`xl:px-52 md:px-24 px-3 mt-10`}>
      <div className={`grid grid-cols-1 rounded-2xl lg:grid-cols-2`}>
        <div className={`flex flex-col `}>
          <div
            className={`mb-10 mt-10 text-center text-transparent font-bold  lg:ml-10 text-5xl lg:text-5xl`}
            style={{
              color: "transparent",
              backgroundImage: bookData
                ? `linear-gradient(90deg, ${bookData.gradient_from_col}, ${bookData.gradient_to_col})`
                : "",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            {showName} says...
          </div>
          <div className={`lg:m-10 p-5 rounded-xl bg-[white]`}>
            <div></div>
            {gotResult ? (
              <div>{answer}</div>
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
          className={`bg-white rounded-2xl lg:min-h-[400px] min-h-[500px] overflow-auto  mt-5 lg:m-10 w-full lg:w-auto border-solid`}
        >
          <div className={`text-3xl p-3 pt-5 font-semibold lg:p-10 pl-5`}>
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
