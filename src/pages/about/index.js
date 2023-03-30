import Link from "next/link"
import Image from "next/image"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeroText from "../components/HeroText"
import landingPic1 from "../../../public/landing-pic-1.jpeg"
import landingPic2 from "../../../public/landing-pic-2.jpeg"
import landingPic3 from "../../../public/landing-pic-3.jpeg"
export default function Home() {
  return (
    <div className="overflow-auto " >
      <Header/>
      <div className="mx-5 xl:mx-56">
     
      <div className="flex flex-col items-center text-center ">
        <div className="p-2 mt-24 font-extrabold text-transparent text-7xl lg:text-7xl bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple ">
          Why GPT Book Club?
        </div>
        <div className="mt-10 text-3xl font-bold text-white lg:text-4xl">
          Stay Ahead of the Game<br></br>with GPT Book Club
        </div>
        <div className="flex mx-10 mt-10 text-2xl not-italic font-normal leading-9 text-center text-gray-600 lg:mx-52 lg:mt-16 ">
          Ever felt like you're missing out on the latest bestsellers or classic
          books? Life can get busy, and it's not always easy to find the time to
          sit down and read. That's where GPT Book Club comes in - we offer an
          AI-powered search tool that gives you the key insights and takeaways
          from popular books, so you can stay in the loop without actually
          having to read them. No more FOMO, just the knowledge you need. Try
          GPT Book Club today and see for yourself!
        </div>
      </div> 
      <div className="flex flex-col items-center text-center ">
        <div className="p-2 mt-10 lg:mt-24 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#7928CA] ">
          Our Solution
        </div>
        <div className="mt-10 text-2xl font-bold text-white lg:text-4xl">
          Instantly unlock book insights without reading.
        </div>
      </div>
        <div className="grid grid-cols-1 sm:gap-10 sm:grid-cols-2">
          <div className="mt-10 lg:mt-16">
          <Image
            className="flex-shrink-0 rounded-lg shadow-6xl shadow-grey-800 w-[500px]"
            src={landingPic1}
          ></Image>
           
        </div>
        <div>
        <div className="mt-24 text-3xl font-bold text-center text-white">
              Cutting Edge Search
            </div>
            <div className="mt-10 text-2xl not-italic font-normal leading-9 text-center text-gray-600 ">
            With GPT Book Club's AI-powered search tool, you'll get instant
                  answers from bestsellers with just a few clicks. It's like
                  having a personal researcher at your fingertips!
            </div>
        </div>  
        <div className="flex mt-10">
          <Image
            className="flex-shrink-0 rounded-lg shadow-6xl shadow-grey-800 w-[500px]"
            src={landingPic2}
          ></Image>
           
        </div>
        <div>
        <div className="mt-24 text-3xl font-bold text-center text-white">
        Engaging reading experience
            </div>
            <div className="mt-10 text-2xl not-italic font-normal leading-9 text-center text-gray-600 ">
            GPT Book Club offers an interactive reading experience that's
                  optimized for modern, fast-paced lifestyles. Our minified,
                  easy-to-read version of the book with relevant passages is
                  perfect for people who want to learn on the go.
            </div>
        </div>
        <div className="mt-10">
          <Image
            className="flex-shrink-0 rounded-lg shadow-6xl shadow-grey-800 w-[500px]"
            src={landingPic3}
          ></Image>
           
        </div>
        <div>
        <div className="mt-24 text-3xl font-bold text-center text-white">
        Effortless learning{" "}
            </div>
            <div className="mt-10 text-2xl not-italic font-normal leading-9 text-center text-gray-600 ">
            GPT Book Club's time-saving solution lets you stay in the know and
                  up-to-date without sacrificing hours of your precious time.
                  Impress your friends and colleagues with your newfound
                  knowledge, all while keeping up with your busy schedule.
            </div>
        </div>
       </div>
       </div>
      <Footer className="dark"/>
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
