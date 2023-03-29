function formatParagraphs(paragraphs){
    const formattedParagraphs = [];
    let currentParagraph = "";
    
    paragraphs.forEach((paragraph) => {
      const wordCount = paragraph.split(" ").length;
    
      if (wordCount < 50 && currentParagraph) {
        const combinedWordCount = currentParagraph.split(" ").length + wordCount;
    
        if (combinedWordCount <= 100) {
          currentParagraph += " " + paragraph;
        } else {
          formattedParagraphs.push(currentParagraph);
          currentParagraph = paragraph;
        }
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
    console.log(formattedParagraphs)
    return formattedParagraphs;

}
module.exports = {formatParagraphs}