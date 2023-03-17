import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { useRef, useEffect } from 'react';
import * as containerStyles from '../styles/Carousel.module.css'

export default function Carousels({para1,para2,para3}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const divRef3 = useRef(null);

  function updateHeight(ref) {
    if (ref.current) {
      const textElement = ref.current.querySelector('.text-content');
      if (textElement) {
        ref.current.style.height = 'auto';
        ref.current.style.height = textElement.scrollHeight + 'px';
      }
    }
  } 

  useEffect(() => {
    updateHeight(divRef1);
    updateHeight(divRef2);
    updateHeight(divRef3);
  }, [para1, para2, para3]);

  let list_of_paragraphs = [para1,para2,para3]
  // write a function to go through the list of paragraphs and ensure that each paragraph has at least 50 words and at most 200 words if a paragraph has more than 200 words, split it into paragraphs until each paragraph has at most 200 words
  function splitParagraphs(list_of_paragraphs){
    let new_list_of_paragraphs = []
    for(let i=0;i<list_of_paragraphs.length;i++){

      let paragraph = list_of_paragraphs[i]
      let words = paragraph.split(" ")

      //check if the paragraph has at least 50 words
      if(words.length<50){
        continue
      }
      if(words.length>100){
        let new_paragraph = ""
        for(let j=0;j<words.length;j++){
          //check if the new paragraph has at least 50 words
          if(new_paragraph.split(" ").length>=50 && new_paragraph.split(" ").length<100){
            new_list_of_paragraphs.push(new_paragraph)  
            new_paragraph = ""
          }
          new_paragraph += words[j] + " "
        }
        new_list_of_paragraphs.push(new_paragraph)
      }
      else{
        new_list_of_paragraphs.push(paragraph)
      }
    }
    //go through the new list of paragraphs and remove the ones that have less than 50 words
    // if new list of paragraphs has more than 6, remove the last ones
    let new_new_list_of_paragraphs = []
    if(new_list_of_paragraphs.length>6){
      new_new_list_of_paragraphs = new_list_of_paragraphs.slice(0,6)
    }
    return new_new_list_of_paragraphs
  }
  list_of_paragraphs = splitParagraphs(list_of_paragraphs)

  return (
    <Carousel className={containerStyles.carousel} activeIndex={index} onSelect={handleSelect} variant="dark">
      {
        list_of_paragraphs.map((para,index) => {
          return (
            <Carousel.Item key={index} ref={divRef1}>
              <div className={containerStyles.textContent}>
                &ldquo;{para}&rdquo;
              </div>
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}
