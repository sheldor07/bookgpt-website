import Link from "next/link"
import Image from "next/image"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroText from "./components/HeroText"
import {supabase} from "../utils/supabase"
import BookCard from "./components/BookCard"
import {properCase} from "../utils/proper-case"
import Head from "next/head"

export default function Home({books}) {
  return (
    <div className="overflow-auto " >
      <Head>
        <title>GPT Book Club</title>
        <meta name="description" content="Discover the power of AI-driven book insights at GPT Book Club. Ask questions and get personalized answers from books, along with chapter summaries, top quotes & more for free!" />
        <meta property="og:title" content="GPT Book Club: Interactive AI-Powered Book Summaries" />
        <meta property="og:description" content="Discover the power of AI-driven book insights at GPT Book Club. Ask questions and get personalized answers from books, along with chapter summaries, top quotes & more for free!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gptbook.club/" />
        <meta property="og:image" content="https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/SEO-OG-IMG" />

        <meta name="twitter:title" content="GPT Book Club: Interactive AI-Powered Book Summaries" />
        <meta name="twitter:description" content="Discover the power of AI-driven book insights at GPT Book Club. Ask questions and get personalized answers from books, along with chapter summaries, top quotes & more for free!" />
        <meta name="twitter:image" content="https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/SEO-OG-IMG" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="keywords" content="AI, Book, Book Summaries, Book Quotes, Notion Book Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
      <div className="">
     <HeroText/>
     <div className="mx-5 mt-24 lg:mx-24">
     <div className="p-1 pb-20 lg:text-left text-center text-6xl sm:text-7xl lg:text-9xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#7928CA] to-[#FF0080]">Explore our book catalog</div>
           <div className="grid grid-cols-1 gap-5 mx-25 sm:mx-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.id} book_description = {book.catalog_description}showName={properCase(book.book_name)} name={book.book_name} />
        ))}
        
      </div>
      
     
       </div>
      <Footer className="dark"/>
      </div>
   
      {
        <style global jsx>{
          `
          body{
            background-color: black;
          }
          `
        }</style>
      }
    
   </div>)
}
export async function getServerSideProps() {
  let books = {};
  await  supabase.from('book-database').select('*').then(({ data, error }) => {
    if(error){
      // console.log("error", error)
    }
      books = data
      // console.log("books got",data)
    })
  

  return {
    props: {
      books,
    },
  };
}
