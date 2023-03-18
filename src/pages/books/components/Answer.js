import React from "react";
import Image from "next/image";
import Carousels from "./Carousels";
import homeStyles from "../styles/Answer.module.css";
export default function Answer({bookName,answer, para1, para2, para3, gotResult }) {

    
     
  return (
    <div className={`container`}>
      <div className={`${homeStyles['landing-container']}`}>
        <div className={`row ${homeStyles.row} ${homeStyles['answer-container']} ${homeStyles['answer-card']}`}>
          <div className={`col ${homeStyles.col}`}>
            <div className={`${homeStyles['answer-header']}`}>{bookName} says...</div>
            {gotResult ? (
              <div className={`${homeStyles['answer-text']}`}>{answer}</div>
            ) : (
              <SkeletonTheme color="#eae9e3" highlightColor="#8a929b">
                <Skeleton className={`${homeStyles['answer-skeleton']} ${homeStyles['passage-skeleton']}`} count={10} />
              </SkeletonTheme>
            )}
          </div>
          <div className={`col ${homeStyles.col}`}>
            <div className={`${homeStyles['answer-passages']}`}>
              <div className={`${homeStyles['answer-passages-header']}`}>From {bookName}:</div>
              {gotResult ? (
                <Carousels para1={para1} para2={para2} para3={para3} />
              ) : (
                <SkeletonTheme color="#eae9e3" highlightColor="#8a929b">
                  <Skeleton className={`${homeStyles['passage-skeleton']}`} count={7} />
                </SkeletonTheme>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  

}
