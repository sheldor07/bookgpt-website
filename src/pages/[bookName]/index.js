import Head from "next/head";
import { useState, useRef, useEffect, use } from "react";
import { useRouter } from "next/router";
//importing components
import Header from "../books/components/Header";
import Footer from "../components/Footer";
import RightColoumn from "../books/components/RightColoumn";
import Answer from "../books/components/Answer";

//importing
import { supabase } from "../../utils/supabase";
import { properCase } from "../../utils/proper-case";
import BookSeo from "../books/components/BookSeo";

export default function Home({ bookData }) {
  // console.log(bookData);
  const router = useRouter();
  // console.log("router", router.query);
  const bookName = router.query.bookName;
  const [showName, setShowName] = useState("");
  if (bookName != undefined && showName == "") {
    setShowName(properCase(bookName));
  }

  const [question, setQuestion] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [gotResult, setGotResult] = useState(true);
  const [result, setResult] = useState("");
  const [passages, setPassages] = useState(["", "", ""]);
  const answerRef = useRef(null);
  const [gradientFrom, setGradientFrom] = useState("purple-400");
  const [gradientTo, setGradientTo] = useState("blue-400");
  const [shouldGenerate, setShouldGenerate] = useState(false);
  useEffect(() => {
    setGradientFrom(bookData.gradientFrom);
    setGradientTo(bookData.gradientTo);
  }, [bookData]);
  useEffect(() => {
    if (shouldGenerate) {
      generateAnswer(true);
      setShouldGenerate(false);
    }
  }, [question]);
  function handleChange(event) {
    setQuestion(event.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      generateAnswer();
    }
  };
  async function generateAnswer(suggested) {
    let btnSubmit = document.getElementById("btnSubmit");
    let suggestedButton = document.getElementsByClassName("suggested-question");

    if (suggested) {
      for (let i = 0; i < suggestedButton.length; i++) {
        suggestedButton[i].disabled = true;
      }
    }
    if (question === "") {
      return;
    }
    btnSubmit.disabled = true;
    setGotResult(false);
    setShowResult(true);
    handleScroll(answerRef.current);
    // let check = "false";
    // console.log("query", question);
    // console.log("bg gradients color", gradientFrom, gradientTo);
    try
    {const passageResponse = await fetch("/api/passages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookName, question }),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
      const passageData = passageResponse;
    setPassages([
      passageData.top_3_passages[0]["Content"],
      passageData.top_3_passages[1]["Content"],
      passageData.top_3_passages[2]["Content"],
    ]);
    const answerResponse = await fetch("/api/search", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookName: bookName,
        question: question,
        passages: passageData.all_passages,
      }),
    });
    const data = answerResponse.body;

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    let answerResult = "";

    setGotResult(true);
    if (suggested) {
      for (let i = 0; i < suggestedButton.length; i++) {
        suggestedButton[i].disabled = false;
      }
    }
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      answerResult += chunkValue;
      setResult(answerResult);
    }

    btnSubmit.disabled = false;
    }
    catch(err){
      // console.log(err);
      setGotResult(true);
      btnSubmit.disabled = false;
      setResult("Sorry, we are facing some issues from OpenAI. Please try again later.");
      return;
    }
    
  }
  // function SearchBox(){
  //  return( )
  // }
  const handleScroll = (ref) => {
    setTimeout(() => {
      window.scrollTo({
        top: ref.offsetTop,
        left: 100,
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <>
      <BookSeo
        bookName={showName}
        summary={bookData.description}
        ogImageUrl={`https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/${bookName}/preview.png`}
        twitterImageUrl={`https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/${bookName}/preview.png`}
      />

      <main id="main">
        <div className={`xl:px-52`}>
          <Header gumroadUrl={bookData.gumroadUrl} />
          <div className="flex flex-col lg:flex-row ">
            {/* Left Column */}
            <div className="flex flex-col w-full p-8 mt-8 lg:w-1/2">
              {/* 1 */}
              <h1 className="mt-0 text-6xl font-bold text-white lg:mt-8">
                Hey, I'm{" "}
                <span
                  style={{
                    color: "transparent",
                    backgroundImage: `linear-gradient(90deg, ${bookData.gradientFrom}, ${bookData.gradientTo})`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  {showName}
                </span>{" "}
                GPT.
              </h1>
              {/* 2 */}
              <p className="mt-4 text-xl text-white">
                Uncover the power of knowledge, ask me any question and get{" "}
                <span className="font-normal font-bold lg:font-bold">
                  book-sourced
                </span>{" "}
                answers.
              </p>
              <p className="mt-8 text-xl font-bold text-white">
                Ask me a question
              </p>
              <div className="flex items-center mt-2">
                <div className="relative w-full">
                  <input
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    type="text"
                    placeholder={bookData.placeholderText}
                    className="w-full px-4 py-2 pr-12 bg-white border border-black rounded-lg"
                  />
                  <button
                    id="btnSubmit"
                    onClick={() => generateAnswer(false)}
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${bookData.gradientFrom}, ${bookData.gradientTo})`,
                    }}
                    className="absolute top-0 right-0 flex items-center justify-center h-full rounded-r-lg"
                  >
                    <svg
                      width="40"
                      ƒ
                      height="30"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.9747 25.7429C19.5576 29.2807 13.0918 29.0022 8.9972 24.9076C4.6038 20.5142 4.6038 13.3911 8.9972 8.99769C13.3906 4.60429 20.5137 4.60429 24.9071 8.99769C29.0017 13.0923 29.2802 19.558 25.7424 23.9751L34.3352 32.5679C34.8233 33.056 34.8233 33.8475 34.3352 34.3356C33.847 34.8238 33.0556 34.8238 32.5674 34.3356L23.9747 25.7429ZM10.765 23.1398C7.34788 19.7227 7.34788 14.1825 10.765 10.7655C14.1821 7.34836 19.7222 7.34837 23.1393 10.7655C26.5539 14.18 26.5564 19.7146 23.1469 23.1323C23.1443 23.1348 23.1418 23.1373 23.1393 23.1398C23.1368 23.1423 23.1343 23.1448 23.1318 23.1473C19.7141 26.5569 14.1795 26.5544 10.765 23.1398Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* 5 */}
              <p className="mt-8 text-xl font-bold text-white">
                Or try one of these
              </p>

              <div className="flex flex-wrap mt-2">
                <div
                  className="px-4 py-1 mb-4 mr-4 text-xl font-bold bg-white border border-black rounded-lg cursor-pointer suggested-question"
                  onClick={() => {
                    setQuestion(bookData.suggestedQueries[0]);
                    setShouldGenerate(true);
                  }}
                  disabled={gotResult ? false : true}
                >
                    {bookData.suggestedQueries[0]}

                </div>
                <button
                  className="px-4 py-1 mb-4 text-xl font-bold bg-white border border-black rounded-lg cursor-pointer suggested-question"
                  onClick={() => {
                    setQuestion(bookData.suggestedQueries[1]);
                    setShouldGenerate(true);
                  }}
                  disabled={gotResult ? false : true}
                >
                    {bookData.suggestedQueries[1]}

                </button>
              </div>
              {/* 6 */}
            </div>
            {/* Right Column */}
            <RightColoumn
              bookName={bookName}
              gradientFrom={bookData.gradientFrom}
              gradientTo={bookData.gradientTo}
              gumroadUrl={bookData.gumroadUrl}
            />
          </div>
        </div>

        <div ref={answerRef}>
          {showResult ? (
            <Answer
              bookData={bookData}
              showName={showName}
              gotResult={gotResult}
              answer={result}
              para1={passages[0]}
              para2={passages[1]}
              para3={passages[2]}
              gradientFrom={bookData.gradientFrom}
              gradientTo={bookData.gradientTo}
            />
          ) : (
            <div></div>
          )}
        </div>
        <Footer />
      </main>
      <style global jsx>
        {`
          body {
            --bg-color:black;


            background-color: var(--bg-color);
            
          a {
            color: inherit;
            text-decoration: none;
          }
          a:active {
            color: inherit;
            text-decoration: none;
          }
          a:hover {
            color: white;
            text-decoration: none;
          }
          .bg-gradient-to-r {
            background-image: linear-gradient(
              90deg,
              #${bookData.gradientFrom},
              #${bookData.gradientTo}
            );
            
        `}
      </style>
    </>
  );
}

// Convert Tailwind color name to CSS color value
function colorNameToValue(colorName) {
  const colorValues = {
    "amber-400": "#f59e0b",
    "orange-400": "#fb923c",
    // Add more color name/value pairs if needed
  };
  return colorValues[colorName] || colorName;
}

export async function getServerSideProps(context) {
  const { bookName } = context.query;

  const { data: books, error } = await supabase
    .from("book-database")
    .select(
      "gradient_from_col, gradient_to_col, placeholder_text, suggested_queries,gumroad_url,gumroad_description"
    )
    .eq("book_name", bookName)
    .single();
  if (error) {
    return {
      notFound: true,
    };
  }
  // console.log(books);
  return {
    props: {
      bookData: {
        gradientFrom: books.gradient_from_col,
        gradientTo: books.gradient_to_col,
        placeholderText: books.placeholder_text,
        suggestedQueries: books.suggested_queries,
        gumroadUrl: books.gumroad_url,
        description: books.gumroad_description,
      },
    },
  };
}
