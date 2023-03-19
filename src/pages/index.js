import Link from "next/link"
import Image from "next/image"
import Footer from "./components/Footer"
import Header from "./components/Header"
import landingPic1 from "../../public/landing-pic-1.jpeg"
import landingPic2 from "../../public/landing-pic-2.jpeg"
import landingPic3 from "../../public/landing-pic-3.jpeg"
export default function Home() {
  return (
    <div className="container w-screen h-screen m-auto text-center">
      <Header/>
      <div className="p-2 font-extrabold text-transparent mt-52 text-9xl bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple ">
        Making books come alive
      </div>
      <div className="flex items-center mt-10 text-2xl not-italic font-normal leading-9 text-center text-gray-600 px-52">
        BookGPT is the ultimate solution for book lovers who want to keep up
        with the latest literary trends but don't have the time to read every
        book. Our AI-powered search reads the book for you, so you can get the
        answers you need in seconds. Plus, our interactive, minified version of
        the book makes it easy to read the most important parts in a fraction of
        the time.
      </div>
      <div className="grid grid-cols-2 mt-32 mx-96 gap-x-8">
        <button className="px-4 py-4 text-2xl font-bold text-black rounded-lg bg-neutral-50">
          Get in touch
        </button>
        <button className="px-4 py-4 text-2xl font-bold text-white rounded-lg bg-gradient-to-r from-green-400 to-blue-500">
          Explore our Catalog
        </button>
      </div>
      <div className="container">
        <div className="p-2 mt-56 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple ">
          Why BookGPT?
        </div>
        <div className="mt-10 text-4xl font-bold text-white">
          Stay Ahead of the Game with BookGPT
        </div>
        <div className="flex mt-10 text-2xl not-italic font-normal leading-9 text-center text-gray-600 mx-36 px-52">
          Ever felt like you're missing out on the latest bestsellers or classic
          books? Life can get busy, and it's not always easy to find the time to
          sit down and read. That's where BookGPT comes in - we offer an
          AI-powered search tool that gives you the key insights and takeaways
          from popular books, so you can stay in the loop without actually
          having to read them. No more FOMO, just the knowledge you need. Try
          BookGPT today and see for yourself!
        </div>
      </div>
      <div className="container">
        <div className="p-2 mt-56 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#7928CA] ">
          Our Solution
        </div>
        <div className="mt-10 text-4xl font-bold text-white">
          Instantly unlock book insights without reading.
        </div>
        <div className="flex gap-0">
          <Image
            className="flex-auto h-auto max-w-sm m-24 shadow-xl dark:shadow-gray-800"
            src={landingPic1}
          ></Image>
          <span
            className={
              "ml-48 @apply mx-0 w-[11px] h-[11px] shadow-[inset_0px_0px_0px_1.5px_#444444] rounded-[5.5px] background: rgba(255, 255, 255, 0.002);"
            }
          ></span>
          <span
            className={"-ml-1.5 mt-2 border-r-[#444444] border-r border-dashed"}
          ></span>
          <div className="flex-1 ml-10">
            <div className="mt-24 text-3xl font-bold text-left text-white">
              Cutting Edge Search
            </div>
            <div className="mt-10 text-2xl not-italic font-normal leading-9 text-left text-gray-600 ">
              <ul className="list-disc">
                <li>
                  With BookGPT's AI-powered search tool, you'll get instant
                  answers from bestsellers with just a few clicks. It's like
                  having a personal researcher at your fingertips!
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex">
        <Image
            className="flex-auto h-auto max-w-sm m-24 shadow-xl dark:shadow-gray-800"
            src={landingPic2}
          ></Image>
          <span
            className={
              "ml-48 @apply mx-0 w-[11px] h-[11px] shadow-[inset_0px_0px_0px_1.5px_#444444] rounded-[5.5px] background: rgba(255, 255, 255, 0.002);"
            }
          ></span>
          <span
            className={"-ml-1.5 mt-2 border-r-[#444444] border-r border-dashed"}
          ></span>
          <div className="flex-1 ml-10">
            <div className="mt-24 text-3xl font-bold text-left text-white">
              Engaging reading experience
            </div>
            <div className="mt-10 text-2xl not-italic font-normal leading-9 text-left text-gray-600 ">
              <ul className="list-disc">
                <li>
                  BookGPT offers an interactive reading experience that's
                  optimized for modern, fast-paced lifestyles. Our minified,
                  easy-to-read version of the book with relevant passages is
                  perfect for people who want to learn on the go.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex">
        <Image
            className="flex-auto h-auto max-w-sm m-24 shadow-xl dark:shadow-gray-800"
            src={landingPic3}
          ></Image>
          <span
            className={
              "ml-48 @apply mx-0 w-[11px] h-[11px] shadow-[inset_0px_0px_0px_1.5px_#444444] rounded-[5.5px] background: rgba(255, 255, 255, 0.002);"
            }
          ></span>
          <span
            className={"-ml-1.5 mt-2 border-r-[#444444] border-r border-dashed"}
          ></span>
          <div className="flex-1 ml-10">
            <div className="mt-24 text-3xl font-bold text-left text-white">
              Effortless learning{" "}
            </div>
            <div className="mt-10 text-2xl not-italic font-normal leading-9 text-left text-gray-600 ">
              <ul className="list-disc">
                <li>
                  BookGPT's time-saving solution lets you stay in the know and
                  up-to-date without sacrificing hours of your precious time.
                  Impress your friends and colleagues with your newfound
                  knowledge, all while keeping up with your busy schedule.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      {
        <style global jsx>{
          `
          body{
            background-color: black;
          }
          `
        }</style>
      }
    </div>
    
  );
}
